import rough from 'roughjs'
import EventEmitter from 'eventemitter3'
import {
  box,
  point,
  segment,
  vector,
  Point,
  Path,
  Box,
  Polygon,
  Segment,
  point2polygon,
  intersectSegment2Box,
} from 'romgrk-2d-geometry'
import { EMPTY_ARRAY } from './prelude'
import * as logic from './logic'
import * as electric from './electric'
import * as astar from './astar'
import './circuit.css'

let components = logic.getDefaultComponents()

const TAU = Math.PI * 2

type RC = ReturnType<typeof rough.svg>
type EdgeName =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'

enum PassThrough {
  YES = 0,
  PREFER_NOT = 1,
  NO = 2
}

export enum Orientation {
  TOP    = 0.00 * TAU,
  RIGHT  = 0.25 * TAU,
  BOTTOM = 0.50 * TAU,
  LEFT   = 0.75 * TAU,
}
export const TOP    = Orientation.TOP
export const RIGHT  = Orientation.RIGHT
export const BOTTOM = Orientation.BOTTOM
export const LEFT   = Orientation.LEFT

const TEXT_HEIGHT = 18

const COLOR_ON  = 'yellow'
const COLOR_OFF = '#aaa'
const COLOR_LINK_OFF = '#555'
const COLOR_EDGE = '#aaa'
const COLOR_GRID = 'rgba(255, 255, 255, 0.05)'

const GRID_SIZE = 10
const DOT_SIZE = 8

type TextOptions = {
  fill?: string,
  fontSize?: number,
  fontWeight?: string,
  textAnchor?: 'start' | 'middle' | 'end',
}

export class Context {
  rc: RC
  svg: SVGSVGElement
  links: SVGGElement
  dimensions: DOMRect

  constructor(svg: SVGSVGElement) {
    this.svg = svg
    this.svg.classList.add('circuit')
    this.rc = rough.svg(svg)
    this.dimensions = svg.getBoundingClientRect()

    const links = svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'g'))
    links.classList.add('circuit-links')
    this.links = links
  }

  createText(x: number, y: number, text: string, options: TextOptions = {}) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    element.setAttribute('x', String(x))
    element.setAttribute('y', String(y))
    element.setAttribute('fill', options.fill ?? '#ccc')
    element.setAttribute('font-size', `${options.fontSize ?? 16}px`)
    element.setAttribute('text-anchor', options.textAnchor ?? 'start')
    if (options.fontWeight)
      element.setAttribute('font-weight', options.fontWeight)
    element.textContent = text
    return element
  }
}

type CircuitEvents = {
  redraw: () => void,
}

export class Circuit {
  children: BaseElement<any>[]
  cache: Map<any, SVGElement>
  requests: Set<any>
  context: Context
  logic: logic.Circuit
  updateInterval: number
  redrawFrame: number
  grid: SVGGElement | null
  spaceGraph: astar.Graph | null
  options: {
    update: number,
    ticks: number,
    components: logic.Circuit['components'],
  }

  constructor(c: Context, options: Partial<Circuit['options']> = {}) {
    this.children = []
    this.context = c
    this.logic = new components.Circuit()
    this.updateInterval = 0
    this.redrawFrame = 0
    this.grid = null
    this.spaceGraph = null
    this.cache = new Map()
    this.requests = new Set()
    this.options = {
      update: 10,
      ticks: 5,
      components: logic,
      ...options,
    }
    this.options.components ??= logic
  }

  setup(fn: Function) {
    components = this.options.components
    logic.Circuit.set(this.logic)
    fn()
  }

  start() {
    this.stop()
    this.updateInterval = setInterval(() => {
      for (let i = 0; i < this.options.ticks; i++) {
        this.tick()
      }
    }, this.options.update) as unknown as number

    const redraw = () => {
      this.requests.forEach(this.drawElement)
      this.requests = new Set()
      requestAnimationFrame(redraw)
    }

    this.redrawFrame = requestAnimationFrame(redraw)
    this.draw()
  }

  stop() {
    clearInterval(this.updateInterval)
    cancelAnimationFrame(this.redrawFrame)
  }

  tick() {
    this.logic.links.forEach(link => {
      link.update(1)
    })
  }

  add<T extends BaseElement<any>>(e: T): T {
    this.children.push(e)
    // FIXME: clear resources
    e.on('redraw', this.scheduleElement.bind(null, e))
    e.children.forEach(c => this.add(c))
    this.spaceGraph = null
    return e
  }

  link(output: Output, input: Input, options: { find?: boolean } = {}) {
    return this.add(
      new Link(
        input,
        output,
        options.find ? this.findPath(output.position, input.position) : undefined
      )
    )
  }

  label(b: BaseElement, edge: EdgeName, text: string, options?: TextOptions) {
    const point = pointForEdge(b, edge)

    if (edge.includes('top'))
      point.y -= TEXT_HEIGHT
    if (edge.includes('bottom'))
      point.y += TEXT_HEIGHT + 10

    const textAnchor =
      edge.includes('left') ? 'end' :
      edge.includes('right') ? 'start' : 'middle'

    return this.add(new Label(point, text, { ...options, textAnchor }))
  }

  scheduleElement = (e: BaseElement<any>) => {
    this.requests.add(e)
  }

  drawElement = (e: BaseElement<any>) => {
    const oldChild = this.cache.get(e)
    const child = e.draw(this.context)
    if (child === null) {
      if (oldChild) {
        oldChild.remove()
      }
      return
    }
    const target = e instanceof Link ? this.context.links : this.context.svg
    if (oldChild) {
      target.replaceChild(child, oldChild)
    } else {
      target.appendChild(child)
    }
    this.cache.set(e, child)
  }

  draw = () => {
    this.drawGrid()
    this.children.forEach(this.drawElement)
  }

  drawGrid() {
    const { width, height } = this.context.dimensions

    this.grid?.remove()
    const g = this.grid = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.classList.add('circuit-grid')

    for (let x = 0; x < width; x += 10) {
      this.context.svg.append
      g.appendChild(this.context.rc.line(x, 0, x, height, { stroke: COLOR_GRID, roughness: 0 }))
    }

    for (let y = 0; y < height; y += 10) {
      this.context.svg.append
      g.appendChild(this.context.rc.line(0, y, width, y, { stroke: COLOR_GRID, roughness: 0 }))
    }

    this.context.svg.appendChild(g)
  }

  findPath(a: Point, b: Point) {
    const graph = this.getSpaceGraph()
    const result = astar.search(graph, a.scale(1 / GRID_SIZE), b.scale(1 / GRID_SIZE))

    if (result.length === 0) {
      return new Path([segment(a, b)])
    }

    const segments = [] as Segment[]
    const points = result.map(r => new Point(r).scale(GRID_SIZE)).concat(b)
    for (let i = 0; i < points.length - 1; i++) {
      const last = segments[segments.length - 1]
      const current = segment(points[i], points[i + 1])
      if (last && current.slope === last.slope) {
        segments[segments.length - 1] = segment(last.ps, current.pe)
      } else {
        segments.push(current)
      }
    }

    return new Path(segments)
  }

  getSpaceGraph(): astar.Graph {
    if (this.spaceGraph) {
      return this.spaceGraph
    }

    const width  = Math.ceil(this.context.dimensions.width  / GRID_SIZE)
    const height = Math.ceil(this.context.dimensions.height / GRID_SIZE)
    const size = width * height
    const spaceData = new Int8Array(size)
    spaceData.fill(1)

    const polygons = [] as Polygon[]

    const drawObstacle = (child: BaseElement<any>) => {
      const klass = child.constructor as typeof BaseElement
      const shape = child.shape
      if (klass.passThrough === PassThrough.NO) {
        const bounds = new Box(
          shape.xmin / GRID_SIZE,
          shape.ymin / GRID_SIZE,
          shape.xmax / GRID_SIZE,
          shape.ymax / GRID_SIZE,
        )
        polygons.push(new Polygon(bounds))

        for (let x = bounds.xmin; x < bounds.xmax; x++) {
          for (let y = bounds.ymin; y < bounds.ymax; y++) {
            const index = y * width + x
            spaceData[index] = -1

            if (Math.round(index) !== index) { throw new Error('Invalid dimensions') }
          }
        }
      }
      child.children.forEach(drawObstacle)
    }

    this.children.forEach(drawObstacle)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = y * width + x
        const w = spaceData[index]
        if (w === -1) {
          continue
        }
        const point = new Point(x, y)
        let closestDistance = Math.pow(2, 30)
        for (const polygon of polygons) {
          const distance = point2polygon(point, polygon)[0]
          closestDistance = Math.min(distance, closestDistance)
        }
        const maxDistance = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
        const weight = (maxDistance - closestDistance) / 10
        spaceData[index] = weight
      }
    }

    return (this.spaceGraph = new astar.Graph(spaceData, width, height))
  }
}

const EMPTY_BOX = new Box(0, 0, 0, 0)

type PlacementOptions = {
  x: number,
  y: number,
  orientation?: Orientation
}

abstract class BaseElement<T = {}> extends EventEmitter<CircuitEvents & T> {
  static passThrough = PassThrough.NO
  static shape = EMPTY_BOX

  seed = newSeed()
  shape = EMPTY_BOX
  children = EMPTY_ARRAY as BaseElement<any>[]
  abstract draw(_: Context): SVGElement | null
}

class Link extends BaseElement {
  static passThrough = PassThrough.YES

  input: Input
  output: Output
  logic: logic.Link
  path: Path

  constructor(
    input: Input,
    output: Output,
    path?: Path,
  ) {
    super()
    this.input = input
    this.output = output
    this.path = path ?? new Path([segment(output.position, input.position)])
    this.logic = new components.Link(output.logic, input.logic)
    this.logic.on('update', () => this.emit('redraw'))
    this.logic.length = this.path.length
  }

  draw(c: Context) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.classList.add('circuit-link')

    g.appendChild(c.rc.path(
      this.path.toSVG(),
      { stroke: COLOR_LINK_OFF, seed: this.seed }
    ))

    this.logic.streams.forEach(stream => {
      const subPath = this.path.slice(stream[0], stream[1])
      const d = subPath.toSVG()

      g.appendChild(c.rc.path(d, { stroke: COLOR_ON, seed: this.seed }))
    })

    return g
  }
}

class Input extends BaseElement {
  static passThrough = PassThrough.YES
  static shape = new Box(0, 0, 10, 10)

  position: Point
  solid = false
  size = DOT_SIZE
  logic: logic.Input

  constructor(p: PlacementOptions) {
    super()
    this.position = point(p).snapToGrid(GRID_SIZE)
    this.shape = place(Input, p)
    this.logic = new components.Input()
    this.logic.on('change', () => this.emit('redraw'))
  }

  get enabled() {
    return this.logic.enabled
  }

  set(enabled: boolean) {
    this.logic.set(enabled)
  }

  draw(c: Context) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    g.appendChild(c.rc.circle(this.position.x, this.position.y, this.size, {
      strokeWidth: 0,
      fill: this.enabled ? COLOR_ON : COLOR_OFF,
      fillStyle: 'solid',
      seed: this.seed,
    }))


    return g
  }
}

class Output extends BaseElement {
  static passThrough = PassThrough.YES
  static shape = new Box(0, 0, 10, 10)

  position: Point
  solid = false
  size = DOT_SIZE
  logic: logic.Output

  constructor(p: PlacementOptions) {
    super()
    this.position = point(p).snapToGrid(GRID_SIZE)
    this.shape = place(Input, p)
    this.logic = new components.Output()
    this.logic.on('change', () => this.emit('redraw'))
  }

  get enabled() {
    return this.logic.enabled
  }

  set(enabled: boolean) {
    this.logic.set(enabled)
  }

  draw(c: Context) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    g.appendChild(c.rc.circle(this.position.x, this.position.y, this.size, {
      strokeWidth: 0,
      fill: this.enabled ? COLOR_ON : COLOR_OFF,
      fillStyle: 'solid',
      seed: this.seed,
    }))

    return g
  }
}

export class Junction extends BaseElement {
  position: Point
  input: Input
  outputA: Output
  outputB: Output
  logic: logic.Junction

  constructor(p: PlacementOptions) {
    super()
    this.position = point(p).snapToGrid(GRID_SIZE)
    this.input = new Input(this.position)
    this.outputA = new Output(this.position)
    this.outputB = new Output(this.position)
    this.logic = new components.Junction(
      this.input.logic,
      this.outputA.logic,
      this.outputB.logic,
    )
    this.children = [] // Don't draw the children
  }

  draw(_c: Context) {
    return null
  }
}

export class Label extends BaseElement {
  static passThrough = PassThrough.YES

  position: Point
  text: string
  options: TextOptions

  constructor(p: PlacementOptions, text: string, options: Label['options'] = {}) {
    super()
    this.position = point(p)
    this.text = text
    this.options = options
  }

  draw(c: Context) {
    return c.createText(this.position.x, this.position.y, this.text, this.options)
  }
}


export class Battery extends BaseElement {
  static shape = new Box(0, 0, 4 * GRID_SIZE, 4 * GRID_SIZE)

  shape: Box
  size = 4 * GRID_SIZE
  options: { canToggle?: boolean, label?: string }
  output: Output

  constructor(
    p: PlacementOptions,
    options: Battery['options'] = {}
  ) {
    super()
    this.shape = place(Battery, p)
    this.output = new Output(pointForEdge(this, 'top'))
    this.children = [this.output]
    rotate(this, p)
    this.options = {
      canToggle: true,
      ...options,
    }
    if (!this.options.canToggle)
      this.output.set(true)
  }

  toggle = (ev: Event) => {
    ev.preventDefault()
    this.output.set(!this.output.enabled)
    this.emit('redraw')
  }

  draw(c: Context) {
    const { shape, size } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    if (this.options.canToggle) {
      g.setAttribute('style', 'cursor: pointer')
      g.addEventListener('mousedown', this.toggle)
      g.addEventListener('touchstart', this.toggle)
    }

    const color = this.output.enabled ? COLOR_ON : COLOR_OFF

    const e = c.rc.rectangle(
      shape.xmin,
      shape.ymin,
      size,
      size,
      { stroke: color, fill: 'rgba(0, 0, 0, 0.001)', fillStyle: 'solid', seed: this.seed }
    )
    g.appendChild(e)

    g.appendChild(
      c.createText(
        shape.xmin + size / 2,
        shape.ymin + size / 2 + TEXT_HEIGHT / 4,
        this.options.label ?
          this.options.label :
        !this.options.canToggle ?
          'Power' :
        this.output.enabled ?
          'ON' : 'OFF',
        { textAnchor: 'middle', fill: color }
      )
    )

    return g
  }
}

export class Ground extends BaseElement {
  static shape = new Box(0, 0, 4 * GRID_SIZE, 4 * GRID_SIZE)

  shape: Box
  input: Input

  constructor(p: PlacementOptions) {
    super()
    this.shape = place(Ground, p)
    this.input = new Input(pointForEdge(this, 'left'))
    if (this.input.logic instanceof electric.Input) {
      this.input.logic.sink(true)
    }
    this.children = [this.input]
    rotate(this, p)
  }

  draw(c: Context) {
    const { shape } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    const e = g.appendChild(c.rc.rectangle(
      shape.xmin,
      shape.ymin,
      shape.width,
      shape.height,
      { stroke: COLOR_OFF, fill: 'rgba(0, 0, 0, 0.001)', fillStyle: 'solid', seed: this.seed }
    ))
    g.appendChild(e)
    g.appendChild(
      c.createText(
        shape.center.x,
        shape.center.y + TEXT_HEIGHT / 4,
        'GND',
        { textAnchor: 'middle', fill: COLOR_OFF }
      )
    )

    return g
  }
}

export class BigTransistor extends BaseElement {
  static shape = new Box(0, 0, 6 * GRID_SIZE, 6 * GRID_SIZE)

  shape: Box
  seed = newSeed()

  input: Input
  output: Output
  control: Input
  logic: {
    input: logic.Input
    output: logic.Output
    control: logic.Input
  }

  constructor(p: PlacementOptions) {
    super()
    this.shape = place(BigTransistor, p)

    this.input = new Input(pointForEdge(this, 'left'))
    this.output = new Output(pointForEdge(this, 'right'))
    this.control = new Input(pointForEdge(this, 'bottom'))

    this.logic = new components.Transistor(
      this.input.logic,
      this.output.logic,
      this.control.logic,
    )

    this.children = [this.input, this.control, this.output]
    rotate(this, p)
  }

  draw(c: Context) {
    const { shape } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    g.appendChild(c.rc.rectangle(
      shape.xmin,
      shape.ymin,
      shape.width,
      shape.height,
      { stroke: COLOR_EDGE, fill: COLOR_EDGE, seed: this.seed }
    ))

    return g
  }
}

export class Light extends BaseElement {
  static shape = new Box(0, 0, 4 * GRID_SIZE, 4 * GRID_SIZE)

  shape: Box
  input: Input

  constructor(p: PlacementOptions) {
    super()
    this.shape = place(Light, p)
    this.input = new Input(pointForEdge(this, 'bottom'))
    this.input.on('redraw', () => this.emit('redraw'))
    this.children = [this.input]
    rotate(this, p)
  }

  draw(c: Context) {
    const { shape } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    g.appendChild(c.rc.rectangle(
      shape.xmin,
      shape.ymin,
      shape.width,
      shape.height,
      { stroke: '#aaa', fill: 'rgba(0, 0, 0, 0.001)', fillStyle: 'solid', seed: this.seed }
    ))

    const fill = this.input.enabled ? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.1)'
    g.appendChild(c.rc.circle(
      shape.xmin + shape.width / 2,
      shape.ymin + shape.width / 2,
      shape.width - 15,
      { stroke: '#aaa', fill, fillStyle: 'solid', seed: this.seed }
    ))

    return g
  }
}

export class Not extends BaseElement {
  static shape = new Box(0, 0, 2 * GRID_SIZE, 4 * GRID_SIZE)
  static size = 4 * GRID_SIZE

  shape: Box
  seed = newSeed()

  input: Input
  output: Output
  logic: {
    input: logic.Input
    output: logic.Output
  }

  constructor(p: PlacementOptions) {
    super()
    this.shape = place(Not, p)

    this.input = new Input(pointForEdge(this, 'bottom'))
    this.output = new Output(pointForEdge(this, 'top'))

    this.logic = new logic.Not(
      this.input.logic,
      this.output.logic,
    )

    this.children = [this.input, this.output]
    rotate(this, p)
  }

  draw(c: Context) {
    const { shape } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    g.appendChild(c.rc.rectangle(
      shape.xmin,
      shape.ymin,
      shape.width,
      shape.height,
      { stroke: COLOR_EDGE, fill: COLOR_EDGE, seed: this.seed }
    ))

    return g
  }

}





function newSeed() {
  return Math.round(Math.random() * 100_000)
}

export function pointForBoxEdge(b: Box, edge: EdgeName) {
  const c = b.center
  switch (edge) {
    case 'top':    return intersectSegment2Box(segment(c, c.translate(0, -1000)), b)[0]
    case 'bottom': return intersectSegment2Box(segment(c, c.translate(0, +1000)), b)[0]
    case 'left':   return intersectSegment2Box(segment(c, c.translate(-1000, 0)), b)[0]
    case 'right':  return intersectSegment2Box(segment(c, c.translate(+1000, 0)), b)[0]

    case 'bottom-left':  return b.toPoints()[0]
    case 'bottom-right': return b.toPoints()[1]

    case 'top-right': return b.toPoints()[2]
    case 'top-left':  return b.toPoints()[3]
  }
}

export function pointForEdge(b: BaseElement, edge: EdgeName) {
  return pointForBoxEdge(b.shape, edge)
}

export function vectorForEdge(b: BaseElement, edge: EdgeName) {
  return vector(b.shape.center, pointForBoxEdge(b.shape, edge)).normalize()
}

function boxAround(p: Point, size: number) {
  return box(
    p.x - size / 2,
    p.y - size / 2,
    p.x + size / 2,
    p.y + size / 2,
  )
}

export function snapToGrid(value: number) {
  return Math.round(value / GRID_SIZE) * GRID_SIZE
}

function place(klass: { shape: Box }, p: PlacementOptions) {
  return klass.shape.translate(
    p.x - klass.shape.width  / 2,
    p.y - klass.shape.height / 2,
  )
}

function rotate(self: BaseElement, p: PlacementOptions, inputCenter?: Point) {
  if (p.orientation !== undefined) {
    const center = inputCenter ?? self.shape.center

    if (self.shape instanceof Box) {
      self.shape = new Polygon(self.shape).rotate(p.orientation, center).box.snapToGrid(GRID_SIZE)
    } else {
      throw new Error('unreachable')
    }

    const maybeP = self as any
    if (maybeP.position) {
      maybeP.position = (maybeP.position as Point).rotate(p.orientation, center)
    }

    for (const child of self.children) {
      rotate(child, p, center)
    }
  }
}


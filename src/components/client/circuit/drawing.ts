import rough from 'roughjs'
import EventEmitter from 'eventemitter3'
import {
  box,
  point,
  segment,
  vector,
  Point,
  Segment,
  Box,
  Polygon,
  point2polygon,
  intersectSegment2Box,
} from 'romgrk-2d-geometry'
import { EMPTY_ARRAY } from './prelude'
import * as logic from './logic'
import * as astar from './astar'
import * as svgPath from './svgPath'
import './circuit.css'

let components = logic.getDefaultComponents()

type RC = ReturnType<typeof rough.svg>
type Options = Parameters<RC['line']>[4]
type EdgeName =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'

const tau = Math.PI * 2

const TEXT_HEIGHT = 18

const COLOR_ON  = 'yellow'
const COLOR_OFF = '#aaa'
const COLOR_LINK_OFF = '#555'
const COLOR_EDGE = '#aaa'

type TextOptions = {
  fill?: string,
  fontSize?: number,
  fontWeight?: string,
  textAnchor?: 'start' | 'middle' | 'end',
}

export class Context {
  rc: RC
  svg: SVGSVGElement
  dimensions: DOMRect

  constructor(svg: SVGSVGElement) {
    this.svg = svg
    this.svg.classList.add('circuit')
    this.rc = rough.svg(svg)
    this.dimensions = svg.getBoundingClientRect()
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

  createArrow(vectors: Segment[], options?: Options) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    vectors.forEach(v => {
      g.appendChild(this.rc.line(v.start.x, v.start.y, v.end.x, v.end.y, options))
    })

    const last = vectors[vectors.length - 1]
    const dx = last.end.x - last.start.x
    const dy = last.end.y - last.start.y
    const angle = Math.atan2(dy, dx)

    const size = 12
    const angleExpanse = tau / 10

    const angle1 = angle - tau / 2 - angleExpanse
    const angle2 = angle - tau / 2 + angleExpanse

    g.appendChild(this.rc.line(
      last.end.x,
      last.end.y,
      last.end.x + Math.cos(angle1) * size,
      last.end.y + Math.sin(angle1) * size,
      options
    ))
    g.appendChild(this.rc.line(
      last.end.x,
      last.end.y,
      last.end.x + Math.cos(angle2) * size,
      last.end.y + Math.sin(angle2) * size,
      options
    ))

    return g
  }
}

type CircuitEvents = {
  redraw: () => void,
}

interface Bounded {
  shape: Box
  solid: boolean
}

export class Circuit {
  children: BaseElement<any>[]
  cache: Map<any, SVGElement>
  requests: Set<any>
  context: Context
  logic: logic.Circuit
  updateInterval: number
  redrawFrame: number
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

  label(b: Bounded, edge: EdgeName, text: string, options?: TextOptions) {
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
    this.cache.get(e)?.remove()
    const child = e.draw(this.context)
    this.context.svg.appendChild(child)
    this.cache.set(e, child)
  }

  draw = () => {
    this.children.forEach(this.drawElement)
  }

  findPath(a: Point, b: Point) {

    const graph = this.getSpaceGraph()

    const start = Date.now()
    const result = astar.search(graph, a, b)

    if (result.length === 0) {
      return svgPath.getLine(a, b)
    }

    const [first, ...rest] = result

    let path = `M${first.x},${first.y} `
    let previous = first
    let horizontal = 0
    let vertical = 0
    for (let node of rest) {
      const dx = node.x - previous.x
      const dy = node.y - previous.y
      if (dx !== 0) {
        if (vertical !== 0) {
          path += `v${vertical} `
          vertical = 0
        }
        horizontal += dx
      }
      if (dy !== 0) {
        if (horizontal !== 0) {
          path += `h${horizontal} `
          horizontal = 0
        }
        vertical += dy
      }
      previous = node
    }

    if (vertical !== 0) {
      path += `v${vertical} `
    }
    if (horizontal !== 0) {
      path += `h${horizontal} `
    }

    const end = Date.now()
    console.log('PATH', end - start)
    return path
  }

  getSpaceGraph(): astar.Graph {
    if (this.spaceGraph) {
      return this.spaceGraph
    }

    const { width, height } = this.context.dimensions
    const size = width * height
    const spaceData = new Int8Array(size)
    spaceData.fill(1)

    const polygons = [] as Polygon[]

    const drawObstacle = (child: BaseElement<any>) => {
      const solid = (child as any).solid as boolean | undefined
      const shape = (child as any).shape as Box | undefined
      if (solid && shape) {
        polygons.push(new Polygon(shape))

        for (let x = Math.floor(shape.xmin); x < shape.xmax; x++) {
          for (let y = Math.floor(shape.ymin); y < shape.ymax; y++) {
            spaceData[y * width + x] = -1
          }
        }
      }
      child.children.forEach(drawObstacle)
    }

    this.children.forEach(drawObstacle)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const w = spaceData[y * width + x]
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
        spaceData[y * width + x] = weight
      }
    }

    return (this.spaceGraph = new astar.Graph(spaceData, width, height))
  }
}

abstract class BaseElement<T = {}> extends EventEmitter<CircuitEvents & T> {
  seed = newSeed()
  children = EMPTY_ARRAY as BaseElement<any>[]
  abstract draw(_: Context): SVGElement
}

class Link extends BaseElement {
  size: number = -1
  input: Input
  output: Output
  logic: logic.Link
  path: string

  constructor(
    input: Input,
    output: Output,
    path?: string,
  ) {
    super()
    this.input = input
    this.output = output
    this.path = path ?? svgPath.getLine(output.position, input.position)
    this.logic = new components.Link(output.logic, input.logic)
    this.logic.on('update', () => this.emit('redraw'))
    this.logic.length = svgPath.getLength(this.path)
  }

  draw(c: Context) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.classList.add('circuit-link')

    const start = this.output.position
    const end = this.input.position

    const v = vector(start, end)

    g.appendChild(c.rc.path(
      this.path,
      { stroke: COLOR_LINK_OFF, seed: this.seed }
    ))

    this.logic.streams.forEach(stream => {
      const fStart = stream[0] / this.logic.length
      const fEnd   = stream[1] / this.logic.length

      const vStart = v.multiply(fStart)
      const vEnd = v.multiply(fEnd)

      const pStart = start.translate(vStart)
      const pEnd = start.translate(vEnd)

      g.appendChild(c.rc.line(
        pStart.x,
        pStart.y,
        pEnd.x,
        pEnd.y,
        { stroke: COLOR_ON, seed: this.seed },
      ))
    })

    return g
  }
}

class Input extends BaseElement implements Bounded {
  position: Point
  shape: Box
  solid = false
  size = 10
  logic: logic.Input

  constructor(p: Point) {
    super()
    this.position = p
    this.shape = box(
      p.x - this.size / 2,
      p.y - this.size / 2,
      p.x + this.size / 2,
      p.y + this.size / 2,
    )
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

class Output extends BaseElement implements Bounded {
  position: Point
  shape: Box
  solid = false
  size = 10
  logic: logic.Output

  constructor(p: Point) {
    super()
    this.position = p
    this.shape = box(
      p.x - this.size / 2,
      p.y - this.size / 2,
      p.x + this.size / 2,
      p.y + this.size / 2,
    )
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
  size = 10
  input: Input
  outputA: Output
  outputB: Output
  logic: logic.Junction

  constructor(x: number, y: number) {
    super()
    this.position = point(x, y)
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
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    return g
  }
}

export class Battery extends BaseElement implements Bounded {
  position: Point
  shape: Box
  solid = true
  size = 55
  options: { canToggle?: boolean, label?: string, edge?: EdgeName }
  output: Output

  constructor(
    x: number,
    y: number,
    options: Battery['options'] = {}
  ) {
    super()
    this.position = point(x, y)
    this.shape = box(
      x - this.size / 2,
      y - this.size / 2,
      x + this.size / 2,
      y + this.size / 2,
    )
    this.output = new Output(pointForEdge(this, options.edge ?? 'right'))
    this.children = [this.output]
    this.options = {
      canToggle: true,
      ...options,
    }
    if (!this.options.canToggle)
      this.output.set(true)
  }

  toggle = () => {
    this.output.set(!this.output.enabled)
    this.emit('redraw')
  }

  draw(c: Context) {
    const { position, size } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${position.x - size / 2}, ${position.y - size / 2})`)

    if (this.options.canToggle) {
      g.setAttribute('style', 'cursor: pointer')
      g.addEventListener('mousedown', this.toggle)
      g.addEventListener('touchstart', this.toggle)
    }

    const color = this.output.enabled ? COLOR_ON : COLOR_OFF

    const e = c.rc.rectangle(
      0,
      0,
      size,
      size,
      { stroke: color, fill: 'rgba(0, 0, 0, 0.001)', fillStyle: 'solid', seed: this.seed }
    )
    g.appendChild(e)

    g.appendChild(
      c.createText(
        size / 2,
        size / 2 + TEXT_HEIGHT / 4,
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

export class Ground extends BaseElement implements Bounded {
  position: Point
  shape: Box
  solid = true
  size = 55
  input: Input

  constructor(
    x: number,
    y: number,
    edge?: EdgeName
  ) {
    super()
    this.position = point(x, y)
    this.shape = box(
      x - this.size / 2,
      y - this.size / 2,
      x + this.size / 2,
      y + this.size / 2,
    )
    this.input = new Input(pointForEdge(this, edge ?? 'left'))
    this.input.logic.sink(true)
    this.children = [this.input]
  }

  draw(c: Context) {
    const { shape, size } = this

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

export class BigTransistor extends BaseElement implements Bounded {
  static size = 60

  position: Point
  shape: Box
  solid = true
  size: number = BigTransistor.size
  seed = newSeed()

  input: Input
  output: Output
  control: Input
  logic: {
    input: logic.Input
    output: logic.Output
    control: logic.Input
  }

  constructor(
    x: number,
    y: number,
  ) {
    super()
    this.position = point(x, y)
    this.shape = box(
      x - this.size / 2,
      y - this.size / 2,
      x + this.size / 2,
      y + this.size / 2,
    )

    this.input = new Input(pointForEdge(this, 'left'))
    this.output = new Output(pointForEdge(this, 'right'))
    this.control = new Input(pointForEdge(this, 'bottom'))

    this.logic = new components.Transistor(
      this.input.logic,
      this.output.logic,
      this.control.logic,
    )

    this.children = [this.input, this.control, this.output]
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

export class Light extends BaseElement implements Bounded {
  position: Point
  shape: Box
  solid = true
  size: number = 60

  input: Input

  constructor(
    x: number,
    y: number,
  ) {
    super()
    this.position = point(x, y)
    this.shape = box(
      x - this.size / 2,
      y - this.size / 2,
      x + this.size / 2,
      y + this.size / 2,
    )
    this.input = new Input(pointForEdge(this, 'left'))
    this.input.on('redraw', () => this.emit('redraw'))
    this.children = [this.input]
  }

  draw(c: Context) {
    const { position, size } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${position.x - size / 2}, ${position.y - size / 2})`)

    g.appendChild(c.rc.rectangle(
      0,
      0,
      size,
      size,
      { stroke: '#aaa', fill: 'rgba(0, 0, 0, 0.001)', fillStyle: 'solid', seed: this.seed }
    ))

    const fill = this.input.enabled ? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.1)'
    g.appendChild(c.rc.circle(
      0 + size / 2,
      0 + size / 2,
      size - 15,
      { stroke: '#aaa', fill, fillStyle: 'solid', seed: this.seed }
    ))

    return g
  }
}

export class Label extends BaseElement {
  position: Point
  text: string
  options: TextOptions

  constructor(position: Point, text: string, options: Label['options'] = {}) {
    super()
    this.position = position
    this.text = text
    this.options = options
  }

  draw(c: Context) {
    return c.createText(this.position.x, this.position.y, this.text, this.options)
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

export function pointForEdge(b: Bounded, edge: EdgeName) {
  return pointForBoxEdge(b.shape, edge)
}

export function vectorForEdge(b: Bounded, edge: EdgeName) {
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

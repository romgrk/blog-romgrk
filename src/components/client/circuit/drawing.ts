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
  Shape,
  intersectSegment2Box,
} from 'romgrk-2d-geometry'
import { EMPTY_ARRAY } from './prelude'
import * as logic from './logic'
import './circuit.css'

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

const textHeight = 18

const COLOR_ON  = 'yellow'
const COLOR_OFF = '#aaa'
const COLOR_LINK_OFF = '#555'

export class Context {
  rc: RC
  svg: SVGSVGElement

  constructor(svg: SVGSVGElement) {
    this.svg = svg
    this.rc = rough.svg(svg)
  }

  createText(x: number, y: number, text: string, options: any = {}) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    element.setAttribute('style', 'font-size: 16px')
    element.setAttribute('x', String(x))
    element.setAttribute('y', String(y))
    element.setAttribute('fill', options.fill ?? '#ccc')
    element.setAttribute('text-anchor', options.textAnchor ?? 'start')
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
  shape: Shape<Box>
  // x: number
  // y: number
  // size: number
}

export class Circuit {
  elements: BaseElement<any>[]
  cache: Map<any, SVGElement>
  requests: Set<any>
  context: Context
  links: logic.Link[]
  updateInterval: number
  redrawFrame: number

  constructor(c: Context) {
    this.elements = []
    this.context = c
    this.links = []
    this.updateInterval = 0
    this.redrawFrame = 0
    this.cache = new Map()
    this.requests = new Set()
  }

  setup(fn: Function) {
    logic.setLinks(this.links)
    fn()
  }

  start() {
    this.stop()
    this.updateInterval = setInterval(() => {
      this.links.forEach(link => {
        link.update(1)
      })
    }, 30) as unknown as number

    const redraw = () => {
      this.requests.forEach(this.drawElement)
      this.requests = new Set()
      requestAnimationFrame(redraw)
    }

    this.redrawFrame = requestAnimationFrame(redraw)
  }

  stop() {
    clearInterval(this.updateInterval)
    cancelAnimationFrame(this.redrawFrame)
  }

  add(e: BaseElement<any>) {
    this.elements.push(e)
    // FIXME: clear resources
    e.on('redraw', this.scheduleElement.bind(null, e))
    e.children.forEach(c => this.add(c))
    return e
  }

  link(output: Output, input: Input) {
    return this.add(new Link(input, output))
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
    this.elements.forEach(this.drawElement)
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

  constructor(
    input: Input,
    output: Output,
  ) {
    super()
    this.input = input
    this.output = output
    this.logic = new logic.Link(output.logic, input.logic)
    this.logic.on('update', () => this.emit('redraw'))
    this.logic.length = vector(this.output.position, this.input.position).length
  }

  draw(c: Context) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    const start = this.output.position
    const end = this.input.position

    const line = segment(start, end)
    const v = vector(start, end)

    g.appendChild(c.createArrow([line], { stroke: COLOR_LINK_OFF, seed: this.seed }))

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

class Input extends BaseElement<{ change: (value: boolean) => void }> {
  position: Point
  logic: logic.Input

  constructor(p: Point) {
    super()
    this.position = p
    this.logic = new logic.Input()
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

    g.appendChild(c.rc.circle(this.position.x, this.position.y, 10, {
      strokeWidth: 0,
      fill: this.enabled ? COLOR_ON : COLOR_OFF,
      fillStyle: 'solid',
      seed: this.seed,
    }))


    return g
  }
}

class Output extends BaseElement<{ change: (value: boolean) => void }> {
  position: Point
  logic: logic.Output

  constructor(p: Point) {
    super()
    this.position = p
    this.logic = new logic.Output()
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

    g.appendChild(c.rc.circle(this.position.x, this.position.y, 10, {
      strokeWidth: 0,
      fill: this.enabled ? COLOR_ON : COLOR_OFF,
      fillStyle: 'solid',
      seed: this.seed,
    }))

    return g
  }
}

export class Battery extends BaseElement implements Bounded {
  position: Point
  shape: Box
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
    this.output = new Output(pointAtEdgeOf(this.shape, options.edge ?? 'right'))
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
      g.addEventListener('click', this.toggle)
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
        size / 2 + textHeight / 4,
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

export class Transistor extends BaseElement implements Bounded {
  position: Point
  shape: Box
  size: number = 60
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

    this.input = new Input(pointAtEdgeOf(this.shape, 'left'))
    this.output = new Output(pointAtEdgeOf(this.shape, 'right'))
    this.control = new Input(pointAtEdgeOf(this.shape, 'bottom'))

    this.logic = new logic.Transistor(
      this.input.logic,
      this.output.logic,
      this.control.logic,
    )

    this.children = [this.input, this.control, this.output]
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
      { stroke: '#aaa', fill: 'rgba(255, 0, 0, 0.3)', fillStyle: 'solid', seed: this.seed }
    ))
    g.appendChild(c.createText(size / 2 + 10, size + textHeight, 'Gate'))

    g.appendChild(c.createText(0 - 10, size / 2 - textHeight, 'Input', { textAnchor: 'end' }))

    g.appendChild(c.createText(size + 10, size / 2 - textHeight, 'Output'))

    return g
  }
}

export class Light extends BaseElement implements Bounded {
  position: Point
  shape: Box
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
    this.input = new Input(pointAtEdgeOf(this.shape, 'left'))
    this.input.on('change', () => this.emit('redraw'))
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

function newSeed() {
  return Math.round(Math.random() * 100_000)
}

function pointAtEdgeOf(b: Box, edge: EdgeName) {
  const c = b.center
  switch (edge) {
    case 'top':    return intersectSegment2Box(segment(c, c.translate(0, -1000)), b)[0]
    case 'bottom': return intersectSegment2Box(segment(c, c.translate(0, +1000)), b)[0]
    case 'left':   return intersectSegment2Box(segment(c, c.translate(-1000, 0)), b)[0]
    case 'right':  return intersectSegment2Box(segment(c, c.translate(+1000, 0)), b)[0]

    case 'bottom-left':  return b.toPoints()[0]
    case 'bottom-right': return b.toPoints()[1]

    case 'top-left':  return b.toPoints()[2]
    case 'top-right': return b.toPoints()[3]
  }
}
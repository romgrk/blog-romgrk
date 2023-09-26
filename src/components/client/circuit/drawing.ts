import rough from 'roughjs'
import EventEmitter from 'eventemitter3'
import './circuit.css'

type RC = ReturnType<typeof rough.svg>
type Options = Parameters<RC['line']>[4]

const tau = Math.PI * 2

const padding = 40
const textHeight = 18

const COLOR_ON  = 'yellow'
const COLOR_OFF = '#aaa'

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

  createArrow(vectors: Vector[], options?: Options) {
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

interface Shape {
  x: number
  y: number
  size: number
}

interface CircuitComponent {
  size: number
  seed: number
  draw(c: Context): SVGElement
  on(e: 'redraw', f: Function): void
}

export class Circuit {
  elements: CircuitComponent[]
  cache: SVGElement[]
  context: Context

  constructor(c: Context) {
    this.elements = []
    this.cache = []
    this.context = c
  }

  add(d: CircuitComponent) {
    this.elements.push(d)
    d.on('redraw', this.redraw)
  }

  link(output: Output, input: Input) {
    this.add(new Link(input, output))
  }

  redraw = () => {
    this.draw()
  }

  draw() {
    this.cache.forEach(e => {
      e.remove()
    })
    this.cache = []
    this.elements.forEach(e => {
      const child = e.draw(this.context)
      this.context.svg.appendChild(child)
      this.cache.push(child)
    })
  }
}

class Link extends EventEmitter<CircuitEvents> implements CircuitComponent {
  size: number = -1
  input: Input
  output: Output
  seed = newSeed()

  constructor(
    input: Input,
    output: Output,
  ) {
    super()
    this.input = input
    this.output = output

    output.on('change', value => {
      input.set(value)
      this.emit('redraw')
    })
    input.set(output.enabled)
  }

  draw(c: Context) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

    const start = pointAtEdge(this.output.s, this.input.s)
    const end = pointAtEdge(this.input.s, this.output.s)

    const vectors = toLinearVectors(start, end)
    const color = this.output.enabled ? COLOR_ON : COLOR_OFF

    g.appendChild(c.createArrow(vectors, { stroke: color, seed: this.seed }))

    return g
  }
}

function pointAtEdge(a: Shape, b: Shape) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const angle = (Math.atan2(dy, dx) + tau) % tau
  if (angle > tau * 1 / 8 && angle <= tau * 3 / 8)
    return { x: a.x, y: a.y + a.size / 2 }
  if (angle > tau * 3 / 8 && angle <= tau * 5 / 8)
    return { x: a.x - a.size / 2, y: a.y }
  if (angle > tau * 5 / 8 && angle <= tau * 7 / 8)
    return { x: a.x, y: a.y - a.size / 2 }
  return { x: a.x + a.size / 2, y: a.y }
}

type Point = { x: number, y: number }
type Vector = { start: Point, end: Point }

function vector(x1: number, y1: number, x2: number, y2: number) {
  return {
    start: { x: x1, y: y1 },
    end:   { x: x2, y: y2 },
  }
}

function toLinearVectors(start: Point, end: Point): Vector[] {
  const dx = end.x - start.x
  const dy = end.y - start.y

  if (dx === 0 || dy === 0)
    return [{ start, end }]

  if (Math.abs(dx) > Math.abs(dy)) {
    const a = start
    const b = { x: start.x + dx / 2, y: start.y }
    const c = { x: start.x + dx / 2, y: end.y }
    const d = end
    return [
      { start: a, end: b },
      { start: b, end: c },
      { start: c, end: d },
    ]
  } else {
    const a = start
    const b = { x: start.x, y: start.y + dy / 2 }
    const c = { x: end.x, y: start.y + dy / 2 }
    const d = end
    return [
      { start: a, end: b },
      { start: b, end: c },
      { start: c, end: d },
    ]
  }
}

class Input extends EventEmitter<{
  change: (value: boolean) => void,
}> {
  s: Shape
  enabled: boolean

  constructor(s: Shape) {
    super()
    this.s = s
    this.enabled = false
  }

  set(enabled: boolean) {
    this.enabled = enabled
    this.emit('change', this.enabled)
  }
}

class Output extends EventEmitter<{
  change: (value: boolean) => void,
}> {
  s: Shape
  enabled: boolean

  constructor(s: Shape) {
    super()
    this.s = s
    this.enabled = false
  }

  set(enabled: boolean) {
    this.enabled = enabled
    this.emit('change', this.enabled)
  }
}

export class Battery extends EventEmitter<CircuitEvents>
    implements CircuitComponent, Shape {
  x: number
  y: number
  size: number = 55
  seed = newSeed()
  output: Output
  options: { canToggle?: boolean, label?: string }

  constructor(
    x: number,
    y: number,
    options: Battery['options'] = {}
  ) {
    super()
    this.x = x
    this.y = y
    this.output = new Output(this)
    this.options = {
      canToggle: true,
      ...options,
    }
    if (!this.options.canToggle)
      this.output.set(true)
  }

  toggle = () => {
    this.output.set(!this.output.enabled)
  }

  draw(c: Context) {
    const { x, y, size } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${x - size / 2}, ${y - size / 2})`)

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
        !this.options.canToggle ?
          'Power' :
        this.options.label ?
          this.options.label :
        this.output.enabled ?
          'ON' : 'OFF',
        { textAnchor: 'middle', fill: color }
      )
    )

    return g
  }
}

export class Transistor extends EventEmitter<CircuitEvents>
    implements CircuitComponent, Shape {
  x: number
  y: number
  size: number = 60
  seed = newSeed()

  input: Input
  output: Output
  control: Input

  constructor(
    x: number,
    y: number,
  ) {
    super()
    this.x = x
    this.y = y
    this.input = new Input(this)
    this.output = new Output(this)
    this.control = new Input(this)

    const update = () => {
      this.output.set(this.input.enabled && this.control.enabled)
    }

    this.input.on('change', update)
    this.control.on('change', update)
  }

  draw(c: Context) {
    const { x, y, size } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${x - size / 2}, ${y - size / 2})`)

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

export class Light extends EventEmitter<CircuitEvents>
    implements CircuitComponent, Shape {
  x: number
  y: number
  size: number = 60
  seed = newSeed()

  input: Input

  constructor(
    x: number,
    y: number,
  ) {
    super()
    this.x = x
    this.y = y
    this.input = new Input(this)
  }

  draw(c: Context) {
    const { x, y, size } = this

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${x - size / 2}, ${y - size / 2})`)

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

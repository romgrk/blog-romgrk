import EventEmitter from 'eventemitter3'
import { clamp } from 'rambda'

const RESISTANCE_MAX = Math.pow(2, 31) - 1

let links = [] as Link[]

export function getLinks() {
  return links
}

export function setLinks(l: Link[]) {
  links = l
}

type ChangeEvent = {
  change: (value: boolean) => void,
}

type UpdateEvent = {
  update: () => void,
}

type SinkEvent = {
  sink: () => void,
}

export class Input extends EventEmitter<ChangeEvent & SinkEvent> {
  enabled: boolean
  grounded: boolean
  links: Link[]

  constructor() {
    super()
    this.enabled = false
    this.grounded = false
    this.links = []
  }

  set(enabled: boolean) {
    if (enabled === this.enabled) return
    this.enabled = enabled
    this.emit('change', this.enabled)
  }

  sink(grounded: boolean) {
    if (grounded === this.grounded) return
    this.grounded = grounded
    this.updateResistance()
    this.emit('sink')
  }

  link(l: Link) {
    this.links.push(l)
    if (this.grounded) {
      l.resist(0)
    } else {
      l.resist(RESISTANCE_MAX)
    }
  }

  updateResistance() {
    this.links.forEach(link => {
      if (this.grounded) {
        link.resist(0)
      } else {
        link.resist(RESISTANCE_MAX)
      }
    })
  }
}

export class Output extends EventEmitter<ChangeEvent & SinkEvent> {
  enabled: boolean
  links: Link[]

  constructor() {
    super()
    this.enabled = false
    this.links = []
  }

  set(enabled: boolean) {
    if (enabled === this.enabled) return
    this.enabled = enabled
    this.emit('change', this.enabled)
  }

  link(l: Link) {
    this.links.push(l)
  }
}

export class Junction extends EventEmitter<UpdateEvent> {
  input: Input
  outputA: Output
  outputB: Output

  constructor(input?: Input, outputA?: Output, outputB?: Output) {
    super()
    this.input = input ?? new Input()
    this.input.on('change', this.update)

    this.outputA = outputA ?? new Output()
    this.outputA.on('sink', this.update)

    this.outputB = outputB ?? new Output()
    this.outputB.on('sink', this.update)

    this.update()
  }

  update = () => {
    if (this.input.enabled === false) {
      this.outputA.set(false)
      this.outputB.set(false)
    } else {
      const resistanceA = this.outputA.links.reduce((t, l) => t + l.resistance, 0)
      const resistanceB = this.outputB.links.reduce((t, l) => t + l.resistance, 0)

      if (resistanceA > resistanceB) {
        this.outputA.set(false)
        this.outputB.set(true)
      } else if (resistanceA < resistanceB) {
        this.outputA.set(true)
        this.outputB.set(false)
      } else {
        this.outputA.set(true)
        this.outputB.set(true)
      }
    }
  }
}

export class Link extends EventEmitter<UpdateEvent> {
  output: Output
  input: Input
  length: number
  resistance: number
  streams: [number, number][]

  constructor(
    output: Output,
    input: Input,
  ) {
    super()
    this.length = 100
    this.resistance = 0
    this.streams = []
    this.output = output
    this.output.link(this)
    this.input = input
    this.input.link(this)

    links.push(this)
  }

  resist(resistance: number) {
    this.resistance = resistance
    this.emit('update')
    this.output.emit('sink')
  }

  update(dt: number) {
    const isBeforeEmpty = this.streams.length === 0
    const isBeforeFull  = this.streams.length === 1 && this.streams[0][0] === 0 && this.streams[0][1] === this.length

    this.streams.forEach((stream, i) => {
      stream[0] = clamp(0, this.length, stream[0] + dt)
      stream[1] = clamp(0, this.length, stream[1] + dt)
    })

    if (this.output.enabled) {
      if (this.streams.length > 0 && this.streams[0][0] <= dt) {
        this.streams[0][0] = 0
      } else {
        this.streams.unshift([0, dt])
      }
    }

    this.streams = this.streams.filter(s => s[1] - s[0] > 0)

    if (this.streams.length > 0 && this.streams[this.streams.length - 1][1] === this.length) {
      this.input.set(true)
    } else {
      this.input.set(false)
    }

    const isAfterEmpty = this.streams.length === 0
    const isAfterFull  = this.streams.length === 1 && this.streams[0][0] === 0 && this.streams[0][1] === this.length

    if ((isBeforeFull && isAfterFull) || (isBeforeEmpty && isAfterEmpty)) {
      return
    }

    this.emit('update')
  }
}


export class Transistor extends EventEmitter {
  input: Input
  output: Output
  control: Input

  constructor(input?: Input, output?: Output, control?: Input) {
    super()

    this.input = input ?? new Input()
    this.output = output ?? new Output()
    this.control = control ?? new Input()

    this.input.on('change', this.update)
    this.control.on('change', this.update)

    this.update()
  }

  update = () => {
    this.output.set(this.input.enabled && this.control.enabled)
    this.input.sink(this.control.enabled)
  }
}

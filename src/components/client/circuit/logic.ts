import EventEmitter from 'eventemitter3'
import { clamp } from 'rambda'

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

export class Input extends EventEmitter<ChangeEvent> {
  enabled: boolean

  constructor() {
    super()
    this.enabled = false
  }

  set(enabled: boolean) {
    if (enabled === this.enabled) return
    this.enabled = enabled
    this.emit('change', this.enabled)
  }
}

export class Output extends EventEmitter<ChangeEvent> {
  enabled: boolean

  constructor() {
    super()
    this.enabled = false
  }

  set(enabled: boolean) {
    if (enabled === this.enabled) return
    this.enabled = enabled
    this.emit('change', this.enabled)
  }
}


export class Link extends EventEmitter<UpdateEvent> {
  output: Output
  input: Input
  length: number
  streams: [number, number][]

  constructor(
    output: Output,
    input: Input,
  ) {
    super()
    this.output = output
    this.input = input
    this.length = 100
    this.streams = []

    output.on('change', () => {
    })

    links.push(this)
  }

  update(dt: number) {
    this.streams.forEach((stream, i) => {
      stream[0] = clamp(0, this.length, stream[0] + dt)
      stream[1] = clamp(0, this.length, stream[1] + dt)
    })

    if (this.output.enabled) {
      if (this.streams.length > 0 && this.streams[0][0] <= dt) {
        this.streams[0][0] = 0
      } else {
        this.streams.push([0, dt])
      }
    }

    this.streams = this.streams.filter(s => s[0] !== s[1])

    if (this.streams.length > 0 && this.streams[this.streams.length - 1][1] === this.length) {
      this.input.set(true)
    } else {
      this.input.set(false)
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

    const update = () => {
      this.output.set(this.input.enabled && this.control.enabled)
    }

    this.input.on('change', update)
    this.control.on('change', update)
  }
}

export class Chip extends EventEmitter {
  name: string = ''
  inputs: Input[] = []
  outputs: Input[] = []
}


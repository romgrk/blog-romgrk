import EventEmitter from 'eventemitter3'
import { clamp } from 'rambda'

export function getDefaultComponents() {
  return {
    Circuit,
    Input,
    Output,
    Link,
    Junction,
    Transistor,
  }
}

export class Circuit {
  static create = () => {
    return new Circuit()
  }

  static set(c: Circuit) {
    Circuit.current = c
  }

  static current = null as unknown as Circuit

  links: Link[]
  components: ReturnType<typeof getDefaultComponents>

  constructor() {
    this.links = []
    this.components = getDefaultComponents()
  }
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

export class Output extends EventEmitter<ChangeEvent & SinkEvent> {
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
      this.outputA.set(true)
      this.outputB.set(true)
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
    this.input = input

    Circuit.current.links.push(this)
  }

  resist(resistance: number) {
    this.resistance = resistance
    this.emit('update')
    this.output.emit('sink')
  }

  update(dt: number) {
    const isBeforeEmpty = this.streams.length === 0
    const isBeforeFull  = this.streams.length === 1 && this.streams[0][0] === 0 && this.streams[0][1] === this.length

    this.streams.forEach((stream) => {
      stream[0] = clamp(0, this.length || 1, stream[0] + dt)
      stream[1] = clamp(0, this.length || 1, stream[1] + dt)
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
  }
}

export class Not extends EventEmitter {
  input: Input
  output: Output

  constructor(input?: Input, output?: Output) {
    super()

    this.input = input ?? new Input()
    this.output = output ?? new Output()

    this.input.on('change', this.update)

    this.update()
  }

  update = () => {
    this.output.set(!this.input.enabled)
  }
}

abstract class TwoInputsOneOutput extends EventEmitter {
  inputA: Input
  inputB: Input
  output: Output

  constructor(inputA?: Input, inputB?: Input, output?: Output) {
    super()

    this.inputA = inputA ?? new Input()
    this.inputB = inputB ?? new Input()
    this.output = output ?? new Output()

    this.inputA.on('change', this.update)
    this.inputB.on('change', this.update)

    this.update()
  }

  update = (): void => {
    this.logic()
  }

  abstract logic(): void
}

export class And extends TwoInputsOneOutput {
  logic() {
    this.output.set(this.inputA.enabled && this.inputB.enabled)
  }
}

export class Or extends TwoInputsOneOutput {
  logic() {
    this.output.set(this.inputA.enabled || this.inputB.enabled)
  }
}

export class Nand extends TwoInputsOneOutput {
  logic() {
    this.output.set(!(this.inputA.enabled && this.inputB.enabled))
  }
}

export class Nor extends TwoInputsOneOutput {
  logic() {
    this.output.set(!(this.inputA.enabled || this.inputB.enabled))
  }
}

export class Xor extends TwoInputsOneOutput {
  logic() {
    this.output.set(this.inputA.enabled !== this.inputB.enabled)
  }
}

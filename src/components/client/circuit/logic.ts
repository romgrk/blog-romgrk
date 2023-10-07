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

  listeners: Set<BaseElement<any>>
  components: ReturnType<typeof getDefaultComponents>

  constructor() {
    this.listeners = new Set()
    this.components = getDefaultComponents()
  }

  onTick(e: BaseElement<any>) {
    this.listeners.add(e)
    return () => this.listeners.delete(e)
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

abstract class BaseElement<T = {}> extends EventEmitter<UpdateEvent & T> {
  private disposables: Function[] | null

  constructor() {
    super()
    this.disposables = null
  }

  tick(_dt: number): void {}

  defer(fn: Function) {
    this.disposables ??= []
    this.disposables.push(fn)
  }

  destroy() {
    this.disposables?.forEach(fn => { fn() })
    this.disposables = null
  }
}


export class Input extends BaseElement<ChangeEvent & SinkEvent> {
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

export class Output extends BaseElement<ChangeEvent & SinkEvent> {
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

export class Junction extends BaseElement<UpdateEvent> {
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

export class Link extends BaseElement<UpdateEvent> {
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

    this.defer(Circuit.current.onTick(this))
  }

  resist(resistance: number) {
    this.resistance = resistance
    this.emit('update')
    this.output.emit('sink')
  }

  tick(dt: number) {
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


export class Transistor extends BaseElement {
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

export class Not extends BaseElement {
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

abstract class TwoInputsOneOutput extends BaseElement {
  inputA: Input
  inputB: Input
  output: Output
  gateDelay: number
  updateDelay: number

  constructor(inputA?: Input, inputB?: Input, output?: Output) {
    super()

    this.inputA = inputA ?? new Input()
    this.inputB = inputB ?? new Input()
    this.output = output ?? new Output()
    this.gateDelay = Math.round(Math.random() * 500)
    this.updateDelay = -1

    this.inputA.on('change', this.update)
    this.inputB.on('change', this.update)

    this.defer(Circuit.current.onTick(this))

    this.updateLogic()
  }

  tick(dt: number) {
    if (this.updateDelay === -1)
      return
    const updateDelay = this.updateDelay - dt
    if (updateDelay > 0) {
      this.updateDelay = updateDelay
    } else {
      this.updateDelay = -1
      this.updateLogic()
    }
  }

  update = (): void => {
    if (this.updateDelay === -1)
      this.updateDelay = this.gateDelay
  }

  abstract updateLogic(): void
}

export class And extends TwoInputsOneOutput {
  updateLogic() {
    this.output.set(this.inputA.enabled && this.inputB.enabled)
  }
}

export class Or extends TwoInputsOneOutput {
  updateLogic() {
    this.output.set(this.inputA.enabled || this.inputB.enabled)
  }
}

export class Nand extends TwoInputsOneOutput {
  updateLogic() {
    this.output.set(!(this.inputA.enabled && this.inputB.enabled))
  }
}

export class Nor extends TwoInputsOneOutput {
  updateLogic() {
    this.output.set(!(this.inputA.enabled || this.inputB.enabled))
  }
}

export class Xor extends TwoInputsOneOutput {
  updateLogic() {
    this.output.set(this.inputA.enabled !== this.inputB.enabled)
  }
}

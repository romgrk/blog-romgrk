import EventEmitter from 'eventemitter3'

export class Input extends EventEmitter<{
  change: (value: boolean) => void,
}> {
  enabled: boolean

  constructor() {
    super()
    this.enabled = false
  }

  set(enabled: boolean) {
    this.enabled = enabled
    this.emit('change', this.enabled)
  }
}

export class Output extends EventEmitter<{
  change: (value: boolean) => void,
}> {
  enabled: boolean

  constructor() {
    super()
    this.enabled = false
  }

  set(enabled: boolean) {
    this.enabled = enabled
    this.emit('change', this.enabled)
  }
}


export class Link extends EventEmitter {
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

    output.on('change', value => {
      input.set(value)
      this.emit('change')
    })
    input.set(output.enabled)
  }

  update(dt: number) {
    this.streams.forEach(stream => {
      stream
    })
  }
}


export class Transistor extends EventEmitter {
  input: Input
  output: Output
  control: Input

  constructor() {
    super()

    this.input = new Input()
    this.output = new Output()
    this.control = new Input()

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


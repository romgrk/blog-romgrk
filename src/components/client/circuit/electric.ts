import * as logic from './logic'

export { Circuit } from './logic'

export class Input extends logic.Input {
  grounded: boolean
  links: Link[]

  constructor() {
    super()
    this.grounded = false
    this.links = []
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
      l.resist(Infinity)
    }
  }

  updateResistance() {
    this.links.forEach(link => {
      if (this.grounded) {
        link.resist(0)
      } else {
        link.resist(Infinity)
      }
    })
  }
}

export class Output extends logic.Output {
  links: Link[]

  constructor() {
    super()
    this.links = []
  }

  link(l: Link) {
    this.links.push(l)
  }
}

export class Junction extends logic.Junction {
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

export class Link extends logic.Link {
  output: Output
  input: Input
  resistance: number

  constructor(
    output: Output,
    input: Input,
  ) {
    super(output, input)
    this.resistance = 0
    this.output = output
    this.input = input

    this.output.link(this)
    this.input.link(this)
  }

  resist(resistance: number) {
    this.resistance = resistance
    this.emit('update')
    this.output.emit('sink')
  }
}


export class Transistor extends logic.Transistor {
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

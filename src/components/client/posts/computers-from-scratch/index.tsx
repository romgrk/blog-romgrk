import { useEffect, useRef } from 'react'
import {
  Battery,
  Context,
  Circuit,
  Ground,
  Light,
  Junction,
  BigTransistor,
} from '../../circuit/drawing'
import * as logic from '../../circuit/logic'
import * as electric from '../../circuit/electric'
import cx from './index.module.css'

export function DemoTransistor() {
  return createCircuit({}, (ctx, c) => {
    const x = ctx.dimensions.width  / 2 - BigTransistor.size / 2
    const y = 100

    const t = c.add(new BigTransistor(x, y))
    c.label(t.input, 'top-left', 'Input')
    c.label(t.control, 'bottom-right', 'Control')
    c.label(t.output, 'top-right', 'Output')
    c.label(t, 'top', 'THE TRANSISTOR. TADA!', { fontWeight: 'bold' })

    const power = c.add(new Battery(x - 200, y, { canToggle: false, label: '+5v' }))

    const control = c.add(new Battery(x, y + power.size * 2, { edge: 'top' }))

    const led = c.add(new Light(x + 200, y))

    c.link(power.output, t.input)
    c.link(control.output, t.control)
    c.link(t.output, led.input)
  })
}

export function DemoGates() {
  return createCircuit({ logic: { components: electric } }, (ctx, c) => {
    const x = ctx.dimensions.width  / 2 - BigTransistor.size / 2
    const y = 60

    const junction = c.add(new Junction(x - BigTransistor.size, y))

    const transistor = c.add(new BigTransistor(x, y + 1.5 * BigTransistor.size))

    const power = c.add(new Battery(x - 200, y, { canToggle: false, label: '+5v' }))

    const control = c.add(new Battery(x, y + BigTransistor.size + power.size * 2, { edge: 'top' }))

    const ground = c.add(new Ground(x + 200, y + 1.5 * BigTransistor.size))
    const led = c.add(new Light(x + 200, y))

    c.link(power.output, junction.input)
    c.link(junction.outputA, led.input).logic.resistance = 10
    c.link(junction.outputB, transistor.input)
    c.link(transistor.output, ground.input)
    c.link(control.output, transistor.control)

  })
}


type CircuitOptions = {
  height?: number,
  logic?: {
    components?: logic.Circuit['components'],
  },
}

function createCircuit(options: CircuitOptions, fn: (ctx: Context, c: Circuit) => void) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const c = new Context(ref.current!)
    const circuit = new Circuit(c, { components: options.logic?.components })

    circuit.setup(() => fn(c, circuit))
    circuit.start()

    return () => {
      circuit.stop()
      c.svg.innerHTML = ''
    }
  }, [])

  return (
    <div>
      <svg className={cx.canvas} width='100%' height={String(options.height ?? 300)} ref={ref} />
    </div>
  )
}

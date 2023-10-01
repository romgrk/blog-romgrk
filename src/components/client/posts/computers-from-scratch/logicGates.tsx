import { useEffect, useRef } from 'react'
import {
  Battery,
  Context,
  Circuit,
  Ground,
  Light,
  Junction,
  Not,
  BigTransistor,
  snapToGrid,
  RIGHT,
} from '../../circuit/drawing'
import * as electric from '../../circuit/electric'
import cx from './index.module.css'


export function DemoNotGate() {
  return (
    <div className='row gap-1'>
      <DemoNotGateElectric />
      <DemoNotGateLogic />
    </div>
  )
}

export function DemoNotGateElectric() {
  return createCircuit({ options: { components: electric } }, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width / 2)
    const y = snapToGrid(60)

    const led        = c.add(new Light({ x: x, y: y, orientation: RIGHT }))
    const transistor = c.add(new BigTransistor({ x: x, y: y + led.shape.height * 2 }))
    const junction   = c.add(new Junction({ x: x - 60, y: y + led.shape.height * 2 }))
    const power      = c.add(new Battery({ x: x - 110, y: y + led.shape.height * 2, orientation: RIGHT }, { canToggle: false, label: '+5v' }))
    const ground     = c.add(new Ground({ x: x + BigTransistor.shape.width + 20, y: y + led.shape.height * 2 }))
    const control    = c.add(new Battery({ x: x, y: y + led.shape.height * 2 + BigTransistor.shape.width + 30 }))

    c.link(power.output, junction.input)
    c.link(junction.outputA, led.input, { find: true }).logic.resistance = 10
    c.link(junction.outputB, transistor.input, { find: true })
    c.link(transistor.output, ground.input)
    c.link(control.output, transistor.control)

    c.label(led, 'top', 'Output')
    c.label(control, 'bottom', 'Input')
  })
}

export function DemoNotGateLogic() {
  return createCircuit({}, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width / 2)
    const y = snapToGrid(ctx.dimensions.height / 2)

    const not     = c.add(new Not({ x, y: y }))
    const led     = c.add(new Light({ x, y: y - 80 }))
    const control = c.add(new Battery({ x, y: y + 80 }))

    c.link(control.output, not.input, { find: true })
    c.link(not.output, led.input, { find: true })

    c.label(led, 'top', 'Output')
    c.label(control, 'bottom', 'Input')
  })
}


type CircuitOptions = {
  height?: number,
  options?: Partial<Circuit['options']>,
}

function createCircuit(options: CircuitOptions, fn: (ctx: Context, c: Circuit) => void) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const c = new Context(ref.current!)
    const circuit = new Circuit(c, options.options)

    circuit.setup(() => fn(c, circuit))
    circuit.start()

    return () => {
      circuit.stop()
      c.svg.innerHTML = ''
    }
  }, [])

  return (
    <div>
      <svg
        className={cx.canvas}
        width='100%'
        height={String(options.height ?? 300)}
        ref={ref}
      />
    </div>
  )
}


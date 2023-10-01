import {
  Battery,
  Ground,
  Light,
  Junction,
  Not,
  BigTransistor,
  snapToGrid,
  RIGHT,
} from '../../circuit/drawing'
import * as electric from '../../circuit/electric'
import { createCircuit } from './utils'

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

// export function DemoPath() {
//   return createCircuit({ width: 150, height: 100, options: { components: electric } }, (ctx, c) => {
//
//     const power    = c.add(new Battery({ x: 0, y: 40, orientation: RIGHT }, { canToggle: false, label: '+5v' }))
//     const junction = c.add(new Junction({ x: 40, y: 40, orientation: RIGHT }))
//     const led1     = c.add(new Light({ x: 80, y: 40, orientation: RIGHT }))
//     const led2     = c.add(new Light({ x: 140, y: 40, orientation: RIGHT }))
//
//     c.link(power.output, junction.input)
//     c.link(junction.outputA, led1.input)
//     c.link(junction.outputB, led2.input, { find: true })
//   })
// }


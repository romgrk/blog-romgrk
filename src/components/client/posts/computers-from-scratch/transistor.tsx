import {
  Battery,
  Light,
  BigTransistor,
  RIGHT,
  snapToGrid,
} from '../../circuit/drawing'
import { createCircuit } from './utils'

export function DemoTransistor() {
  return createCircuit({ height: 270 }, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width / 2 - BigTransistor.shape.width / 2)
    const y = snapToGrid(80)

    const t = c.add(new BigTransistor({ x: x, y: y }))
    c.label(t.input, 'top-left', 'Input')
    c.label(t.control, 'bottom-right', 'Control')
    c.label(t.output, 'top-right', 'Output')
    c.label(t, 'top', 'THE TRANSISTOR. TADA!', { fontWeight: 'bold' })

    const power   = c.add(new Battery({ x: x - 160, y, orientation: RIGHT }, { canToggle: false, label: '+5v' }))
    const control = c.add(new Battery({ x, y: y + power.size * 3 }))
    const led     = c.add(new Light({ x: x + 160, y, orientation: RIGHT }))

    c.link(power.output, t.input)
    c.link(control.output, t.control)
    c.link(t.output, led.input)
  })
}

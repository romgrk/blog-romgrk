import {
  Battery,
  Ground,
  Light,
  Junction,
  Gate,
  And,
  Not,
  Nand,
  BigTransistor,
  snapToGrid,
  LEFT,
  RIGHT,
} from '../../circuit/drawing'
import * as electric from '../../circuit/electric'
import { createCircuit } from './utils'


export function DemoSRNandLatch() {
  return createCircuit({ options: { ticks: 40 } }, (ctx, c, x, y) => {

    const nandA      = c.add(new Nand({ x: x - 50, y: y }))
    const nandB      = c.add(new Nand({ x: x + 50, y: y }))
    const inputSet   = c.add(new Battery({ x: x - 60, y: y + 80 }))
    const inputReset = c.add(new Battery({ x: x + 60, y: y + 80 }))
    const junctionA = c.add(new Junction({ x: x - 50, y: y - 30 }))
    const junctionB = c.add(new Junction({ x: x + 50, y: y - 30 }))
    const outputA = c.add(new Light({ x: x - 50, y: y - 80 }))
    const outputB = c.add(new Light({ x: x + 50, y: y - 80 }))

    c.link(inputSet.output, nandA.inputA)
    c.link(inputReset.output, nandB.inputB)

    c.link(nandA.output, junctionA.input)
    c.link(junctionA.outputA, outputA.input)
    c.link(junctionA.outputB, nandB.inputA, { find: true })

    c.link(nandB.output, junctionB.input)
    c.link(junctionB.outputA, outputB.input)
    c.link(junctionB.outputB, nandA.inputB, { find: true })

    inputSet.output.set(true)
    inputReset.output.set(true)

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


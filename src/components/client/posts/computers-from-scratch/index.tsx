import { useEffect, useRef } from 'react'
import {
  Battery,
  Context,
  Circuit,
  Ground,
  Light,
  Junction,
  BigTransistor,
  snapToGrid,
} from '../../circuit/drawing'
import * as logic from '../../circuit/logic'
import * as electric from '../../circuit/electric'
import * as astar from '../../circuit/astar'
import cx from './index.module.css'

// export function DemoTransistor() {
//   return createCircuit({}, (ctx, c) => {
//     const x = ctx.dimensions.width  / 2 - BigTransistor.size / 2
//     const y = 100
//
//     const t = c.add(new BigTransistor(x, y))
//     c.label(t.input, 'top-left', 'Input')
//     c.label(t.control, 'bottom-right', 'Control')
//     c.label(t.output, 'top-right', 'Output')
//     c.label(t, 'top', 'THE TRANSISTOR. TADA!', { fontWeight: 'bold' })
//
//     const power = c.add(new Battery(x - 200, y, { canToggle: false, label: '+5v' }))
//
//     const control = c.add(new Battery(x, y + power.size * 2, { edge: 'top' }))
//
//     const led = c.add(new Light(x + 200, y))
//
//     c.link(power.output, t.input)
//     c.link(control.output, t.control)
//     c.link(t.output, led.input)
//   })
// }

export function DemoTransistor() {
  const weights = [
    [3,  2, 1, 1, 1, 1, 1, 1],
    [4,  3, 2, 1, 1, 1, 1, 1],
    [5,  4, 3, 2, 1, 1, 1, 1],
    [-1, 5, 4, 3, 2, 1, 1, 1],
    [-1, 5, 4, 3, 2, 1, 1, 1],
  ]
  const width = weights[0].length
  const height = weights.length
  const data = new Int8Array(width * height)
  weights.forEach((ws, y) => {
    ws.forEach((w, x) => {
      data[y * width + x] = w
    })
  })

  const graph = new astar.Graph(data, weights[0].length, weights.length)
  const result = astar.search(graph, { x: 0, y: 0 }, { x: 4, y: 4 })
  return (
    <div className=''>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {weights.map((ws, y) =>
          <div style={{ display: 'flex', border: '1px solid #666' }}>
            {ws.map((w, x) =>
              <div style={{
                display: 'flex', flex: '1', border: '1px solid #666',
                backgroundColor: result.some(n => n.x === x && n.y === y) ? 'rgba(255, 255, 0, 0.2)' : undefined
              }}>
                {w === -1 ? 'x' : <span>&nbsp;</span>}
              </div>
            )}
          </div>
        )}
      </div>
      <div className=''>
        {JSON.stringify(result.map(n => ({ x: n.x, y: n.y })))}
      </div>
    </div>
  )
}

export function DemoGates() {
  return createCircuit({ logic: { components: electric } }, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width  / 2 - BigTransistor.size / 2)
    const y = snapToGrid(100)

    const junction = c.add(new Junction(x - 40, y + BigTransistor.size / 2))

    const transistor = c.add(new BigTransistor(x, y))

    const power = c.add(new Battery(x - 120, y + 10, { canToggle: false, label: '+5v' }))
    // const power = c.add(new Battery(x - 200, y, { canToggle: false, label: '+5v' }))

    const control = c.add(new Battery(x + 10, y + BigTransistor.size + power.size * 1, { edge: 'top' }))

    const ground = c.add(new Ground(x + BigTransistor.size + 80, y + 10))
    const led = c.add(new Light(x + 10, y - control.size * 2))

    c.link(power.output, junction.input)
    c.link(junction.outputA, led.input, { find: true }).logic.resistance = 10
    c.link(junction.outputB, transistor.input, { find: true })
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

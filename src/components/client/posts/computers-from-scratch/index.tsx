import { useEffect, useRef } from 'react'
import {
  Battery,
  Context,
  Circuit,
  Light,
  Transistor,
} from '../../circuit/drawing'
import cx from './index.module.css'

export function DemoTransistor() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = ref.current!
    const dimensions = svg.getBoundingClientRect()
    const c = new Context(svg)

    const size = 60
    const x = dimensions.width  / 2 - size / 2
    const y = 100

    const circuit = new Circuit(c)

    circuit.setup(() => {
      const t = new Transistor(x, y)
      circuit.add(t)
      circuit.label(t.input, 'top-left', 'Input')
      circuit.label(t.control, 'bottom-right', 'Control')
      circuit.label(t.output, 'top-right', 'Output')

      const power = new Battery(x - 200, y, { canToggle: false, label: '+5v' })
      circuit.add(power)

      const control = new Battery(x, y + power.size * 2, { edge: 'top' })
      circuit.add(control)

      const led = new Light(x + 200, y)
      circuit.add(led)

      circuit.link(power.output, t.input)
      circuit.link(control.output, t.control)
      circuit.link(t.output, led.input)
    })
    circuit.draw()
    circuit.start()

    return () => {
      circuit.stop()
      svg.innerHTML = ''
    }
  }, [])

  return (
    <div>
      <svg className={cx.canvas} width='100%' height='300' ref={ref} />
    </div>
  )
}

export function DemoAndGate() {
  return null

  // const ref = useRef<SVGSVGElement>(null)
  //
  // useEffect(() => {
  //   const svg = ref.current!
  //   const dimensions = svg.getBoundingClientRect()
  //   const c = new Context(svg)
  //
  //   const size = 60
  //   const x = dimensions.width  / 2 - size / 2
  //   const y = 100
  //
  //   const circuit = new Circuit(c)
  //
  //   const ta = new Transistor(x - 100, y)
  //   circuit.add(ta)
  //   const tb = new Transistor(x + 100, y)
  //   circuit.add(tb)
  //
  //   const power = new Battery(x - 260, y, { canToggle: false })
  //   circuit.add(power)
  //
  //   const a = new Battery(x - 100, y + power.size * 2, { label: 'A' })
  //   circuit.add(a)
  //
  //   const b = new Battery(x + 100, y + power.size * 2, { label: 'B' })
  //   circuit.add(b)
  //
  //   const led = new Light(x + 260, y)
  //   circuit.add(led)
  //
  //   circuit.link(power.output, ta.input)
  //   circuit.link(a.output, ta.control)
  //   circuit.link(ta.output, tb.input)
  //   circuit.link(b.output, tb.control)
  //   circuit.link(tb.output, led.input)
  //
  //   // circuit.link(t.output, led.input)
  //
  //   circuit.draw()
  //
  //   return () => {
  //     svg.innerHTML = ''
  //   }
  // }, [])
  //
  // return (
  //   <div>
  //     <svg className={cx.canvas} width='100%' height='300' ref={ref} />
  //   </div>
  // )
}

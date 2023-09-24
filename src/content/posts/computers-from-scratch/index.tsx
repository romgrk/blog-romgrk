import { useEffect, useRef } from 'react'
import {
  Battery,
  Context,
  Circuit,
  Light,
  Transistor,
} from './drawing'
import cx from './index.module.css'

const padding = 40

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

    const t = new Transistor(x, y)
    circuit.add(t)

    const power = new Battery(x - 200, y, { canToggle: false })
    circuit.add(power)

    const control = new Battery(x, y + power.size * 2)
    circuit.add(control)

    const led = new Light(x + 200, y)
    circuit.add(led)

    circuit.link(power.output, t.input)
    circuit.link(control.output, t.control)
    circuit.link(t.output, led.input)

    circuit.draw()

    return () => {
      svg.innerHTML = ''
    }
  }, [])

  return (
    <div>
      <svg className={cx.canvas} width='100%' height='300' ref={ref} />
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { Context, Circuit } from '../../circuit/drawing'
import cx from './index.module.css'

type CircuitOptions = {
  height?: number,
  options?: Partial<Circuit['options']>,
}

export function createCircuit(options: CircuitOptions, fn: (ctx: Context, c: Circuit) => void) {
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

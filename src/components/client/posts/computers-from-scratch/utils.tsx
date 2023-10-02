import { useEffect, useRef } from 'react'
import { snapToGrid, Context, Circuit } from '../../circuit/drawing'
import cx from './index.module.css'

type CircuitOptions = {
  width?: number,
  height?: number,
  options?: Partial<Circuit['options']>,
}

export function createCircuit(
  options: CircuitOptions,
  fn: (ctx: Context, c: Circuit, x: number, y: number) => void
) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const c = new Context(ref.current!)
    const circuit = new Circuit(c, options.options)
    const x = snapToGrid(c.dimensions.width  / 2)
    const y = snapToGrid(c.dimensions.height / 2)

    circuit.setup(() => fn(c, circuit, x, y))
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
        style={{ width: options.width, height: options.height ?? 300 }}
        width={options.width ? String(options.width) : '100%'}
        height={String(options.height ?? 300)}
        ref={ref}
      />
    </div>
  )
}

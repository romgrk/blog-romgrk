import CodeRunner from '../CodeRunner'

function transformOutput(output: string) {
  const lines = output.split('\n')
  return lines.slice(1, 6).join('\n')
    .replaceAll(/^\s+at eval/gm, '<anonymous>')
    .replaceAll(/^\s+at /gm, '')
}

export function ExampleStack() {
  return (
    <div className='row mb-1'>
      <CodeRunner
        transformOutput={transformOutput}
        consoleLines={6}
        codeLines={13}
        code={`
          class Component {
            a() { this.b() }
            b() { this.c() }
            c() { this.d() }
            d() { this.e() }
            e() {
              /* breakpoint */
              console.log(new Error().stack)
            }
          }

          new Component().a()
        `}
      />

      <CodeRunner
        transformOutput={transformOutput}
        consoleLines={6}
        codeLines={13}
        context={`
          function useCallback(fn) { return fn }
        `}
        code={`
          function Component() {
            const a = useCallback(() => { b() }, [])
            const b = useCallback(() => { c() }, [])
            const c = useCallback(() => { d() }, [])
            const d = useCallback(() => { e() }, [])
            const e = useCallback(() => {
              /* breakpoint */
              console.log(new Error().stack)
            }, [])
            return a
          }

          Component()()
        `}
      />

    </div>
  )
}

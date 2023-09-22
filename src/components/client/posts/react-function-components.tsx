import CodeRunner from '../CodeRunner'

export function ExampleStack() {
  const context = `
    function printStackTrace() {
      console.log(new Error().stack)
    }
    function useCallback(fn) { return fn }
  `
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
              printStackTrace()
            }
          }

          new Component().a()
        `}
        context={context}
      />

      <CodeRunner
        transformOutput={transformOutput}
        consoleLines={6}
        codeLines={13}
        code={`
          function Component() {
            const a = useCallback(() => { b() }, [])
            const b = useCallback(() => { c() }, [])
            const c = useCallback(() => { d() }, [])
            const d = useCallback(() => { e() }, [])
            const e = useCallback(() => {
              printStackTrace()
            }, [])
            return a
          }

          Component()()
        `}
        context={context}
      />

    </div>
  )
}

function transformOutput(output: string) {
  const lines = output.split('\n')
  return lines.slice(0, 6).join('\n')
    .replace(/Error\s+/m, '')
    .replaceAll(/^\s*(at )?eval/gm, '<anonymous>')
    .replaceAll(/^\s*(at )?/gm, '')
}


const CONTEXT = `
function cuid() { return 42 }
function createRef() { return { current: null } }

let currentContext = null
const contexts = []

function nextContext() {
  if (!currentContext.next) {
    currentContext.next = { value: null, next: null }
  }
  return (currentContext = currentContext.next)
}

function useRef() {
  nextContext()
  if (currentContext.value)
    return currentContext.value
  return (currentContext.value = { current: null })
}
function useState(s) {
  nextContext()
  if (currentContext.value)
    return [currentContext.value[0], currentContext.value[1]]
  return (currentContext.value = [s, () => {}])
}
function useCallback(fn, d) {
  nextContext()
  if (currentContext.value)
    return currentContext.value
  return (currentContext.value = fn)
}
`

const CLASS_VERSION = `
  class Selector {
    id = cuid()
    ref = createRef()
    position = { x: 0, y: 0}

    state = {
      open: false,
      loading: false,
      disabled: false,
      selectedIndex: -1,
    }

    open() {}
    close() {}
    select(index) {}
    focus() {}

    render() {
      return '<div>Hello</div>'
    }
  }

  const start = Date.now()
  const elements = Array.from({ length: 2000 }).map(() => new Selector())
  for (let i = 0; i < 100; i++) {
    elements.forEach(e => e.render())
  }
  const end = Date.now()
  console.log((end - start)/100 + 'ms')
`

const FUNCTION_VERSION = `
  function Selector(props) {
    const id = useRef(cuid())
    const ref = useRef()
    const position = useRef({ x: 0, y: 0 })

    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const open = useCallback(() => {}, [])
    const close = useCallback(() => {}, [])
    const select = useCallback((index) => {}, [])
    const focus = useCallback(() => {}, [])

    return '<div>Hello</div>'
  }

  const start = Date.now()
  const elements = Array.from({ length: 2000 }).map((_, i) => (contexts[i] = { value: null, next: null }))
  for (let i = 0; i < 100; i++) {
    elements.forEach((_, i) => (currentContext = contexts[i], Selector()))
  }
  const end = Date.now()
  console.log((end - start)/100 + 'ms')
`


export function ExamplePerformance() {
  return (
    <div className='row mb-1'>

      <CodeRunner
        context={CONTEXT}
        code={CLASS_VERSION}
      />

      <CodeRunner
        context={CONTEXT}
        code={FUNCTION_VERSION}
      />

    </div>
  )
}

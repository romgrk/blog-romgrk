import { useState } from 'react'
import outdent from 'outdent'
import './CodeRunner.css'

type Props = {
  code: string,
  codeLines?: number
  consoleLines?: number
  context?: string,
  transformOutput?: (output: string) => string,
}

const globalScope = typeof window !== 'undefined' ? window as any : {} as any
const originalConsole = globalScope.console

export default function CodeRunner(props: Props) {
  const [code, setCode] = useState(outdent.string(props.code))
  const [output, setOutput] = useState('')

  const console = {
    log: (message: string) => {
      const text = typeof message === 'string' ? message : JSON.stringify(message)
      setOutput(output => output + text + '\n')
    }
  }

  const run = () => {
    setOutput('')

    globalScope.console = console
    try {
      eval((props.context ?? '') + ';' + code)
    } catch (err: any) {
      console.log(err.message)
    }
    globalScope.console = originalConsole

    if (props.transformOutput)
      setOutput(props.transformOutput)
  }

  const showContext = () => {
    alert(outdent.string(props.context ?? ''))
  }

  return (
    <div className='code-runner'>
      { props.context &&
        <div className='code-runner-show-context'>
          <button
            className='sm'
            title='The context is code executed before this snippet but not relevant to the example.'
            onClick={showContext}
          >
            Show context
          </button>
        </div>
      }
      <textarea
        style={{
          '--lines': props.codeLines,
        } as any}
        onChange={ev => setCode(ev.target.value)}
        value={code}
      />
      <button onClick={run}>Run</button>
      <textarea
        style={{
          '--lines': props.consoleLines,
        } as any}
        disabled
        value={output}
      />
    </div>
  )
}

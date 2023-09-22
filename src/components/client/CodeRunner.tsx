import { useState } from 'react'
import { Dialog } from '@headlessui/react'
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
const indirectEval = globalScope.eval

export default function CodeRunner(props: Props) {
  const [code, setCode] = useState(outdent.string(props.code))
  const [isOpen, setIsOpen] = useState(false)
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
      indirectEval((props.context ?? '') + ';' + code)
    } catch (err: any) {
      console.log(err.message)
    }
    globalScope.console = originalConsole

    if (props.transformOutput)
      setOutput(props.transformOutput)
  }

  return (
    <div className='code-runner'>
      { props.context &&
        <div className='code-runner-show-context'>
          <button
            className='sm'
            title='The context is code executed before this snippet but not relevant to the example.'
            onClick={() => setIsOpen(true)}
          >
            Show context
          </button>
          <Dialog className='modal' open={isOpen} onClose={() => setIsOpen(false)}>
            <div className='modal-backdrop' onClick={() => setIsOpen(false)}></div>
            <div className='modal-panel'>
              <Dialog.Panel>
                <Dialog.Title>Code runner context</Dialog.Title>
                <Dialog.Description>
                  The context code is run before the snippet inside the code runner is executed.
                  It contains code that isn't directly relevant to the example.
                </Dialog.Description>

                <pre>{outdent.string(props.context ?? '')}</pre>

                <div className='modal-actions'>
                  <button onClick={() => setIsOpen(false)}>Close</button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
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

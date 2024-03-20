import cx from 'clsx'
import { useState, useRef } from 'react'

const timeToRun = 1000
const pausePerBlock = 500

type Block = {
  id: string,
  code: string,
  run?: Function,
  result: {
    runTime: number,
    amountOfRounds: number,
    percent: number,
  },
}

const EMPTY_RESULT = {
  runTime: 0,
  amountOfRounds: 0,
  percent: 0,
}

type Result = typeof EMPTY_RESULT
type Results = Record<string, Result>

export function Benchmark({ id, iterations = 1, results }: {
  id: string,
  iterations?: number,
  results?: Results
}) {
  const testCase = useRef('')
  const setup = useRef('')
  const [isRunning, setRunning] = useState(false)
  const [shown, setShown] = useState(false)
  const [progress, setProgress] = useState(-1)
  const [blocks, setBlocks] = useState(() => {
    if (typeof document === 'undefined') return []
    let result = [] as Block[]
    setup.current = ''
    Array.from(document.querySelectorAll(`#${id} pre > code`)).forEach((block, index) => {
      const code = block.textContent!.trim()
      const id = code.startsWith('//') ? code.slice(2).split('\n')[0].trim() : `Case ${index + 1}`
      if (id.startsWith('test case')) {
        testCase.current = code + ';'
        return
      }
      if (id.startsWith('setup')) {
        setup.current += code + ';'
        return
      }
      result.push({ id, code, run: undefined, result: results?.[id] ?? EMPTY_RESULT })
    })

    return result
  })

  const runTestForAmountOfTime = (block: Block, currentTimeToRun = timeToRun) => {
    let startTimer = performance.now()
    let timer = performance.now()
    let counter = 0
    do {
      for (let i = 0; i < iterations; i++) {
        block.run!()
      }
      counter++
      timer = performance.now()
    } while(timer - startTimer < currentTimeToRun)
    return { counter, runTime: startTimer - timer, timer }
  }

  const runTests = async () => {
    blocks.forEach(b => {
      b.result.percent = 0
    })

    setProgress(0)
    setRunning(true)
    setBlocks([...blocks])

    blocks.forEach(b => {
      const code = `${setup.current}; (function(){${b.code};${testCase.current}})`
      try {
        b.run = eval(code)
      } catch(e) {
        console.error(e)
        console.log(code)
      }
    })

    await sleep(500)

    for (let block of blocks) {
      runTestForAmountOfTime(block, 500)
    }
    await sleep(1000)

    let timeForTest = ((timeToRun + (pausePerBlock * 2)) * blocks.length) - pausePerBlock
    let completeTestStart = performance.now()

    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i]
      await sleep(pausePerBlock)

      let testResult = runTestForAmountOfTime(block, timeToRun)
      block.result = {
        runTime: testResult.runTime,
        amountOfRounds: testResult.counter,
        percent: 0
      }
      let t = testResult.timer - completeTestStart
      let progress = Math.round((100 / timeForTest) * t)
      if (progress > 100) progress = 100
      setProgress(progress)

      if (i < blocks.length - 1)
        await sleep(pausePerBlock)
    }

    let f = blocks.reduce((prev, current) => (prev.result.amountOfRounds > current.result.amountOfRounds) ? prev : current)
    const maxRounds = f.result.amountOfRounds
    // this.model.winnerBlockId = f.id
    for (let block of blocks) {
      block.result.percent = Math.round(((100 / maxRounds) * block.result.amountOfRounds)*100)/100
    }

    setProgress(0)
    setShown(true)
    setRunning(false)
    setBlocks([...blocks])

    blocks.forEach(b => {
      b.run = undefined
    })

    console.log(JSON.stringify(blocks.reduce((rs, block) => {
      rs[block.id] = block.result
      return rs
    }, {} as any)))
  }

  return (
    <div className='flex flex-row gap-4 mb-2'>
      <div className={cx('flex-1 mb-1 grid grid-cols-[200px_auto]', isRunning && 'opacity-50')}>
        {blocks.map((b) =>
          <>
            <div><b>{b.id}:</b></div>
            <div className='grid place-items-center'>
              <div className='relative rounded-lg bg-blue-300/10 overflow-hidden text-center font-bold h-6 p-0 text-sm w-full'>
                <div className='bg-blue-500/80 absolute top-0 left-0 h-full transition-all' style={{ width: `${shown ? b.result.percent : 0}%` }} />
                <span className='absolute top-0.5 m-auto left-0 right-0'>{shown ? b.result.percent : 0}%</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        { results !== undefined && !shown &&
          <button className='w-20' onClick={() => setShown(true)}>
            Show
          </button>
        }
        { results === undefined || shown &&
          <button className='w-20' disabled={isRunning} onClick={runTests}>
            {isRunning ? `${progress}%` : 'Run'}
          </button>
        }
      </div>
    </div>
  )
}

function sleep(n: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, n)
  })
}

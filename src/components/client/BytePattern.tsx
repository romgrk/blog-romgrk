import { useState } from 'react'
import './BytePattern.css'


const initial   = [0, 0, 0, 0, 0, 0, 0, 0]
const positions = [7, 6, 5, 4, 3, 2, 1, 0]

export default function BytePattern(props: { initialValue?: string }) {
  const [values, setValues] = useState(() => {
    if (!props.initialValue) return initial
    return props.initialValue.split('').reverse().map(Number)
  })

  const total = positions.reduce((acc, index) => {
    return acc + values[index] * (index === 7 ? -1 : 1) * (2 ** index)
  }, 0)

  return (
    <table className='BytePattern font-mono tabular-nums'>
      <tbody>
        <tr>
          <th>
            Bit
          </th>
          {positions.map(index =>
            <td key={index} className='text-center'>
              <button
                key={index}
                className={'md:w-full ' + (values[index] ? '' : 'btn--outlined')}
                onClick={() => {
                  const newValues = [...values]
                  newValues[index] = values[index] ? 0 : 1
                  setValues(newValues)
                }}
              >
                {values[index]}
              </button>
            </td>
          )}
        </tr>
        <tr>
          <th>
            Value
          </th>
          {positions.map(index =>
            <td key={index} className='text-center'>
              <span className='md:hidden'>
                {values[index] ?
                  <>
                    {index === 7 ? '-' : ''}<span>2^{index}</span>
                  </> :
                  <span>0</span>
                }
              </span>
              <span className='hidden md:inline'>
                {values[index] ?
                  <>
                    {index === 7 ? '-' : <span>&nbsp;</span>}
                    <span>2^{index}&nbsp;</span>
                  </> :
                  <span>&nbsp;&nbsp;0&nbsp;&nbsp;</span>
                }
              </span>
              
            </td>
          )}
        </tr>
        <tr>
          <th>
            Total
          </th>
          <td colSpan={8} className='text-right font-bold'>
            <span className='mr-4 text-blue-400'>
              {total}
            </span>
          </td>
        </tr>
      </tbody>
   </table>
  )
}

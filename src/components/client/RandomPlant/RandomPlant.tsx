import { useRef } from 'react'
import plant1 from './plant-1.svg?raw'
import plant2 from './plant-2.svg?raw'

import './RandomPlant.css'

const plants = [
  plant1,
  plant2,
]

export default function RandomPlant() {
  const index = useRef(Math.floor(Math.random() * plants.length)).current
  const plant = plants[index].trim()

  return (
    <div className='random-plant'>
      <div
        className='random-plant-svg'
        dangerouslySetInnerHTML={{ __html: plant }}
      />
    </div>
  )
}

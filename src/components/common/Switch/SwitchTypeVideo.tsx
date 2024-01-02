'use client'

import { cn } from '@/utils'
import { useState } from 'react'
import { listSwitchTypeVideo } from './constants'

const SwitchTypeVideo = () => {
  const [activeType, setActiveType] = useState(listSwitchTypeVideo[0].value)

  const handleSwitchTypeVideo = (type: string) => {
    setActiveType(type)
  }

  return (
    <div className="block md:hidden">
      {listSwitchTypeVideo.map((type) => (
        <button
          key={type.key}
          className={cn('px-4 py-2 text-white/[.5] dark:text-mediumGray', {
            'text-white': activeType === type.value,
          })}
          onClick={() => handleSwitchTypeVideo}
        >
          {type.name}
        </button>
      ))}
    </div>
  )
}

export default SwitchTypeVideo

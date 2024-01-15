'use client'

import { cn } from '@/utils'
import { useState } from 'react'
import { listSwitchTypeVideo } from './constants'
import { Button } from '../Button'

const SwitchTypeVideo = () => {
  const [activeType, setActiveType] = useState(listSwitchTypeVideo[0].value)

  const handleSwitchTypeVideo = (type: string) => {
    setActiveType(type)
  }

  return (
    <div className="block md:hidden">
      {listSwitchTypeVideo.map((type) => (
        <Button
          key={type.key}
          className={cn('text-white/[.5] font-medium text-lg', {
            'text-white': activeType === type.value,
          })}
          onClick={() => handleSwitchTypeVideo(type.value)}
        >
          {type.name}
        </Button>
      ))}
    </div>
  )
}

export default SwitchTypeVideo

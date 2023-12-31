'use client'

import { useCount, useIncrement } from '@/store/counterSlice'
import { cn } from '@/utils'

const HomePage = () => {
  const count = useCount()
  const increment = useIncrement()

  return (
    <div>
      <p className={cn('text-green-500')}>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default HomePage

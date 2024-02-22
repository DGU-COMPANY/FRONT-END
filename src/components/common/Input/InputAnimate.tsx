import { useState } from 'react'
import Input from './Input'
import { cn } from '@/utils'

interface IInputAnimateProps {
  placeholderAnimation: string
  errorMessage?: string
  className?: string
  inputClassName?: string
}

const InputAnimate = ({
  placeholderAnimation,
  errorMessage,
  className,
  inputClassName,
}: IInputAnimateProps) => {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <Input
      className={className}
      inputClassName={inputClassName}
      placeholderAnimation={placeholderAnimation}
      errorMessage={errorMessage}
      placeholderAnimationClassName={cn({
        '-top-2.5': isFocus,
        'top-3': !isFocus,
      })}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
}

export default InputAnimate

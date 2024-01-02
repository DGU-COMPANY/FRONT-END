import { cn } from '@/utils'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOutline?: boolean
  isDisable?: boolean
  isPrimary?: boolean
  isRound?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({
  isOutline,
  isDisable,
  isPrimary,
  isRound,
  isLoading,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...rest
}: IButtonProps) => {
  const renderClassName = cn(
    'text-center transition-all hover:hover:opacity-80 px-4 py-2 rounded',
    {
      'border border-solid border-black': isOutline,
      'flex justify-center items-center': isLoading ?? leftIcon ?? rightIcon,
      'opacity-40': isDisable,
      'text-charcoalGray bg-primary': isPrimary,
      'round-xl': isRound,
    },
    className,
  )

  return (
    <button
      disabled={isDisable ?? isLoading}
      className={renderClassName}
      onClick={onClick}
      {...rest}
    >
      {isLoading && <AiOutlineLoading3Quarters className="animate-spin mr-2" />}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}

export default Button

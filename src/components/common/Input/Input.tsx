import { cn } from '@/utils'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  placeholderAnimationClassName?: string
  placeholder?: string
  placeholderAnimation?: string
  errorMessage?: string
}

const Input = ({
  className,
  inputClassName,
  placeholder,
  placeholderAnimation,
  placeholderAnimationClassName,
  type,
  errorMessage,
  ...rest
}: IInputProps) => {
  return (
    <div className={cn('relative', className)}>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          'outline-none bg-transparent py-2.5 px-3 w-full dark:text-white rounded-xl',
          inputClassName,
        )}
        {...rest}
      />
      <label
        className={cn(
          'absolute left-4 top-3 text-sm px-3 text-black dark:text-white bg-white dark:bg-rangoonGreen transition-all duration-300',
          placeholderAnimationClassName,
        )}
      >
        {placeholderAnimation}
      </label>
      <p className="absolute right-0 -bottom-6 text-error text-sm">
        {errorMessage}
      </p>
    </div>
  )
}

export default Input

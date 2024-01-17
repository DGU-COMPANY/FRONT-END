import { cn } from '@/utils'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  placeholder?: string
}

const Input = ({ placeholder, className, type }: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        'rounded-xl outline-none bg-transparent py-2.5 px-3',
        className,
      )}
    />
  )
}

export default Input

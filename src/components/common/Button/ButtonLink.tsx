import { cn } from '@/utils'
import Link from 'next/link'

interface IButtonLinkProps {
  href: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

const ButtonLink = ({
  href,
  leftIcon,
  rightIcon,
  className,
  children,
}: IButtonLinkProps) => {
  const renderClassName = cn(
    'text-center transition-all hover:hover:opacity-80 p-3 round-xl text-inherit',
    { 'flex items-center': leftIcon ?? rightIcon },
    className,
  )

  return (
    <Link className={renderClassName} href={href}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Link>
  )
}

export default ButtonLink

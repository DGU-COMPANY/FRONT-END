import Link from 'next/link'
import logoDark from '@/assets/logo/logoDark.png'
import Image from 'next/image'
import { cn } from '@/utils'

interface ILogoProps {
  className?: string
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <Link
      className={cn(
        'inline-block px-6 py-3 xl:p-3 xl:ml-3 mb-1 xl:mb-6 flex-shrink-0',
        className,
      )}
      href="/"
    >
      <Image
        className="w-10 xl:w-12.5 object-cover"
        src={logoDark}
        alt="logo"
      />
    </Link>
  )
}

export default Logo

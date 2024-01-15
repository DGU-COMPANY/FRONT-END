'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '../Button'
import { cn } from '@/utils'
import { useClickOutside } from '@/hooks'
import { BiLogOut } from 'react-icons/bi'
import { menuItems } from './constants'

interface IMenuProps {
  theme?: 'black'
  children: string | React.ReactNode
  className?: string
}

const MenuProfile = ({ theme, children, className }: Readonly<IMenuProps>) => {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => setIsMenu(false))

  const handleToggleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <div className="relative flex" ref={menuRef}>
      <Button className="select-none flex-shrink-0" onClick={handleToggleMenu}>
        {children}
      </Button>
      {isMenu && (
        <ul
          className={cn(
            'bg-white absolute top-15 -right-1 w-[230px] shadow-lg rounded-5 py-2.5 max-h-[60vh] overflow-y-auto z-10',
            className,
          )}
        >
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={cn('rounded-2.5 mx-2 my-0.5', {
                'hover:bg-steelGray/[.03]': theme === 'black',
                'hover:bg-inkBlue/[.03]': theme !== 'black',
              })}
            >
              <Link
                className="flex items-center font-medium px-3.5 py-2.5"
                href={item.href}
              >
                <span className="text-5.5">{item.icon}</span>
                <span className="ml-4">{item.name}</span>
              </Link>
            </li>
          ))}
          <li
            className={cn('rounded-2.5 mx-2 my-0.5', {
              'hover:bg-steelGray/[.03]': theme === 'black',
              'hover:bg-inkBlue/[.03]': theme !== 'black',
            })}
          >
            <Button
              leftIcon={<BiLogOut fontSize={22} />}
              className="font-medium px-3.5 py-2.5 gap-x-2"
            >
              Logout
            </Button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default MenuProfile

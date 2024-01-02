'use client'

import { ButtonLink } from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import { cn } from '@/utils'
import { usePathname } from 'next/navigation'

import { listNavigation } from './constants'

const Sidebar = () => {
  const pathName = usePathname()

  return (
    <aside className="py-1 md:py-2.5 xl:p-3 bg-white md:rounded-layout left-0 right-0 bottom-0 fixed md:relative xl:w-[285px] shadow-top">
      <Logo className="hidden md:inline-block" />
      <ul className="space-y-1 flex items-center justify-between px md:block px-2 sm:px-5 md:px-0">
        {listNavigation.map((itemNav) => {
          const Icon = itemNav.icon

          return (
            <li
              key={itemNav.key}
              className={cn('text-black/[.5]', {
                'text-primary xl:bg-primary xl:text-black/[.8] rounded-xl':
                  pathName === itemNav.href,
              })}
            >
              <ButtonLink
                className="font-bold gap-x-4 flex items-center justify-center xl:justify-start sm:px-6"
                href={itemNav.href}
              >
                <span>
                  <Icon fontsize="12px" />
                </span>
                <span className="hidden xl:inline-block">{itemNav.name}</span>
              </ButtonLink>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar

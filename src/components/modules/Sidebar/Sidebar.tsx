'use client'

import { ButtonLink } from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import { cn } from '@/utils'
import { usePathname } from 'next/navigation'
import { listNavigationTablet, listNavigationMobile } from './constants'

const Sidebar = () => {
  const pathName = usePathname()

  return (
    <aside className="py-1 md:py-2.5 xl:p-3 bg-white md:rounded-layout left-0 right-0 bottom-0 fixed md:relative xl:w-[285px] shadow-top">
      <Logo className="hidden md:inline-block" />
      {/* list navigation tablet */}
      <ul className="space-y-1 items-center justify-between px-2 sm:px-5 md:px-0 hidden md:block">
        {listNavigationTablet.map((itemNav) => {
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
                  <Icon fontSize={itemNav.iconSize} />
                </span>
                <span className="hidden xl:inline-block">{itemNav.name}</span>
              </ButtonLink>
            </li>
          )
        })}
      </ul>
      {/* list navigation mobile */}
      <ul className="space-y-1 items-center justify-between px-2 sm:px-5 md:px-0 flex md:hidden">
        {listNavigationMobile.map((itemNav) => {
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
                  <Icon fontSize={itemNav.iconSize} />
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

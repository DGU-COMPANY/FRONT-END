import { CgProfile } from 'react-icons/cg'
import {
  AiOutlineHeart,
  AiOutlineHistory,
  AiOutlineSetting,
} from 'react-icons/ai'
import { ROUTES } from '@/utils'
import React from 'react'

interface IMenuItems {
  key: number
  name: string
  href: string
  icon: React.ReactNode
}

export const menuItems: IMenuItems[] = [
  {
    key: 1,
    name: 'Profile',
    href: ROUTES.PROFILE,
    icon: React.createElement(CgProfile),
  },
  {
    key: 2,
    name: 'Like',
    href: ROUTES.LIKE,
    icon: React.createElement(AiOutlineHeart),
  },
  {
    key: 3,
    name: 'History',
    href: ROUTES.HISTORY,
    icon: React.createElement(AiOutlineHistory),
  },
  {
    key: 4,
    name: 'Setting',
    href: ROUTES.SETTING,
    icon: React.createElement(AiOutlineSetting),
  },
]

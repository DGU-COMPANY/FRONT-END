import { ROUTES } from '@/utils'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineHistory, MdOutlineFavoriteBorder } from 'react-icons/md'
import { FaGripfire } from 'react-icons/fa'
import { SlSettings, SlPeople } from 'react-icons/sl'

export const listNavigation = [
  {
    key: 0,
    name: 'Home',
    href: ROUTES.HOME,
    icon: AiOutlineHome,
    iconSize: '26px',
  },
  {
    key: 1,
    name: 'Trending',
    href: ROUTES.TRENDING,
    icon: FaGripfire,
    iconSize: '26px',
  },
  {
    key: 2,
    name: 'Setting',
    href: ROUTES.SETTING,
    icon: SlSettings,
    iconSize: '24px',
  },
  {
    key: 3,
    name: 'Favorites',
    href: ROUTES.FAVORITES,
    icon: MdOutlineFavoriteBorder,
    iconSize: '24px',
  },
  {
    key: 4,
    name: 'History',
    href: ROUTES.HISTORY,
    icon: MdOutlineHistory,
    iconSize: '24px',
  },
  {
    key: 5,
    name: 'Follow',
    href: ROUTES.FOLLOW,
    icon: SlPeople,
    iconSize: '24px',
  },
]

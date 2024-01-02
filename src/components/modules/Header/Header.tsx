import { Button } from '@/components/common/Button'
import { FiSun } from 'react-icons/fi'
import { BiMessageRounded, BiVideoPlus } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { MenuProfile } from '@/components/common/Menu'
import InputSearch from '@/components/common/Input/InputSearch'
import Logo from '@/components/common/Logo'
import { SwitchTypeVideo } from '@/components/common/Switch'

const Header = () => {
  return (
    <header className="bg-header md:bg-none md:bg-white px-5 md:pl-5 md:pr-1 py-3 md:rounded-layout w-full">
      <div className="flex items-center justify-between gap-x-4">
        <Logo className="inline-block md:hidden px-2" />
        <SwitchTypeVideo />
        <InputSearch />
        <div className="items-center hidden md:flex flex-shrink-0">
          <div className="items-center space-x-4 flex">
            <Button className="p-2 bg-whisperGray rounded-full">
              <FiSun fontSize="22px" />
            </Button>
            <Button className="p-2 bg-whisperGray rounded-full">
              <BiMessageRounded fontSize="25px" />
            </Button>
            <Button className="p-2 bg-whisperGray rounded-full">
              <IoMdNotificationsOutline fontSize="25px" />
            </Button>
            <Button
              className="bg-whisperGray rounded-5 hidden lg:flex"
              leftIcon={<BiVideoPlus fontSize="25px" />}
            >
              Create video
            </Button>
          </div>
          <MenuProfile>
            <Image className="w-8 object-cover" src={logo} alt="logo" />
          </MenuProfile>
        </div>
      </div>
    </header>
  )
}

export default Header

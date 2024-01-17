import { BsSearch } from 'react-icons/bs'
import { Button } from '../Button'
import { cn } from '@/utils'
import Input from './Input'

interface IInputSearchProps {
  className?: string
}

const InputSearch = ({ className }: IInputSearchProps) => {
  return (
    <>
      <div
        className={cn(
          'w-full lg:w-1/2 bg-whisperGray rounded-5 items-center px-3 hidden md:flex',
          className,
        )}
      >
        <Button className="px-3">
          <BsSearch />
        </Button>
        <Input placeholder="Search" className="w-full hidden md:block px-0" />
      </div>
      <Button className="px-2 md:hidden">
        <BsSearch fontSize="20px" />
      </Button>
    </>
  )
}

export default InputSearch

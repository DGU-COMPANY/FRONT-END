import { BsSearch } from 'react-icons/bs'
import { Button } from '../Button'
import { cn } from '@/utils'

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
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-xl outline-none bg-transparent py-2.5 hidden md:block"
        />
      </div>
      <Button className="px-3 md:hidden">
        <BsSearch fontSize="24px" />
      </Button>
    </>
  )
}

export default InputSearch

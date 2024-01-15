import Header from '@/components/modules/Header'
import Sidebar from '@/components/modules/Sidebar'

interface IHomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: IHomeLayoutProps) => {
  return (
    <main className="flex md:bg-lightGray p-0 md:p-1.25 gap-x-1.25 h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </main>
  )
}

export default HomeLayout

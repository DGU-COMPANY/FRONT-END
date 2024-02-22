'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

interface IHomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: IHomeLayoutProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return <>{children}</>
}

export default HomeLayout

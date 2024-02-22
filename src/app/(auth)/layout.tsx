'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '@/app/styles/animateAuth.css'

interface IAuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return <>{children}</>
}

export default AuthLayout

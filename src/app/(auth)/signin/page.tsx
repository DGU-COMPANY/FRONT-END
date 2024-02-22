import { SignInForm } from '@/components/modules/AuthForm'
import { AuthSlide } from '@/components/modules/AuthSlide'

const SignInPage = () => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-[#363636] md:bg-[#c3c3c3f5] flex justify-center items-center">
      <div className="max-w-[600px] lg:max-w-none w-full lg:w-[1056px] h-[700px] rounded-2xl bg-white dark:bg-rangoonGreen flex justify-between p-5 sm:p-8 md:px-10 overflow-hidden">
        <SignInForm />
        <AuthSlide />
      </div>
    </div>
  )
}

export default SignInPage

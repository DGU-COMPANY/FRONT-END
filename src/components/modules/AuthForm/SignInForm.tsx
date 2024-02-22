'use client'

import { Button, ButtonLink } from '@/components/common/Button'
import { Form } from '@/components/common/Form'
import InputAnimate from '@/components/common/Input/InputAnimate'
import Logo from '@/components/common/Logo'
import { FcGoogle } from 'react-icons/fc'

const SignInForm = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="w-full lg:w-[470px] flex flex-col justify-center rounded-2xl"
    >
      <div className="mb-5">
        <Logo />
      </div>
      <div className="text-black dark:text-white mb-7">
        <h1 className="font-bold text-[32px] mb-5">Welcome Back!</h1>
        <p className="text-sm font-semibold">
          Please enter sign in detail below
        </p>
      </div>
      <div className="mb-5">
        <Form onSubmit={() => {}}>
          <div className="space-y-8 mb-4">
            <InputAnimate
              placeholderAnimation="Email"
              inputClassName="border border-white"
              errorMessage="this is errror"
            />
            <InputAnimate
              placeholderAnimation="password"
              inputClassName="border border-white"
              errorMessage="this is errror"
            />
            <ButtonLink
              href="/"
              className="text-sm text-right font-medium text-black dark:text-white px-2 py-1 block"
            >
              Forget password?
            </ButtonLink>
          </div>
          <Button className="w-full font-bold text-xl text-white bg-black border-2 dark:bg-rangoonGreen dark:border-silverChalice hover:bg-iridium dark:hover:bg-iridium px-5 py-3 rounded-xl">
            Sign in
          </Button>
        </Form>
      </div>
      <div className="flex items-center justify-around pb-5">
        <div className="bg-cottonSeed h-[1px] w-[30%]"></div>
        <div className="text-monsoon">or continute</div>
        <div className="bg-cottonSeed h-[1px] w-[30%]"></div>
      </div>
      <Button
        className="border-cottonSeed dark:border-silverChalice border-2 rounded-xl w-full bg-white dark:bg-rangoonGreen dark:hover:bg-iridium px-5 py-3 flex flex-row justify-center items-center text-black dark:text-white text-xl font-bold"
        leftIcon={<FcGoogle className="text-2xl mr-2" />}
      >
        Sign in with Google
      </Button>
      <div className="flex justify-center py-3">
        <p className="font-medium pr-2 text-monsoon text-sm">
          Don’t have on account?
        </p>
        <ButtonLink
          href="signup"
          className="font-bold mr-2 text-sm text-black dark:text-white p-0"
        >
          Sign up
        </ButtonLink>
      </div>
    </div>
  )
}

export default SignInForm

'use client'

import { useEffect, useState } from 'react'
import { listSlideAuth } from './constants'
import Image from 'next/image'
import { Button } from '@/components/common/Button'
import { cn } from '~/src/utils'

const AuthSlide = () => {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(
    listSlideAuth[0].key,
  )

  useEffect(() => {
    const handleChangeSlide = setInterval(() => {
      setCurrentIndexSlide((prevSlide) => {
        const nextSlideIndex =
          (listSlideAuth.findIndex((slide) => slide.key === prevSlide) + 1) %
          listSlideAuth.length
        return listSlideAuth[nextSlideIndex].key
      })
    }, 5000)

    return () => {
      clearInterval(handleChangeSlide)
    }
  }, [currentIndexSlide])

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      className="w-[470px] bg-black dark:bg-charcoalGray rounded-xl rounded-br-[50px] hidden lg:block"
    >
      {listSlideAuth.map((itemSlide) => {
        return (
          itemSlide.key === currentIndexSlide && (
            <div key={itemSlide.key}>
              <div className="h-[450px] relative">
                {itemSlide.images?.map((image) => (
                  <Image
                    key={image.alt}
                    className={cn('absolute', image.animation)}
                    width={image.width}
                    height={image.height}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center mb-10">
                  <div className="w-[370px] animate-fadeIn">
                    <h1 className="text-white text-[32px] font-bold text-center pb-5">
                      {itemSlide.title}
                    </h1>
                    <p className="text-white font-bold text-center">
                      {itemSlide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      })}
      <div className="w-full flex justify-center">
        <div className="bg-iridium/[0.8] w-[110px] h-[30px] rounded-xl flex px-2 items-center justify-around">
          {listSlideAuth.map((slideItem) => {
            return (
              <Button
                key={slideItem.key}
                className={cn(
                  'w-5 h-5 p-0 rounded-xl flex items-center justify-center hover:cursor-pointer',
                  {
                    'bg-lightGray': slideItem.key === currentIndexSlide,
                  },
                )}
                onClick={() => {
                  setCurrentIndexSlide(slideItem.key)
                }}
              >
                <div
                  className={cn('w-2.5 h-2.5 rounded-xl shrink-0', {
                    'bg-artyClickOceanGreen':
                      slideItem.key === currentIndexSlide,
                    'bg-lightGray': slideItem.key !== currentIndexSlide,
                  })}
                ></div>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AuthSlide

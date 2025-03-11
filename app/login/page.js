import SignInPage from '@/components/SignInPage/SignInPage'
import React from 'react'
import registerImage from "@/public/register.png"
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex justify-center'>
      <div className='my-5 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-[40%]'>

          <SignInPage></SignInPage>
        </div>
        <div className='w-full lg:w-[60%]'>
          <Image className='h-[200px] rounded-none lg:rounded-e-lg lg:h-[565px] object-cover' src={registerImage} alt='register image' quality={50} placeholder='blur' />
        </div>
      </div>
    </div>
  )
}

import RegisterPage from '@/components/RegisterPage/RegisterPage'
import Image from 'next/image'
import React from 'react'
import registerImage from "@/public/register.png"

export default function page() {
  return (
    <div className='flex justify-center'>
          <div className='my-5 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[40%]'>
    
              <RegisterPage></RegisterPage>
            </div>
            <div className='w-full lg:w-[60%]'>
              <Image className='h-[200px] rounded-none lg:rounded-e-lg lg:h-[565px] object-cover' src={registerImage} alt='register image' quality={50} placeholder='blur' />
            </div>
          </div>
        </div>
  )
}

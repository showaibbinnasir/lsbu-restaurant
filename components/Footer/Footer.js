import Image from 'next/image'
import React from 'react'
import icon from "@/public/location.png"
export default function Footer() {
  return (
    <div>
        <div className='bg-[#D9D9D9] flex flex-col justify-evenly lg:flex-row p-5 items-center gap-5'>
            <div>
                <h1 className='text-2xl lg:text-4xl uppercase font-semibold'>Contact:0123456789</h1>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Address: Elephant & castle</h1>
                <div className='flex gap-4 items-center bg-green-500 p-2 my-5 rounded-lg'>
                    <Image src={icon} alt=''/>
                    <h1>Get Location</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import banner from "@/public/banner.png"
import success from "@/public/success.png"
import Image from 'next/image'

export default function ReservationDetails() {
    const searchParams = useSearchParams()
    const name = searchParams.get("name")
    const email = searchParams.get("email")
    const date = searchParams.get("selectedDate")
    const time = searchParams.get("bookingTime")
    const table = searchParams.get("table")
    const handlePrint = () => {
        window.print()
    }
    return (
        <div>
            <div>
                <div className='w-full'>
                    <Image className='w-[100%] h-[250px] object-cover' src={banner} alt='banner' />
                </div>
            </div>
            <div>
                {
                    name != null ?
                        <div>
                            <div className='flex justify-center my-10'>
                                <Image src={success} alt='' />
                            </div>
                            <div>
                                <h1 className='text-center text-2xl'>Congrations</h1>
                                <h1 className='text-center text-4xl font-semibold'>Mr. {name}</h1>
                                <h1 className='text-center text-2xl font-semibold'>Welcome to LSBU Restaurant</h1>
                                <h1 className='text-center text-xl mt-5 text-green-500'>{table} table has been booked for
                                    <br />
                                    {date} at {time}.
                                </h1>
                                <h1 className='text-center text-xl my-5 bg-warning-400 p-2'>NB: Please keep this reciept with you and dont forget to bring this to counter.</h1>
                            </div>
                            <div className='flex justify-center mb-5'>
                                <button onClick={handlePrint} className='text-2xl bg-green-500 px-5 py-2 rounded-lg text-white hover:bg-green-300'>
                                    Print Page 🖨️
                                </button>
                            </div>
                        </div> :
                        <div>
                            <div className='text-3xl uppercase font-semibold text-center my-10'>
                                <h1>There is nothing to show</h1>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

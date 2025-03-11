import React from 'react'
import glass from "@/public/glass.png"
import money from "@/public/money.png"
import food from "@/public/food.png"
import Image from 'next/image'
import ReserveForm from '@/components/ReserveForm/ReserveForm'
import getBooks from '@/lib/getBooks'

export default async function About() {
  
  const bookingData = await getBooks()
  const reservedBookings = bookingData.reduce((acc, booking) => {
    const { selectedDate, bookingTime } = booking;
  
    if (selectedDate && bookingTime) {
      if (!acc[selectedDate]) {
        acc[selectedDate] = [];
      }
      if (!acc[selectedDate].includes(bookingTime)) {
        acc[selectedDate].push(bookingTime);
      }
    }
  
    return acc;
  }, {});

  const types = [
    {
      title: "Type of Cuisine",
      price: "british",
      image: glass
    },
    {
      title: "Average Price",
      price: "£25",
      image: money
    },
    {
      title: "Diatry Options",
      price: "Glutten free",
      image: food
    }
  ]
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around my-10'>
      <div>
        <div className='flex justify-center'>
          <div className='flex justify-between gap-32 my-10'>
            <div>
              <h5 className='text-2xl font-semibold uppercase'>Menu Foods</h5>
              <h1 className='text-lg'>2 Photos</h1>
            </div>
            <div>
              <h5 className='text-2xl font-semibold uppercase'>Food Photos</h5>
              <h1 className='text-lg'>10 Photos</h1>
            </div>
          </div>
        </div>
        <div className='my-10'>
          {
            types.map((type, i) => <div className='flex flex-col gap-5 items-center' key={i}>
              <div className='flex gap-5 items-center'>
                <Image src={type.image} alt='image' width={50} height={50} />
                <div>
                  <h1 className='text-2xl font-semibold uppercase'>{type.title}</h1>
                  <h1>{type.price}</h1>

                </div>
              </div>
              <hr className='bg-black h-1 w-full' />
            </div>)
          }
        </div>
      </div>
      <div>
        <div>
          <ReserveForm reservedBookings={reservedBookings}></ReserveForm>
        </div>

      </div>
    </div>
  )
}

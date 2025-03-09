'use client'
import { format } from 'date-fns'
import { useState } from 'react'
import React from 'react'
import './style.css'
import { Button, DatePicker, Input, Label, Popover, PopoverAction, PopoverContent } from 'keep-react'
import { Calendar } from 'phosphor-react'
import { useRouter } from 'next/navigation'



export default function ReserveForm({ reservedBookings }) {
  const router = useRouter()
  const [date, setDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState("");
  // const reservedBookings = {
  //   "Wed Mar 26 2025": ["10:00", "14:00", "16:00"],
  //   "Thu Mar 20 2025": ["9:00", "12:00"],
  // };
  console.log(reservedBookings);
  const allTimes = Array.from({ length: 11 }, (_, i) => `${8 + i}:00`);
  const availableTimes = date.toDateString()
    ? allTimes.filter((time) => !reservedBookings[date.toDateString()]?.includes(time))
    : allTimes;

  const handleSubmitButton = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.booker.value;
    const email = form.email.value;
    const phone = form.number.value;
    const table = form.table.value;
    const selectedDate = date.toDateString();
    const bookingTime = selectedTime;
    const bookingData = { name, email, phone, table, selectedDate, bookingTime }
    try {
      const response = await fetch("/api/postBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      console.log(result);
      router.push(`/reservation?name=${name}&email=${email}&selectedDate=${selectedDate}&bookingTime=${bookingTime}&table=${table}`)
    } catch (error) {
      console.error("Error submitting booking:", error);
    }



  }


  return (
    <div>
      <div className='reserveForm w-[350px] lg:w-[750px] rounded-2xl p-5'>
        <div>
          <h1 className='uppercase text-2xl font-semibold text-white'>Book a table</h1>
          <h1 className='uppercase text-white'>Book for free</h1>
          <div className=' mt-5'>
            <form onSubmit={handleSubmitButton} className='flex flex-col gap-5'>
              <fieldset className=" space-y-1">
                <Label className='text-white' htmlFor="name">Enter Name</Label>
                <Input id="name" placeholder="Enter name" required name="booker" type="text" />
              </fieldset>
              <fieldset className=" space-y-1">
                <Label className='text-white' htmlFor="mail">Enter Email</Label>
                <Input id="mail" placeholder="Enter your email" required name='email' type="email" />
              </fieldset>
              <fieldset className=" space-y-1">
                <Label className='text-white' htmlFor="name">Enter Phone</Label>
                <Input id="name" placeholder="Enter Phone number" required name='number' type="text" />
              </fieldset>
              <fieldset>
                <Label className='text-white' htmlFor="name">Pick your time</Label>
                <br />
                <Popover>
                  <PopoverAction asChild>
                    <Button
                      color="secondary"
                      size="lg"
                      className="w-full justify-start gap-2.5 border border-metal-100 text-body-4" variant="outline">
                      <Calendar size={20} className="text-white dark:text-white" />
                      {date ? format(date ?? new Date(), 'PPP') : <span className='text-white'>Select Your Date</span>}
                    </Button>
                  </PopoverAction>
                  <PopoverContent align="start" className="max-w-min border-0">
                    <DatePicker numberOfMonths={2} mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
                  </PopoverContent>
                </Popover>
              </fieldset>
              <label >
                <h1 className='text-white'>Select Time:</h1>
                <select
                  className='p-3 w-full rounded-lg'
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  disabled={!date}

                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>
              <fieldset className=" space-y-1">
                <Label className='text-white' htmlFor="name">Select members</Label>
                <Input id="name" name='table' required placeholder="How many tables do you need?" type="number" />
              </fieldset>
              <div className='flex justify-center'>
                <Button className='bg-green-500' type='submit'>Book your table now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

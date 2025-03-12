'use client'
import { useQuery } from '@tanstack/react-query'
import { Avatar, AvatarFallback, AvatarImage, Button, Spinner, toast } from 'keep-react'
import React, { useState } from 'react'

export default function ManagerBookings() {
    const { data: data = [], refetch, isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch('/api/getBookDetails')
            const data = await res.json();
            return data;
        }
    })
    const [isDltLoading, setIsDelLoading] = useState(false)
    const handleDeleteButton = id => {
        setIsDelLoading(true)
        fetch('/api/deleteBookings', {
            method: "DELETE",
            body: JSON.stringify({
                'user_id': id
            })
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Deleted Successfully")
                setIsDelLoading(false)
                refetch()
            })
    }
    
    return (
        <div className='my-5'>
            {
                isLoading ?
                
                    <div className='flex justify-center'>
                        <div>
                            <Spinner/>
                        </div>
                    </div> :
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        {
                            data?.map((book, i) => <div className="bg-[#D9D9D9] rounded-lg p-5" key={i}>
                                <div className="flex flex-col lg:flex-row items-center gap-2">
                                    <div>
                                        <Avatar className="">
                                            <AvatarImage src="" />
                                            <AvatarFallback>{book.name.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div>
                                        <h1 className="font-[family-name:var(--font-sigmar)] text-start lg:text-center text-2xl">{book.name}</h1>

                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <div>
                                        <h1><span className="uppercase font-bold">Phone number:</span> {book.phone}</h1>
                                        <h1><span className="uppercase font-bold">Email:</span> {book.email}</h1>
                                        <h1><span className="uppercase font-bold">Booking date:</span> {book.selectedDate}</h1>
                                        <h1><span className="uppercase font-bold">Booking time:</span> {book.bookingTime}</h1>
                                        <h1><span className="uppercase font-bold">Members:</span> {book.table}</h1>
                                    </div>
                                </div>
                                <div>
                                    {
                                        isDltLoading ?

                                            <Button className='bg-orange-400 my-2'><Spinner /></Button> :
                                            <Button onClick={() => handleDeleteButton(book._id)} className='bg-red-500 my-2'>Delete booking</Button>
                                    }
                                </div>
                            </div>)
                        }
                    </div> 
            }
        </div>
    )
}

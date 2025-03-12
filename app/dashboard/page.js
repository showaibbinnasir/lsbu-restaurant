import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import SignOutButton from '@/components/SignOutButton/SignOutButton'
import { Tabs, TabsContent, TabsItem, TabsList } from 'keep-react'
import ManagerBookings from '@/components/ManagerBookings/ManagerBookings'
import getBooks from '@/lib/getBooks'

export default async function page() {
  const session = await getServerSession(authOptions)
  const data = await getBooks()
  return (
    <div className='my-5'>
      <div>
        <div className='text-center'>
          <h1 className='font-[family-name:var(--font-sigmar)] text-2xl lg:text-4xl'>Hello, {session?.user?.name}</h1>
        </div>
        <div className='my-5'>
          <Tabs defaultValue="item-1" variant='underline' className="mx-auto max-w-xl">
            <TabsList>
              <TabsItem value="item-1">User Details</TabsItem>
              <TabsItem value="item-2">Manage bookings</TabsItem>
            </TabsList>
            <TabsContent value="item-1">
              <div className='my-5'>
                <h1 className='font-[family-name:var(--font-sigmar)] text-2xl'> {session?.user?.name}</h1>
                <h1 className='font-[family-name:var(--font-sigmar)] text-lg'> {session?.user?.email}</h1>
              </div>
            </TabsContent>
            <TabsContent value="item-2">
              <ManagerBookings data={data}></ManagerBookings>
            </TabsContent>

          </Tabs>
        </div>
        <div className='flex justify-center'>
          <SignOutButton></SignOutButton>
        </div>
      </div>
    </div>
  )
}

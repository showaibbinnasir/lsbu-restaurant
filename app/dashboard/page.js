import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import SignOutButton from '@/components/SignOutButton/SignOutButton'

export default async function page() {
    const session = await getServerSession(authOptions) 
  return (
    <div className='my-5'>
        <div>
            <h1 className='font-[family-name:var(--font-sigmar)] text-2xl'>Hello, {session?.user?.name}</h1>
            <h1 className='font-[family-name:var(--font-sigmar)] text-lg'> {session?.user?.email}</h1>
            <SignOutButton></SignOutButton>
        </div>
    </div>
  )
}

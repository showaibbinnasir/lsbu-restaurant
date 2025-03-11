'use client'
import { Button } from 'keep-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton() {
    return (
        <div>
            <div onClick={() => signOut()}>
                <Button className='bg-red-500'>LogOut</Button>
            </div>
        </div>
    )
}

'use client'
import { Button, Input, Label } from 'keep-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  return (
    <div className='bg-[#D9D9D9] rounded-none lg:rounded-s-lg p-5 h-[350px] lg:h-[565px] flex items-center justify-center'>
      <div>
        <h1 className='font-[family-name:var(--font-sigmar)] text-center mt-5 text-4xl'>Welcome to Login Page</h1>
        <h1 className='font-[family-name:var(--font-sigmar)] text-center my-2 text-xl'>Login with your email and password</h1>
        <div>
          <form>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="name">Enter Email</Label>
              <Input id="name" placeholder="Enter Email" type="email" />
            </fieldset>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="name">Enter Password</Label>
              <Input id="name" placeholder="Enter name" type="password" />
            </fieldset>
            {
              error && <div className='flex my-2'>
                <div className=' text-white bg-red-500 px-5 py-1'>
                  <h1>Error exists</h1>
                </div>
              </div>
            }
            <div>
              <h1>Havent created account? <Link className='text-blue-400' href='/registration'><span>Register Now</span></Link></h1>
            </div>
            <div>
              <Button className='bg-green-500' type='submit'>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

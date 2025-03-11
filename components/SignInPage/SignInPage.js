'use client'
import { Button, Input, Label, Spinner, toast } from 'keep-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const handleLogin = async e => {
    e.preventDefault()
    setIsLoading(true)
    if (!email || !password) {
      setIsLoading(false)
      setError("All fields are required")
      return
    } else {
      setError("")
    }
    try {
      const res = await signIn('credentials', {
        email, password, redirect: false
      })

      if (res.error) {
        setIsLoading(false)
        setError("Invalid Credentials")
        return
      }
      setError("")
      setIsLoading(false)
      toast.success("Logged in successfully")
      router.replace('/')
    } catch (error) {

      toast.error("Something went wrong")
    }
  }
  return (
    <div className='bg-[#D9D9D9] rounded-none lg:rounded-s-lg p-5 h-[350px] lg:h-[565px] flex items-center justify-center'>
      <div>
        <h1 className='font-[family-name:var(--font-sigmar)] text-center mt-5 text-4xl'>Welcome to Login Page</h1>
        <h1 className='font-[family-name:var(--font-sigmar)] text-center my-2 text-xl'>Login with your email and password</h1>
        <div>
          <form onSubmit={handleLogin}>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="email">Enter Email</Label>
              <Input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Email" type="email" />
            </fieldset>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="password">Enter Password</Label>
              <Input onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter Password" type="password" />
            </fieldset>
            {
              error && <div className='flex my-2'>
                <div className=' text-white bg-red-500 px-5 py-1'>
                  <h1>{error}</h1>
                </div>
              </div>
            }
            <div>
              <h1>Havent created account? <Link className='text-blue-400' href='/registration'><span>Register Now</span></Link></h1>
            </div>
            <div className='flex'>
              {
                isLoading ?
                  <div>
                    <Button className='bg-green-500'><Spinner /></Button>
                  </div> :
                  <div>
                    <Button className='bg-green-500' type='submit'>Sign In</Button>
                  </div>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

'use client'
import { Button, Input, Label, Spinner, toast } from 'keep-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async e => {
    e.preventDefault()
    setIsLoading(true)
    if (!name || !email || !password) {
      setError("All field are required")
      setIsLoading(false)
      return
    } else {
      setError("")
    }
    const data = { name, email, password }
    try {
      const resExistUser = await fetch("/api/userExist", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const { user } = await resExistUser.json()

      if (user) {
        setError("User already exists")
        toast.error("User already exist")
        setIsLoading(false)
        return
      }
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        const form = e.target;
        form.reset()
        toast.success("Registered Successfully")
        setIsLoading(false)
        router.push('/login')
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }
  return (
    <div className='bg-[#D9D9D9] rounded-none lg:rounded-s-lg p-5 h-[500px] lg:h-[565px] flex items-center justify-center'>
      <div>
        <h1 className='font-[family-name:var(--font-sigmar)] text-center mt-5 text-4xl'>Welcome to Registration Page</h1>
        <h1 className='font-[family-name:var(--font-sigmar)] text-center my-2 text-xl'>Register with your email, username and password</h1>
        <div>
          <form onSubmit={handleRegister}>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="name">Enter Your Name</Label>
              <Input onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Name" type="text" />
            </fieldset>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="name">Enter Email</Label>
              <Input onChange={(e) => setEmail(e.target.value)} id="name" placeholder="Enter Email" type="email" />
            </fieldset>
            <fieldset className="w-[300px] lg:w-[400px] space-y-1">
              <Label htmlFor="name">Enter Password</Label>
              <Input onChange={(e) => setPassword(e.target.value)} id="name" placeholder="Enter Password" type="password" />
            </fieldset>
            {
              error && <div className='flex my-2'>
                <div className=' text-white bg-red-500 px-5 py-1'>
                  <h1>{error}</h1>
                </div>
              </div>
            }
            <div>
              <h1>Already have account? <Link className='text-blue-400' href='/login'><span>Login Now</span></Link></h1>
            </div>
            {
              isLoading ?
                <div>
                  <Button className='bg-green-500'><Spinner /></Button>
                </div> :
                <div>
                  <Button className='bg-green-500' type='submit'>Register</Button>
                </div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function NavigationBar() {
    const router = useRouter()
    const { data: session } = useSession()
    const pathname = usePathname()
    return (
        <div className='p-10'>
            <h1 className="font-[family-name:var(--font-sigmar)] text-4xl">LSBU Restaurant</h1>
            {
                session?.user == null ?
                    <div className='flex my-5'>
                        <Link href='/login'><h1 className='text-white bg-green-500 rounded-lg px-5 py-2'>Sign in</h1></Link>
                    </div> :
                    <div>
                        <div className='flex my-5'>
                            <Link href='/dashboard'><h1 className='text-white bg-green-500 rounded-lg px-5 py-2'>{session?.user?.name}</h1></Link>
                        </div>
                    </div>
            }
            <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-14 text-center items-center gap-5 text-2xl my-10'>
                <Link href="/" className={`text-black p-[12px] rounded-lg transition ${pathname === "/"
                    ? " font-bold border-b-2 border-black"
                    : "hover:text-green-600"
                    }`}><h1>Home</h1></Link>
                <Link href="/about" className={`text-black p-[12px] rounded-lg transition ${pathname === "/about"
                    ? " font-bold border-b-2 border-black"
                    : "hover:text-green-600"
                    }`} >Booking</Link>
                <Link href="/menu" className={`text-black p-[12px] rounded-lg transition ${pathname === "/menu"
                    ? " font-bold border-b-2 border-black"
                    : "hover:text-green-600"
                    }`}><h1>Menu</h1></Link>
                <Link href="/reviews" className={`text-black p-[12px] rounded-lg transition ${pathname === "/reviews"
                    ? " font-bold border-b-2 border-black"
                    : "hover:text-green-600"
                    }`}><h1>Reviews</h1></Link>

            </div>
        </div>
    )
}

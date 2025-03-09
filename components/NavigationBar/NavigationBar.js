'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavigationBar() {
    const pathname = usePathname()
    return (
        <div className='p-10'>
            <h1 className="font-[family-name:var(--font-sigmar)] text-4xl">LSBU Restaurant</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-14 text-center items-center gap-5 text-2xl my-10'>
                <Link href="/" className={`text-black p-[12px] rounded-lg transition ${pathname === "/"
                    ? " font-bold border-b-2 border-black"
                    : "hover:text-green-600"
                    }`}><h1>Home</h1></Link>
                <Link href="/about" className={`text-black p-[12px] rounded-lg transition ${pathname === "/about"
                    ? " font-bold border-b-2 border-black"
                    : "hover:text-green-600"
                    }`}><h1>Bookings</h1></Link>
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

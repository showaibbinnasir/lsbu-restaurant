import getBooks from "@/lib/getBooks";
import Image from "next/image";
import banner from "@/public/banner.png"
import { Avatar, AvatarFallback, AvatarImage } from "keep-react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const data = await getBooks()
  const session = await getServerSession(authOptions)
  return (
    <div className="my-10">
      <div>
        <div>
          <div className="">
            {
              session?.user && <h1 className="text-center">Hello, {session?.user?.name}</h1>
            }
            <h1 className="text-xl uppercase font-semibold text-center text-black">Welcome to</h1>
            <h1 className="text-[50px] font-[family-name:var(--font-sigmar)] uppercase text-center text-black" >LSBU RESTAURANT</h1>
          </div>
          <div className=' w-full'>
            <Image className='w-[100%]  h-[250px] object-cover rounded-lg blur-[2px]' placeholder="blur" src={banner} alt='banner' />
          </div>
        </div>
        <div>
          <div className="flex justify-center my-10">
            <h1 className="text-2xl font-semibold border-b-2 border-black">All Bookings: </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
              </div>)
            }
          </div>
        </div>
      </div>
    </div >
  );
}

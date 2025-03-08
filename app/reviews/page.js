import React from 'react'
import reviewUser from "@/public/user.png"
import star from "@/public/starIcon.png"
import Image from 'next/image'

export default function Reviews() {
  return (
    <div className='my-5'>
      <div className='bg-[#D9D9D9] p-5 flex flex-col lg:flex-row gap-5'>
        <div className='flex justify-center lg:justify-start'>
          <Image src={reviewUser} className=' w-[350px] object-cover' alt='' />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <h1 className='text-2xl font-semibold uppercase'>Darren watkins</h1>
            <div className='flex gap-2'>
              <Image className='w-[20px] h-[20px]' src={star} alt='star' />
              <Image className='w-[20px] h-[20px]' src={star} alt='star' />
              <Image className='w-[20px] h-[20px]' src={star} alt='star' />
              <Image className='w-[20px] h-[20px]' src={star} alt='star' />
              <Image className='w-[20px] h-[20px]' src={star} alt='star' />
            </div>
          </div>
          <div>
            <h1>If you're looking for a cozy, welcoming restaurant with incredible food and top-notch service, The LSBU Resturaunt  the place to be. From the moment you step in, the warm ambiance and soft lighting create the perfect setting for a relaxed dining experience.
              The menu offers a great variety, catering to all tastes. I tried their signature truffle pasta, and it was absolutely divine—creamy, rich, and perfectly cooked. The grilled salmon was another standout, cooked to perfection with a flavorful herb crust. And don’t even get me started on the desserts—the molten lava cake was pure indulgence!
              Service was impeccable. The staff was friendly, attentive, and knowledgeable about the menu, offering great recommendations. Our food arrived promptly, and we never felt rushed, even on a busy evening.
              Overall, The Olive Garden Bistro is a must-visit for food lovers. Whether it’s a date night, family gathering, or casual dinner with friends, this restaurant delivers an exceptional experience every time. Highly recommended!</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

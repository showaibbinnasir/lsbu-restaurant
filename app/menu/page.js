import React from 'react'
import itemOne from "@/public/itemOne.png"
import itemTwo from "@/public/itemTwo.png"
import Image from 'next/image'
export default function Menu() {

    const items = [
        {
            title: "grilled salmon",
            price: 15.50,
            description: "Succulent, fresh salmon fillet, expertly grilled to perfection, with a crispy, golden crust and a tender, flaky interior. Served with a zesty lemon butter sauce and a side of roasted vegetables or creamy mashed potatoes. A healthy and flavorful choice!",
            image: itemOne
        },
        {
            title: "Creamy Pasta",
            price: 10,
            description: "A rich and velvety pasta dish tossed in a luscious, house-made cream sauce. Choose from classic Alfredo, garlic Parmesan, or a light herb-infused cream. Served with your choice of pasta and topped with grated cheese, fresh herbs, and a side of garlic bread. Add grilled chicken, shrimp, or mushrooms for the perfect indulgence!",
            image: itemTwo
        },
        {
            title: "Creamy Pasta",
            price: 10,
            description: "A rich and velvety pasta dish tossed in a luscious, house-made cream sauce. Choose from classic Alfredo, garlic Parmesan, or a light herb-infused cream. Served with your choice of pasta and topped with grated cheese, fresh herbs, and a side of garlic bread. Add grilled chicken, shrimp, or mushrooms for the perfect indulgence!",
            image: itemTwo
        },
        {
            title: "grilled salmon",
            price: 15.50,
            description: "Succulent, fresh salmon fillet, expertly grilled to perfection, with a crispy, golden crust and a tender, flaky interior. Served with a zesty lemon butter sauce and a side of roasted vegetables or creamy mashed potatoes. A healthy and flavorful choice!",
            image: itemOne
        }

    ]
    return (
        <div>
            <div className='flex justify-center'>
                <div className='bg-[#800C0C] w-[550px] rounded-lg p-5 text-white'>
                    <h1 className='text-center text-2xl font-[family-name:var(--font-sigmar)]'>Main Course</h1>
                </div>
            </div>
            <div className='my-10'>
                <div className='bg-[#D9D9D9] p-10 flex justify-center rounded-lg'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            items.map((item, i) => <div className='flex flex-col lg:flex-row items-center gap-5 my-5 ' key={i}>
                                <Image placeholder='blur' src={item.image} alt={item.title} className=' w-[250px] h-[300px] object-cover rounded-4xl' />
                                <div>
                                    <h1 className='text-center uppercase text-2xl font-bold'>{item.title}</h1>
                                    <h1 className=' text-2xl font-bold text-center'>£{item.price}</h1>
                                    <h1 className='lg:w-[550px]'>{item.description}</h1>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

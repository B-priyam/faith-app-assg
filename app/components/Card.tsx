import React from 'react'
import { data } from '@/Data/Provideddata'
import { TiMessages } from "react-icons/ti";
import { RiYoutubeLine } from "react-icons/ri";

const Card = () => {
  const f = Intl.NumberFormat("en-us",{
    currency:data.course.fee.currency,
    style:"currency"
  }
  )
  return (
    <div  className='bg-purple-100 h-80 w-96 text-black absolute top-2/4 right-20'>
      <div className=' relative left-5 top-5'>
        <div>

        <p className='font-semibold'>Course fees</p>
        <p className='font-serif font-bold text-2xl'>{f.format(Number(data.course.fee.amount))}</p>
      </div>
      <div className='font-sans font-semibold'>
        <p className='font-bold mt-8 text-lg'>What's included:</p>
        <div className='flex flex-col text-sm'>
           <p className='flex flex-row gap-2'><RiYoutubeLine className='mt-1 text-lg' /> {data?.course?.inclusions?.on_demand_videos} on-demand videos</p>
           <p className='flex flex-row gap-2'><RiYoutubeLine className='mt-1 text-lg'/> 2 livestream sessions</p>
           <p className='flex flex-row gap-2'><TiMessages className='mt-1 text-lg'/> Live Q&A session with {data?.instructor?.name}</p>
           <p className='flex flex-row gap-2'><TiMessages className='mt-1 text-lg'/> An active Whatsapp community</p>
        </div>
        <div className='flex items-center justify-center w-full h-5 mt-10'>
        <button className='bg-purple-700 rounded-full text-white font-bold text-lg w-80 -ml-9 p-2 '>Register today</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card

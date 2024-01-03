import Image from 'next/image'
import React from 'react'
import {data} from '../../Data/Provideddata'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const TopSection = () => {
  return (
    <div className='relative w-full h-96 '>
        <Image src={"/images/main.jpg"} alt='main' fill className='  bg-center bg-no-repeat brightness-50 object-cover grow'  />
        <div className={`flex flex-col relative left-40 max-w-xl top-52 gap-5 tracking-widest ${playfair.className}`}  >
            <div className='text-white text-md uppercase font-bold'>{data?.instructor?.name}</div>
            <div className='text-white text-4xl font-extrabold'>{data?.course?.title}</div>
        </div>
    </div>
  )
}

export default TopSection

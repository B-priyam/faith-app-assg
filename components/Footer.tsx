import React from 'react'
import { data } from '@/Data/Provideddata'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const Footer = () => {
  return (
    <div className='w-full relative bg-gray-200 mt-20'>
      <div className='flex items-center justify-center pt-16 pb-5'>
        <p className={`text-black text-4xl font-bold w-1/2 font-serif  ${playfair.className}`}> "{data.testimonial.text}" </p>
      </div>
      <div className='flex items-center justify-center pb-16 text-black font-bold'>
        <div className='pr-3'><Image src="/images/instructor.jpg" alt="image" height={50} width={50} className='rounded-full'/></div>
        <div>
          <p>{data.testimonial.reviewer_name}</p>
          <p>{data.testimonial.reviewer_designation}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

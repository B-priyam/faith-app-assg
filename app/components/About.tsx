"use client"

import Image from 'next/image'
import React from 'react'
import { FaFacebook , FaYoutube , FaTwitter , FaInstagram } from "react-icons/fa";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const About = () => {
  return (
    <div className={`w-full relativen text-black mx-20 `}>
      <p className={` text-4xl py-3 font-extrabold tracking-wider ${playfair.className}`}>About the instructor</p>
      <div className='flex py-8'>
        <div>
        <Image src='/images/instructor.jpg' alt='instructor' width={200} height={200} className='rounded-full relative mr-5'/>
        </div>
        <p className='px-5 w-1/3 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eaque vel atque. Non nisi culpa praesentium pariatur? Minus recusandae illo quidem est! Exercitationem quaerat obcaecati dicta, inventore repellat corrupti voluptatem? Lorem ipsum dolor sit amet cam a esse dolorem nihil et laborum, beatae dolor.</p>
        <p className='px-5 w-1/3 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eaque vel atque. Non nisi culpa praesentium pariatur? Minus recusandae illo quidem est! Exercitationem quaerat obcaecati dicta, inventore repellat corrupti voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia tempora in quidem illum ipsam vel doloremque explicabo itaque eum. Aspernatur laboriosam a esse dolorem nihil et laborum, beatae dolor.</p>
        
      </div>
      <div className='flex justify-evenly w-full -ml-20'>
        <p className='flex flex-row text-xl'><FaFacebook className="font-bold text-2xl mr-1" />Facebook</p>
        <p className='flex flex-row text-xl'><FaTwitter className="font-bold text-2xl mr-1" />Twitter</p>
        <p className='flex flex-row text-xl'><FaYoutube className="font-bold text-2xl mr-1" /> Youtube</p>
        <p className='flex flex-row text-xl'><FaInstagram className="font-bold text-2xl mr-1" /> Instagram</p>
      </div>
    </div>
  )
}

export default About

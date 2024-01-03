import React from 'react'
import { data } from '@/Data/Provideddata'
import { GoCheck } from "react-icons/go";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const LeftSection = () => {
  return (
    <div className='p-10 items-center justify-between text-black relative w-3/5'>
      <section className={`uppercase flex-row text-black flex items-center justify-around w-full text-2xl font-extrabold tracking-wide ${playfair.className}`}>
        <div className=' hover:border-purple-600 border-transparent border-b-4 transition hover:border-current hover:cursor-pointer outline-none px-20 py-2 '>about</div>
        <div className=' hover:border-purple-600 border-transparent border-b-4 transition hover:border-current hover:cursor-pointer outline-none px-20 py-2'>instructor</div>
        <div className=' hover:border-purple-600 border-transparent border-b-4 transition hover:border-current hover:cursor-pointer outline-none px-20 py-2'>reviews</div>
      </section>
      <div className='flex flex-col  gap-7'>
        <p className={`text-4xl font-extrabold py-7 ${playfair.className}`}>About the course</p>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto est ipsa veritatis enim provident, unde quo? At, numquam tempore. Consequuntur nihil doloribus blanditiis enim veniam odio esse maxime totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laborum quisquam labore ipsum eveniet dolores doloribus quod a, sit nostrum sequi explicabo facilis quia aut ullam esse perferendis atque sint?</p>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto est ipsa veritatis enim provident, unde quo? At, numquam tempore. Consequuntur nihil doloribus blanditiis enim veniam odio esse maxime totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laborum quisquam.</p>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto est ipsa veritatis enim provident, unde quo? At, numquam tempore. Consequuntur nihil doloribus blanditiis enim veniam odio esse maxime totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laborum quisquam labore ipsum eveniet dolores doloribus quod a, sit nostrum sequi explicabo facilis quia aut ullam esse perferendis atque sint?</p>
        <p className={`text-4xl font-extrabold py-7 ${playfair.className}`}>What to expect from the course</p>
        {/* <div dangerouslySetInnerHTML={{ __html: data?.course?.what_to_expect?.html_content }}></div> */}
        <ul><li className='flex flex-row gap 4  text-lg'><GoCheck className='mr-3 mt-1 font-bold' />Learn to mange your relationships</li><li className='flex flex-row gap 4  text-lg'><GoCheck className='mr-3 mt-1 font-bold' />Better communication</li>
        <li className='flex flex-row gap 4 text-lg'><GoCheck className='mr-3 mt-1 font-bold' />Time management</li>
        <li className='flex flex-row gap 4 text-lg'><GoCheck className='mr-3 mt-1 font-bold' /> Forgiveness</li></ul>
        <p className={`text-4xl font-extrabold py-7  ${playfair.className} `}>Key topics covered</p>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia consectetur tempore perferendis voluptatem dolorum harum doloremque dignissimos obcaecati illo quaerat nihil sed ex, sunt odio vero quas totam. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic qui quia aliquam quos distinctio voluptatibus deleniti, expedita accusamus quae nulla commodi? Voluptatibus voluptate tenetur, quisquam </p>
        
        <ul className='flex flex-col gap-3'>
          <li className='flex flex-row gap 4  text-lg'><GoCheck className='mr-3 mt-1 font-bold text-lg' /><p> <b>10 written and audio sessions</b> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</p></li>
        <li className='flex flex-row gap 4  text-lg'><GoCheck className='mr-3 mt-1 font-bold' /> <p><b>Intuitive exercises and homework</b> walk you through the energies and values of numbers and number sequences so you can become your own authority.</p></li>
        <li className='flex flex-row gap 4  text-lg'><GoCheck className='mr-3 mt-1 font-bold' /> <p><b>A Handy reference </b> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose - and receive spiritual guidance along your path.</p></li>
        <li className='flex flex-row gap 4  text-lg'><GoCheck className='mr-3 mt-1 ' /> <p><b>Expert techniques</b> for manifestation offer simple ways to use numbers to co-create with the universe.</p></li></ul>

        <div/>
    </div>
    </div>
  )
}

export default LeftSection

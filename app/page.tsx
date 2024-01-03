import TopSection from '@/app/components/TopSection'
import LeftSection from '@/app/components/LeftSection'
import Card from '@/app/components/Card'
import About from '@/app/components/About'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <TopSection/>
      <LeftSection/>
      <Card/>
      <About/>
      <Footer/>

    </main>
  )
}

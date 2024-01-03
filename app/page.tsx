import TopSection from '@/components/TopSection'
import LeftSection from '@/components/LeftSection'
import Card from '@/components/Card'
import About from '@/components/About'
import Footer from '@/components/Footer'

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

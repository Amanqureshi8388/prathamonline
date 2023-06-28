import Clat from '@/components/clat/Clat'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Main from '@/components/main/Main'
import OnlineCourse from '@/components/online/OnlineCourse'
import Option from '@/components/option/Option'
import Pratham from '@/components/pratham/Pratham'
import Slider from '@/components/slider/Slider'
import Testimonial from '@/components/testamonial/Testimonial'
import  University  from '@/components/university/University'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Main/>
       <Slider/>
      <Option/>

      <OnlineCourse/>
      <Pratham/>
      <University/>

      <Clat/>
      <Testimonial/>
      <Footer/>
    </main>
  )
}

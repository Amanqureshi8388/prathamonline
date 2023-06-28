'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './testimonial.module.scss'

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <section className={`p-[3rem]`}>
      <div className="container">
        <h3 className='subheading'>STUDENT'S TESTIMONIALS</h3>
        <Carousel responsive={responsive} className={`${style.slider} mt-[3rem] `}>
            <div className={`p-[1rem]`}>
              <div className={`${style.content} bg-[#9B9B9B] flex items-start gap-[2rem] p-[2rem] text-[1.4rem] text-white relative`}>
                <img src="https://www.prathamonline.com/images/comaa.png" alt="" className={` w-[2rem] h-[2rem]`}/>
              <p>I was in 12th class when i got to know about PRATHAM when i was searching for the best coaching institution i could get to prepare myself for jumping into my career. Being interested in both law and management, i chose the full year law+management course. The course</p>
              </div>
              <div className={` grid gap-[1.6rem] grid-cols-2 mt-[2rem]`}>
                <img src="	https://www.prathamonline.com/images/testmonial/ishaan-mittal.png" alt="" className={` w-[10rem] rounded-[50%] ${style.image}`} />
                <div>
                  <h5 className={`text-[1.8rem] text-[#F9B71C] font-semibold`}>ARPIT MADAN</h5>
                  <p className={`text-[1.4rem]`}>AIR 1, B.Com(H), IP University Modern Public School, Shalimar Bagh</p>
                </div>
              </div>
            </div>

            <div className={`p-[1rem]`}>
              <div className={`${style.content} bg-[#9B9B9B] flex items-start gap-[2rem] p-[2rem] text-[1.4rem] text-white relative`}>
                <img src="https://www.prathamonline.com/images/comaa.png" alt="" className={` w-[2rem] h-[2rem]`}/>
              <p>PRATHAM helped me in giving a direction to my efforts. the best institute, indeed for entrance prep. The faculty, extensive study material and mock tests help me to perform to my best potential An absolute joyful experience and I am thankful to PRATHAM for it</p>
              </div>
              <div className={` grid gap-[1.6rem] grid-cols-2 mt-[2rem]`}>
                <img src="		https://www.prathamonline.com/images/testmonial/harivansh-gahlot.png" alt="" className={` w-[10rem] rounded-[50%] ${style.image}`} />
                <div>
                  <h5 className={`text-[1.8rem] text-[#F9B71C] font-semibold`}>HARIVANSH GAHLOT</h5>
                  <p className={`text-[1.4rem]`}>AIR 2, BMS/BBA(FIA)/BBE, SS CBS, Delhi University Delhi Public School, Dwarka</p>
                </div>
              </div>
            </div>

            <div className={`p-[1rem]`}>
              <div className={`${style.content} bg-[#9B9B9B] flex items-start gap-[2rem] p-[2rem] text-[1.4rem] text-white relative`}>
                <img src="https://www.prathamonline.com/images/comaa.png" alt="" className={` w-[2rem] h-[2rem]`}/>
              <p>I was in 12th class when i got to know about PRATHAM when i was searching for the best coaching institution i could get to prepare myself for jumping into my career. Being interested in both law and management, i chose the full year law+management course. The course</p>
              </div>
              <div className={` grid gap-[1.6rem] grid-cols-2 mt-[2rem]`}>
                <img src="	https://www.prathamonline.com/images/testmonial/ishaan-mittal.png" alt="" className={` w-[10rem] rounded-[50%] ${style.image}`} />
                <div>
                  <h5 className={`text-[1.8rem] text-[#F9B71C] font-semibold`}>HARDIK MADAAN</h5>
                  <p className={`text-[1.4rem]`}>AIR 1, BA LLB, Symbiois Law School, Noida Bhiwani Public School-Bhiwani</p>
                </div>
              </div>
            </div>

            <div className={`p-[1rem]`}>
              <div className={`${style.content} bg-[#9B9B9B] flex items-start gap-[2rem] p-[2rem] text-[1.4rem] text-white relative`}>
                <img src="https://www.prathamonline.com/images/comaa.png" alt="" className={` w-[2rem] h-[2rem]`}/>
              <p>I was in 12th class when i got to know about PRATHAM when i was searching for the best coaching institution i could get to prepare myself for jumping into my career. Being interested in both law and management, i chose the full year law+management course. The course</p>
              </div>
              <div className={` grid gap-[1.6rem] grid-cols-2 mt-[2rem]`}>
                <img src="	https://www.prathamonline.com/images/testmonial/download.png" alt="" className={` w-[10rem] rounded-[50%] ${style.image}`} />
                <div>
                  <h5 className={`text-[1.8rem] text-[#F9B71C] font-semibold`}>ROHIT KUMAR JANA</h5>
                  <p className={`text-[1.4rem]`}>AIR 1, BBA, IP University Salwan Public School, Old Rajender Nagar</p>
                </div>
              </div>
            </div>

            <div className={`p-[1rem]`}>
              <div className={`${style.content} bg-[#9B9B9B] flex items-start gap-[2rem] p-[2rem] text-[1.4rem] text-white relative`}>
                <img src="https://www.prathamonline.com/images/comaa.png" alt="" className={` w-[2rem] h-[2rem]`}/>
              <p>PRATHAM has proud to be very helpful to me in achieving my goals and getting into collages of my choice the study material provided by PRATHAM is the best a BMS aspirant can get by attending classes and giving test regularly cracking entrance would not a big problem.</p>
              </div>
              <div className={` grid gap-[1.6rem] grid-cols-2 mt-[2rem]`}>
                <img src="	https://www.prathamonline.com/images/testmonial/khushi-gupta.png" alt="" className={` w-[10rem] rounded-[50%] ${style.image}`} />
                <div>
                  <h5 className={`text-[1.8rem] text-[#F9B71C] font-semibold`}>KHUSHI GUPTA</h5>
                  <p className={`text-[1.4rem]`}>AIR 1, BMS, St. Xavier's College, Mumbai
St. Thomas School, Faridabad</p>
                </div>
              </div>
            </div>
        </Carousel>
      </div>
    </section>
    </>
  )
}

export default Testimonial
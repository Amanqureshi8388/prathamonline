'use client'
import React, { useRef } from 'react'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import style from './slider,module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
    const carouselContainer = useRef();
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        //   slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        //   slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        //   slidesToSlide: 1 // optional, default to 1.
        }
      };

   
  return (
    <>
       <section className=' '>
        <div className="container">
            <div className='relative'>
               <div  className={``} >
                <Carousel responsive={responsive} className='z-[1]'>
                <div>
                    <img src="https://www.prathamonline.com/images/cuet/r6.jpg" alt="" />
                </div>
                <div>
                   <img src="https://www.prathamonline.com/images/cuet/r7.jpg" alt="" />
                </div>
                <div>
                  <img src="https://www.prathamonline.com/images/cuet/r8.jpg" alt="" />
                </div>
                </Carousel>
                  
            </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Slider
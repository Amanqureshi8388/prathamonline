'use client'
import React from 'react'
import style from './footer.scss'
import {IoIosArrowForward} from 'react-icons/io'
import {BsFacebook ,BsLinkedin,BsPhone} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillGooglePlusCircle} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import Copyright from '../copyright/Copyright'
const Footer = () => {
  return (
    <>
    <section className={`${style.MobileFooter} sm:hidden bg-[#3B3C3E] text-white p-[20px] text-center mb-[2rem]`}>
        <div className="container">
            <div>
                <figure className=' text-center flex justify-center items-center'>
                    <img src="https://www.prathamonline.com/images/pratham-logo.png" alt="" className='text-center w-[200px]' />
                </figure>
                <h3 className={`${style.h3} subheading text-white`}>GET IN TOUCH</h3>
                <p className=' mt-[30px]'>PRATHAM Head Office</p>
                <p className='mt-[15px] text-[1.4rem]'>HS-13, 2nd Floor, Kailash Colony Main Market New Delhi 110048</p>
                <p className='mt-[15px] text-[1.4rem]'>+91- 99999 75392</p>
                <p className='mt-[5px] text-[1.4rem]'>011-42 666 000</p>
                <p className='mt-[15px] text-[1.4rem]'>info@prathamonline.com</p>
            </div>
        </div>
    </section>
    <footer className='hidden sm:block bg-[#808080] p-[3rem] py-[6rem]'>
        <div className="container">
            <div className={`grid grid-cols-2  lg:grid-cols-4 gap-[3rem]`}>
                <div>
                    <figure className='w-full'>
                        <img src="	https://www.prathamonline.com/images/pratham-logo.png" alt=""className='w-[60%]' />
                    </figure>
                    <p className='text-white text-[1.6rem] mt-[2rem]'>PRATHAM is an educational institute that remains adamant in emerging as one of the leading institutes, enhancing the budding youth into successful individuals.</p>
                    <h6 className='text-white font-semibold my-[2rem] text-[1.6rem]'>We're Social</h6>
                    <div className=' flex gap-[1rem] text-[2rem] text-white'>
                        <BsFacebook/>
                        <AiFillTwitterCircle/>
                        <BsLinkedin/>
                        <AiFillGooglePlusCircle/>
                    </div>
                </div>
                <div className={`text-white`}>
                    <h3 className='subheading'>TOP COURSES</h3>
                    <div className='mt-[4rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span> CUET</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span> CLAT</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span>  IIM Indore, IPM</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span> IIM Rohtak, IPM</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span>  NLU Delhi</span></div>
                </div>

                <div className={`text-white`}>
                    <h3 className='subheading'>PREP MODULE</h3>
                    <div className='mt-[4rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span> 2 Year Program</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span>  1 Year Program</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span>  Hybrid Program</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span>  Crash Course</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span>  International Education</span></div>
                    <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><IoIosArrowForward/></span><span> Correspondence Course</span></div>
                </div>

                <div className={`text-white`}>
                    <h3 className='subheading'>GET IN TOUCH</h3>
                    <div className='mt-[4rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'>
                        <span className=' text-[2rem]'><HiLocationMarker/> </span>
                        <div className='text-[1.8rem] font-semibold'> PRATHAM Head Office <br /> <span  className='text-[1.4rem] font-normal'>HS-13, 2nd Floor, Kailash Colony Main Market</span>  </div>
                        </div>
                        <div className='mt-[4rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'>
                        <span className=' text-[2rem]'><BsPhone/> </span>
                        <div className='text-[1.8rem]'> +91- 99999 75392 <br /> <span  className=''>011-42 666 000</span>  </div>
                        </div>
                        <div className='mt-[2rem] flex gap-[2rem] text-[1.6rem] items-center justify-start'><span><MdOutlineAlternateEmail/></span><span>info@prathamonline.com</span></div>
                </div>
                
            </div>
        </div>
    </footer>


    <div className='hidden sm:block bg-[#3B3C3E] p-[3rem] py-[6rem] mb-[2rem]'>
        <div className="container">
            <div>
                 <h3 className='subheading text-white'>PARTNERS</h3>
                 <div className='mt-[5rem] text-white' >
                    <ul className=' text-[1.6rem] font-medium md:flex  md:gap-24  justify-between items-center'>
                        <li className='mb-[1rem]'>IIFM</li>
                        <li className='mb-[1rem]'>NCFM Drivatives</li>
                        <li className='mb-[1rem]'>FIREFISH</li>
                        <li className='mb-[1rem]'>PRIMARY OLYMPIAD</li>
                        <li className='mb-[1rem]'>WORLD GK OLYMPIAD</li>
                    </ul>
                 </div>
                 <ul className=' text-white text-[1.6rem] font-medium md:flex justify-between items-center'>
                    <li className='mb-[1rem]'>INTERNATIONAL FINANCE OLYMPIAD</li>
                    <li className='mb-[1rem]'>GLOBAL ECONOMICS OLYMPIAD</li>
                    <li className='mb-[1rem]'>GLOBAL OLYMPIAD ON APTITUDE</li>
                 </ul>
            </div>
        </div>
    </div>
    <Copyright/>
    </>
  )
}

export default Footer
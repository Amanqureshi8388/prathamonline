'use client'

import React, { useState } from 'react'
import {BiMenu} from 'react-icons/bi'
import style from './navbar.module.scss'

const Navbar = () => {
    const [menu,setMenu] = useState(true)
  return (
    <>
    <nav className={`${style.nav} bg-white p-[1rem]  lg:sticky lg:top-0`}>
        <div className="container">
           <div className={`w-full relative lg:flex  items-center justify-between gap-[2rem]`}>
            <div className={` absolute top-[10px] right-0 text-[3rem] cursor-pointer lg:hidden`} onClick={()=>setMenu(!menu)}><BiMenu/></div>
        <div className='  lg:mb-0 '>
            <img src="https://www.prathamonline.com/images/pratham.png" alt="" />
        </div>
          <ul className={`${!menu ? `mt-[3rem] h-max flex flex-col justify-start items-start transition-all gap-[2.6rem]  font-bold text-[1.4rem] lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-[2rem]` : 
            `h-0  hidden transition-all lg:mb-0` } font-bold text-[1.4rem] lg:flex lg:items-center lg:justify-between lg:gap-[2rem]`}>
            <li>ABOUT</li>
            <li>PREP MODULES</li>
            <li>COURSES</li>
            <li>RESULTS</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>CAREER</li>
            <li>LOGIN</li>
            <li>PARTNERS</li>
          </ul>
           </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
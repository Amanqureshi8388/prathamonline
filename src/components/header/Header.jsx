'use client'
import React from 'react'
import style from './header.module.scss'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <>
    <section className={`${style.header} lg:sticky lg:top-0 z-10`}>
      <div className="container">
        <div className='flex lg:justify-between items-center py-[0.8rem]'>
        <div className=' hidden font-semibold text-3xl lg:w-[70%] lg:flex items-center'>
          <marquee behavior="scroll" direction="left">
          PRATHAM Now in Pune | Registrations Open for CUET | CLAT | IPMAT 2023 and 2024
          </marquee>
        </div>
        <div className='flex justify-between items-center gap-3 w-full lg:w-max'>
            <button className={`${style.headerBTN} lg:hidden`}>PSIS Login</button>
            <button className={`${style.headerBTN}`}>Pay Online</button>
            <button className={`${style.headerBTN} hidden lg:block`}>Register</button>
        </div>  
        </div>
      </div>
    <Navbar/>
    </section>
    </>
  )
}

export default Header
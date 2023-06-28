import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineCopyright,AiOutlineMail} from 'react-icons/ai'

const Copyright = () => {
  return (
    <>
    <section className=' bg-white p-[1rem]  fixed  bottom-0 w-full z-30 text-[#1B619E]'>
        <div className="container">
            <div className={`flex gap-[0.7rem] md:gap-[2rem] flex-col md:flex-row items-center justify-around text-[1.2rem] font-semibold`}>
                <div className={`flex gap-4 items-center`}> <span><AiOutlineCopyright/></span> <span>Copyright IIFM Ltd. | All Right Reserved</span></div>
                <div className={`flex gap-4 items-center`}> <span><BsFillTelephoneFill/></span> <span> +91- 99999 75392 , 011-42 666 000</span></div>
                <div className={`flex gap-4 items-center`}> <span><AiOutlineMail/></span> <span>INFO@PRATHAMONLINE.COM</span></div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Copyright
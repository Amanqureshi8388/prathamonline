import React from 'react'
import style from './University.module.scss'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Link from 'next/link'

const University = () => {
  return (
    <>
    <section className={`${style.university} py-12`}>
        <div className="container">
            <div className={`${style.outer}`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-12`}>
                <div className={`${style.wrapper}`}>
                <h3 className='subheading'>POPULAR UNIVERSITIES ENTRANCES</h3>
                <div className='grid grid-cols-3 gap-8 mt-24'>
                    <div className={`${style.box}`}>
                        <img src="https://www.prathamonline.com/images/popularcourses/du.png" alt="" className={`${style.image}`}/>
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="https://www.prathamonline.com/images/popularcourses/clat.png" alt="" className={`${style.image}`}/>
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="https://www.prathamonline.com/images/popularcourses/iimindore.png" alt="" className={`${style.image}`} />
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="https://www.prathamonline.com/images/popularcourses/simc.png" alt="" className={`${style.image}`} />
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="	https://www.prathamonline.com/images/popularcourses/nchmct.png" alt="" className={`${style.image}`} />
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="https://www.prathamonline.com/images/popularcourses/stxavier.png" alt="" className={`${style.image}`} />
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="	https://www.prathamonline.com/images/popularcourses/nmimsnpat.png" alt="" className={`${style.image}`} />
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="https://www.prathamonline.com/images/popularcourses/ip.png" alt="" className={`${style.image}`} />
                    </div>
                    <div  className={`${style.box}`}>
                        <img src="	https://www.prathamonline.com/images/popularcourses/iim-rhotak.png" alt="" className={`${style.image}`}  />
                    </div>
                </div>
                </div>

                <div className={`${style.wrapper} border border-black flex flex-col justify-between p-[2rem] h-[30rem] md:h-auto`} >
                    <h4 className=' text-3xl font-semibold'>Register For Personalised Counseling</h4>
                    <div className={`${style.iconContain}`}>
                        <div className={`${style.reacticon}`}>
                            <BsFillTelephoneFill/>
                        </div>
                    </div>
                    <div>
                        <Link href={'#'} className={`${style.btn} mb-6`}> <span className={`${style.span}`}>Request a Call Back</span></Link>
                    </div>
                </div>
                <div className={`${style.wrapper} `}>
                    <h3 className='subheading'>EXAM NOTIFICATIONS</h3>
                    <div className=' bg-[#fafafafa] h-[80%] mt-24 p-[2rem] '>
                        <marquee className=' text-[1.4rem]' style={{height:'100%'}} behavior="scroll" direction="up">
                            <div>
                            <p className=' inline-block'> CLAT Application Released - 2023-24 </p>
                             <img src="	https://www.prathamonline.com/images/new-blink.gif" alt="" className=' w-[5rem] inline-block' />
                            </div>
                            <div>
                                <p className=' inline-block'>AILET Application Released - 2023-24 </p>
                                <img src="	https://www.prathamonline.com/images/new-blink.gif" alt="" className=' w-[5rem] inline-block' />
                            </div>
                         </marquee>
                         {/* <marquee className=' text-[1.4rem]' style={{height:'100%'}} behavior="scroll" direction="up">  AILET Application Released - 2023-24 
                        <img src="	https://www.prathamonline.com/images/new-blink.gif" alt="" className=' w-[5rem] inline-block' />
                         </marquee> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default University

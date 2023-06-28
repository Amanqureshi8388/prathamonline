import React from 'react'
import style from './option.module.scss'
import Link from 'next/link'

const Option = () => {
  return (
    <>
    <section className={`${style.option} py-14`}>
        <div className="container">
            <div className={`${style.options}`}>
                <h2 className={`${style.heading}`}>OPTIONS FOR</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
                    <div className={`${style.wrapper}`} >
                        <h3 className={`${style.heading2}`}>Class 10 <sup>th</sup></h3>
                        <div className='grid grid-cols-1 gap-4'>
                            <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>STREAM SELECTION</span></Link>
                            <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>CAREER SELECTION</span> </Link>
                        </div>
                    </div>
                    <div className={`${style.wrapper}`}>
                        <h3  className={`${style.heading2}`}>Class 12 <sup>th</sup></h3>
                        <div className=' grid grid-cols-2 gap-6'>
                            <div className='mb-6'>
                            <Link href={'#'} className={`${style.btn} mb-6`}> <span className={`${style.span}`}>CUET</span></Link>
                            <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>IIM I IPM</span> </Link>
                            </div>
                            <div>
                            <Link href={'#'} className={`${style.btn} mb-6`}> <span className={`${style.span}`}>CLAT</span></Link>
                            <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>AILET</span> </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.wrapper}`}>
                        <h3 className={`${style.heading2}`}>Study Abroad</h3>
                        <div className='grid grid-cols-1  gap-4'>
                        <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>SAT</span></Link>
                            <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>APPLICATION GUIDANCE</span> </Link>
                        </div>
                    </div>
                    <div className={`${style.wrapper}`}>
                        <h3 className={`${style.heading2}`}>Up Skilling</h3>
                        <div className='grid grid-cols-1 gap-4'>
                        <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>NCFM Derivatives</span></Link>
                            <Link href={'#'} className={`${style.btn}`}> <span className={`${style.span}`}>COUNSELING DIVISION</span> </Link>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Option
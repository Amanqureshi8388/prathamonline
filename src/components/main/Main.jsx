import React from 'react'
import style from './main.module.scss'
import Image from 'next/image'

const Main = () => {
  return (
    <>
       <section className={`${style.main}`}>
        <div className={`${style.overlay}`}></div>
        <div className="container">
          <div className={`${style.image}`}>
            <img src="https://www.prathamonline.com/images/slider/curt-banner-mobile.png" alt="" className=' md:hidden w-full' />
            <img src='https://www.prathamonline.com/images/slider/cuet-banner.png' className=' hidden md:block w-full'/>
          </div>
          <section className={`grid grid-cols-2 md:grid-cols-3  text-white mt-[2rem]`}>
            <div className='p-[2rem] border border-white'> 
              <figure className='w-[100%]'>
                <img src="	https://www.prathamonline.com/images/icon/screen.png" alt=""  className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>2 Year Program </h2>
              <ul className={`text-[1.6rem]`}>
                <li>450+ hours of training</li>
                <li>Interactive Online Learning portal</li>
                <li>100+ Mock Tests</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="	https://www.prathamonline.com/images/icon/capp.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>1 Year Program </h2>
              <ul className={`text-[1.6rem]`}>
                <li>300+ hours of training</li>
                <li>Personalized Mentorship</li>
                <li>65+ recorded Concept Videos</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="https://www.prathamonline.com/images/icon/crosshairs.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>Retaker Program </h2>
              <ul className={`text-[1.6rem]`}>
                <li>300+ hours of training</li>
                <li>Personalized Mentorship</li>
                <li>65+ recorded Concept Videos</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="	https://www.prathamonline.com/images/icon/clock.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>Hybrid Program</h2>
              <ul className={`text-[1.6rem]`}>
                <li>1 year Intensive Program</li>
                <li>Live Classes</li>
                <li>Student's convenient time</li>
                <li>Unlimited revisions</li>
                <li>Regular Counselling</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="	hhttps://www.prathamonline.com/images/icon/book.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>Crash Course </h2>
              <ul className={`text-[1.6rem]`}>
                <li>150 + hours of intensive Training</li>
                <li>200+ Tests to boost performance</li>
                <li>Current Affairs and Quizzes</li>
              </ul>
            </div>
          
            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="https://www.prathamonline.com/images/icon/globe.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>International Education</h2>
              <ul className={`text-[1.6rem]`}>
                <li>Coaching in SAT ® with complete application assistance</li>
                <li>Class for English and Maths</li>
                <li>15 real time mock tests and result analysis</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="https://www.prathamonline.com/images/icon/keybord.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>Correspondence Course </h2>
              <ul className={`text-[1.6rem]`}>
                <li> An E-learning system for students who cannot reach centers</li>
                <li>Provides class-room level preparation</li>
                <li>40+ video/audio lectures and more than 50 mock test series conducted</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="https://www.prathamonline.com/images/icon/sield.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>NCFM Derivatives</h2>
              <ul className={`text-[1.6rem]`}>
                <li>Skill based course for active trading on the market</li>
                <li>Right knowledge + Competency</li>
                <li>For entry level professionals in the Financial Service Industry</li>
              </ul>
            </div>

            <div className='p-[2rem] border border-white'>
              <figure>
                <img src="	https://www.prathamonline.com/images/icon/division.png" alt="" className={`w-[20%]`}/>
              </figure>
              <h2 className={`text-[2rem] font-semibold text-white my-[2rem]`}>Counseling Division</h2>
              <ul className={`text-[1.6rem]`}>
                <li>For those confused about stream selection</li>
                <li>Stream Competency Test (IX-X) - Psychometric + Biometricy</li>
                <li> Career Competency Test (XI - XII) - Psychometric + Biometric</li>
              </ul>
            </div>
           
          </section>
        </div>
       </section>
    </>
  )
}

export default Main
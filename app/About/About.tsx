import React from 'react'
import Timer from './Timer/Timer'
import bg from '../../public/Image/dddynamite.svg'
import dots from '../../public/Image/dots.svg'
import neon from '../../public/Image/nnneon.svg'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import Image from 'next/image'

export default function About() {
    
  return (
    <>
    <section className=' bg-main relative h-auto overflow-hidden  ' >
        <div className='w-full flex items-center flex-col   '>

        <h3 className='   font-bold text-2xl lg:text-4xl my-2 text-basic font Style'>
       Countdown For Next Festival
        </h3>

            <div className="my-3">
                <Timer/>
            </div>
            <div>
                <p className='text-basic my-3 font-bold text-[10px]'>
             ~   Jun 17 , 2024 ~
                </p>
            </div>
        </div>
        <div className=' absolute lg:top-10  top-14 floating  '>
<Image src={bg} alt='svg' />
</div>
<div className=' absolute top-0 h  w-ful flex opacity-40 floating '>
<Image src={dots} alt='svg' className=' '/>
<Image src={dots} alt='svg' className=' '/>
</div>
<div className=' absolute top-52 lg:right-0 right-[-100px]  floating '>
<Image src={bg} alt='svg' />
</div>
<div className=' absolute bottom-10 lg:right-0 right-[-60px] z-[51] blur-sm floating '>
<Image src={bg} alt='svg' />
</div>
<div className=' absolute bottom-52 lg:left-0 left-[-60px] z-[51] blur-sm floating  '>
<Image src={bg} alt='svg' />
</div>
<div className=' absolute bottom-[26rem] lg:top-96 lg:right-0 ri ght-[-60px] z-[51] blur-sm  floating'>
<Image src={neon} alt='svg'  className='lg:size-52 size-28'/>
</div>

    <div className='lg:container floating  lg:mx-auto relative mx-5'>
        <div className="w-full flex items-center flex-col ">
        <h3 className='   font-bold text-2xl lg:text-4xl my-2 text-basic font Style'>
       About Us 
        </h3>
        <p className='text-basic text-[10px] lg:text-base text-center '>
        We make the event possible!
We plan and implement events and events for large and small companies, and both major multinational companies in Egypt
Careful planning for unforgettable events and events!
        </p>
        <p className='text-basic text-[10px] lg:text-base text-center glass p-2 my-2 '>
        Space is an Egyptian company for managing and organizing corporate events with more than 10 years of experience in managing and presenting successful, high-quality events. It has a team of experts that helps you conceptualize your goals, and then provides comprehensive infrastructure solutions in order to create a unique event. Our professional execution will give you a clear shine, smooth and easy execution, so that the event stays in {"people's"} minds for as long as possible.
        </p>
        <h2 className='text-basic text-xl lg:text-3xl font-bold text-center'>
        The story behind space
        </h2>
        <p className='text-basic text-[10px] lg:text-base text-center glass p-2 my-2 '>
        Fadaa was established in 2007 as a sole proprietorship company,
         and within five years of practice facing the entrepreneurial challenge
          of exploring the market, it was able to write an impressive and exciting
           success story. Today, Fadaa is a limited liability company with significant assets in event equipment and a distinguished team that ensures exceptional and consistent quality for all events.
        </p>


        </div>

    <div className="floating">
    <h2 className='text-basic text-xl lg:text-3xl font-bold text-center my-3 '>
        Meet Us there !
        </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3411.062453071475!2d29.969888899999994!3d31.246694399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE0JzQ4LjEiTiAyOcKwNTgnMTEuNiJF!5e0!3m2!1sar!2seg!4v1716738931913!5m2!1sar!2seg" width={600} height={450} className='w-full rounded-3xl border-basic border-2 lg:h-[450px] h-[250px]  ' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
   </div>
   <div className='my-3 floating'>
   <h2 className='text-basic text-xl lg:text-3xl font-bold text-center  '>
        Contact Us 
        </h2>
        <div className="flex justify-center gap-x-3 items-center">

        <p className='text-basic text-[11px] lg:text-base text-center font-semibold   '>
           <FaPhoneVolume className='text-basic inline mx-2'/>  01025253383
        </p>
        <p className='text-basic text-[11px] lg:text-base text-center font-semibold   '>
        <IoMdMailOpen className='text-basic inline'/>  space.festeg@hotmail.com
        </p>
        </div>

   </div>
    </div>
    <div className=' absolute bottom-0  floating  w-ful flex opacity-40 '>
<Image src={dots} alt='svg' className=' '/>
<Image src={dots} alt='svg' className=' '/>
</div>
    </section>
    </>
  )
}

'use client'
import React from 'react'
import img1 from '../../public/Image/party/pexels-wendywei-1537636.jpg'
import img3 from '../../public/Image/party/pexels-gigxels-7638111.jpg'
import img4 from '../../public/Image/party/pexels-wendywei-1190298.jpg'
import img5 from '../../public/Image/party/5.jpg'
import img6 from '../../public/Image/party/6.jpg'
import img7 from '../../public/Image/party/7.jpg'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Carusol() {
    const [emblaRef] = useEmblaCarousel({ loop: true } ,[
        Autoplay({ playOnInit: true, delay: 1500 })
      ])
      let sliderImage = [
       { img : img1},
        {img : img3},
       { img : img4},
       { img : img5},

      ]
  return (
    <>
     




<div  className="embla overflow-hidden   " ref={emblaRef}>
      <div className="embla__container flex    ">
        {
          sliderImage.map((item: any) => <div key={item?.file_path} className="embla__slide  flex-[0_0_100%] " >
          <Image src={item.img} alt='movies' width={1000} height={350} className='w-full  lg:mt-[-150px]  ' />
         
          </div>


        )}
      </div>
      <div className=' relative lg:mt-[-150px] top-0 z-[52]'>

          <div className='absolute w-full bottom-0 bg-gradient-to-t from-main  to-[#fff0] h-[25vh] z-[51]  '>
          </div>
          <div className='absolute  bottom-0 bg-gradient-to-r from-main  to-[#fff0] w-32 h-screen z-[51]  '>
          </div>
          <div className='absolute  bottom-0 bg-gradient-to-l from-main right-0  to-[#fff0] w-32  h-screen z-[51]  '>
          </div>
      </div>
      
      </div>






    
    
    
    
    
    </>
  )
}

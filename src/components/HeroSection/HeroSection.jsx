import React from 'react'
import { companyName, heroimage } from '../../imports'

const HeroSection = () => {
  return (
    <div className='relative'>
        <img className='herosection-img object-cover h-screen w-full lg:h-[49rem]' src={heroimage} alt="" />
        
        <div className=' flex flex-col container mx-auto absolute top-1/3 text-white p-6 md:text-left'>

        {/* Company name  */}
        <div className='text-7xl font-bold md:text-9xl'>
        <h1>{companyName}</h1>
        <h1>Roofers</h1>
        </div>

        {/* Tagline */}
        <p className='text-2xl md:3xl'>Quality Roofing Solutions</p>

        {/* cta btn  */}

        <div className=' flex items-center justify-center mt-7 bg-red-950 border-white border-2 h-14 text-2xl text-center lg:w-1/2'>
            <p className=''>Contact us now</p>
        </div>
        </div>

    </div>
  )
}

export default HeroSection
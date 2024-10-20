import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection/HeroSection'
import AboutSection from './AboutSection/AboutSection'
import RoofingServices from './RoofingServices/RoofingServices'
import Project from './Projects/Project'
import Testimonials from './Testimonials/Testimonials'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <RoofingServices />
        <Project />
        <Testimonials />

    </div>
  )
}

export default Homepage
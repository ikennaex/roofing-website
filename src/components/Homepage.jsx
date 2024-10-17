import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection/HeroSection'
import AboutSection from './AboutSection/AboutSection'
import RoofingServices from './RoofingServices/RoofingServices'
import Project from './Projects/Project'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <RoofingServices />
        <Project />

    </div>
  )
}

export default Homepage
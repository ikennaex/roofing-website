import React, { useState } from 'react'
import { companyName } from '../../imports'
import AboutInfo from './AboutInfo'

const AboutSection = () => {
    const [aboutUsSection, setAboutUsSection] = useState([
        {
            id:1,
            heading: `About ${companyName} Construction`,
            text: "Lorem ipsdolor ipsdolor ipsdolorv ipsdolorvv ipsdolor sit ametum  consectetur adipisicing elit. Molestiae veniam porro error placeat praesentium quisquam esse ea soluta quia dolorum quisquam esse ea soluta quia dolorum.",
            btnInfo: "Learn more about us"
        },

        {
            id:2,
            heading: "What we do",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus eos blanditiis amet, sint atque suscipit nisi recusandae consectetur accusamus  eos blanditiis amet, sint atque suscipit nisi recusandae consectetur accusamus.",
            btnInfo: "Learn more about the work we do"
        }
    ])


    return (
        <div className='container mx-auto md:flex'>
            {aboutUsSection.map(data => (
                <AboutInfo key = {data.id} data= {data } />
            ))}
            
        </div>
    )
}

export default AboutSection
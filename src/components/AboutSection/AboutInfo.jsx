import React from 'react'

const AboutInfo = ({data}) => {
  // data is coming from parent prop 
  return (
    <div className='container p-6'>
        <h2 className='text-2xl'>{data.heading}</h2>
        <p>{data.text}</p>
        <button className='bg-black text-white p-2 mt-3'>{data.btnInfo}</button>
    </div>
  )
}

export default AboutInfo
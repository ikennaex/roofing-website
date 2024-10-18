import React, { useState } from 'react'

const RoofingServices = () => {

    const [roofingServices, setRoofingServices] = useState([
        { id: 1, title: "Residential Roofing", desc: "We repair and replace all types of residential roofing.", btnInfo: "Learn More" },
        { id: 2, title: "Commercial Roofing", desc: "We repair and replace all types of commercial roofing.", btnInfo: "Learn More" },
        { id: 3, title: "Roof Repairs", desc: "We offer roof leak repair service on all types of residential roofs.", btnInfo: "Get in Touch" }
    ])
    return (
        <section className='container p-6 mx-auto'>
            <h2 className='text-2xl text-center'>Roofing Services</h2>

            <div className='lg:flex gap-10'>
            {roofingServices.map(data => (
            <div className='mt-2 bg-slate-200 text-center rounded-lg p-3 md:py-11' key = {data.id}>
                <h2 className='text-xl'>{data.title}</h2>
                <p>{data.desc}</p>
                <button className='mt-4 text-red-950'>{data.btnInfo}</button>
            </div>
            ))}
            </div>
        </section>
    )
}

export default RoofingServices
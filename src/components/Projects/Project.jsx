import React from 'react'

const Project = () => {

    const images = [
        {
            id:1,
            img: "https://img.freepik.com/free-photo/long-shot-man-with-helmet-sitting-roof_23-2149343711.jpg?ga=GA1.1.717819295.1672140442&semt=ais_hybrid"
        },
        {
            id:2,
            img: "https://img.freepik.com/free-photo/full-shot-roofers-working-together-with-helmets_23-2149343707.jpg?ga=GA1.1.717819295.1672140442&semt=ais_hybrid"
        },
        {
            id:3,
            img: "https://img.freepik.com/free-photo/low-angle-modern-house-roof-clouds_23-2149343646.jpg?ga=GA1.1.717819295.1672140442&semt=ais_hybrid"
        },
        {
            id:4,
            img: "https://img.freepik.com/premium-photo/house-with-black-roof-black-roof-with-number-windows-side_1221953-66638.jpg?ga=GA1.1.717819295.1672140442&semt=ais_hybrid"
        },
        {
            id:5,
            img: "https://img.freepik.com/free-photo/beautiful-wooden-house-with-big-windows_23-2149343704.jpg?ga=GA1.1.717819295.1672140442&semt=ais_hybrid"
        },
    ]
  return (
    <section className='container mx-auto p-6'>
        <h2 className='text-2xl text-center'>Roofing Projects</h2>

        <div className='flex gap-3 mt-4 items-center justify-center md:flex-row flex-wrap'>
            {images.map(data => (
                <div className='w-60 lg:w-80'>
                    <img className='h-56 w-full object-cover lg:h-80' src= {data.img} alt="roofing-projects" />
                </div>
            ))}
        </div>
        <button className='bg-black text-white p-2 mt-3'>Check Out Other Projects</button>
    </section>
  )
}

export default Project
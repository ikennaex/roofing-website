import React from 'react'

const Testimonials = () => {

    const testimonial = [
        {
            img: "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=400",
            name:"Johnny Stones",
            desc: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        },
        {
            img: "https://images.pexels.com/photos/3657140/pexels-photo-3657140.jpeg?auto=compress&cs=tinysrgb&w=400",
            name: "Jason Smith",
            desc: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        },
        {
            img: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=400",
            name: "Cassandra James",
            desc: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        },
        {
            img: "https://images.pexels.com/photos/2061302/pexels-photo-2061302.jpeg?auto=compress&cs=tinysrgb&w=400",
            name: "Johansson Bridget",
            desc: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        },
      ]

  return (
    <section className='container mx-auto p-6'>
        <h2 className='text-2xl'>Testimonials</h2>
        <p>See what our clients have to say about us</p>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {testimonial.map((testimonial) => {
                return (
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-11 md:w-1/3">
            <img className="w-16 -mt-14 rounded-full" src= {testimonial.img} alt="" />
            <h5 className="text-lg font-bold">
                {testimonial.name}
            </h5>
            <p className="text-sm text-darkGrayishBlue">
                {testimonial.desc}
            </p>
            </div>
                )
            })}
        </div>
    </section>
  )
}

export default Testimonials
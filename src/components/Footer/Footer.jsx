import React from 'react'
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex flex-col gap-5 p-8 bg-red-950 items-center text-white'>

        <div>
            2024 | Made with 💜
        </div>

        <div className='flex gap-4'>
        <FaFacebook size={26} />
        <FaInstagram size={26} />
        <IoMdMail size={26} />
        </div>

    </div>
  )
}

export default Footer
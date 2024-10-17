import React from 'react'
import { Logo } from '../imports'

const Navbar = () => {

    const menuItems = [
        "Home","About", "Services", "Contact"
    ]
  return (
    <div className='container mx-auto p-4'>
        <div className='flex items-center justify-start'>
        <img className='h-12' src= {Logo} alt="" />
        <div className='hidden gap-20 mx-auto md:flex'>
            {menuItems.map(menu => (
                    <p className=''>{menu}</p>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Navbar
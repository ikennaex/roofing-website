import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer/Footer'

function App() {
    return (
    <>
        <Navbar />
    <div className=''>
      <Homepage />
    </div>
    <Footer />
    </>
  )
}

export default App

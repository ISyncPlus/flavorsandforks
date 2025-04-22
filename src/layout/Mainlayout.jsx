import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Mainlayout = () => {
  return (
    <div className='scroll-smooth flex flex-col min-h-screen'>
        <ScrollToTop/>
        <Navbar/>
        <main className='flex-1'>
        <Outlet/>
        </main>
        <Footer/>
      
    </div>
  )
}

export default Mainlayout

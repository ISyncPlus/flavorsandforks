import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
        <header className="max-w-full bg-orange-400 rounded-b-xl overflow-hidden text-white">
              <section className="flex justify-between items-center mx-auto">
                  <a href="/" className='flex mx-5 md:mx-10 items-center'>
                    <img src="/logo.png" alt="Flavor and Forks" className="w-20" />
                  <h1 className="text-2xl mx-1"> 
                    Flavors &amp; Forks
        
                  </h1>
                  </a>
        
                {/* Hamburger */}
                <nav className="md:hidden w-8 h-8 text-4xl cursor-pointer mr-3 -mt-3">
                &#9776;
                </nav>
                
                {/* Nav */}
                <nav className="hidden md:flex justify-evenly items-center max-w-2xl p-7 flex-2 text-xl" aria-label='main'>
                  <Link to="/">Home</Link>
        
                  <Link to="/menu">Menu</Link>
        
                  <Link to="/about-us">About Us</Link>
        
                  <Link to="/reservations">Reservations</Link>
                </nav>
              </section>
            </header>
    </div>
  )
}

export default Navbar

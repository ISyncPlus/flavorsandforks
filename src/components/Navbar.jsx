import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
        <header className="max-w-full bg-orange-400 overflow-hidden text-white">
              <section className="flex justify-between items-center mx-auto">
                  <Link to="/" className='flex mx-5 md:mx-10 items-center'>
                    <img src="/logo.png" alt="Flavor and Forks" className="w-20" />
                  <h1 className="text-2xl mx-1"> 
                    Flavors &amp; Forks
        
                  </h1>
                  </Link>
        
                {/* Hamburger */}
                <nav className="md:hidden w-8 h-8 text-4xl cursor-pointer mr-3 -mt-3">
                &#9776;
                </nav>
                
                {/* Nav */}
                <nav className="hidden md:flex justify-evenly items-center max-w-2xl p-7 flex-2 text-xl" aria-label='main'>
                  <Link to="/" className='hover:opacity-80 transition-opacity duration-300'>Home</Link>
        
                  <Link to="/menu" className='hover:opacity-80 transition-opacity duration-300'>Menu</Link>

                  <Link to="/reservations" className='hover:opacity-80 transition-opacity duration-300'>Reservations</Link>
        
                  <Link to="/about-us" className='hover:opacity-80 transition-opacity duration-300'>About Us</Link>

                
                <button className='group'>
                  <h3 className='text-center cursor-pointer relative'>
                  Affiliates <FaCaretDown className='inline -mt-1'/> 
                </h3>

                <ul className='absolute top-[60%] right-[4%] border rounded-lg border-transparent p-2 bg-orange-400 pt-10
                scale-y-0 group-hover:scale-y-100
                duration-200
                origin-top
                '>
                    <li className='mb-3'>
                    <Link to="/affiliates/customers" className='hover:opacity-80 transition-opacity duration-300'>Customers</Link>
                    </li>

                    <li className='mb-3'>
                    <Link to="/affiliates/companies" className='hover:opacity-80 transition-opacity duration-300'>Companies</Link>
                    </li>

                    <li className='mb-3'>
                    <Link to="/affiliates/active-users" className='hover:opacity-80 transition-opacity duration-300'>Active Users</Link>
                    </li>
                  </ul>
                
                
                </button>
                  

    
                  
                </nav>
              </section>
            </header>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
const Navbar = () => {
  const [affiliateOpen, setAffiliateOpen] = useState(false);
  const toggleAffiliate = ()=> {
    setAffiliateOpen(!affiliateOpen);
  }

  return (
    <div className="sticky top-0 z-10">
        <header className="max-w-full bg-orange-400 overflow-hidden text-white h-[5em] sm:h-full">
              <section className="flex justify-between items-center mx-auto pt-1">
                  <Link to="/" className='flex mx-5 lg:mx-10 items-center lg:flex-1 my-2'>
                    <img src="/logo.png" alt="Flavor and Forks" className="w-15 sm:w-20" />
                  <h1 className="text-xl sm:text-2xl mx-1"> 
                    Flavors &amp; Forks
        
                  </h1>
                  </Link>
        
                {/* Hamburger Menu */}
                
                <HamburgerMenu /> 
                
                {/* Nav */}
                <nav className="hidden md:flex justify-evenly items-center max-w-2xl lg:p-7 flex-2 text-xl" aria-label='main'>
                  <Link to="/" className='hover:opacity-80 transition-opacity duration-300'>Home</Link>
        
                  <Link to="/menu" className='hover:opacity-80 transition-opacity duration-300'>Menu</Link>

                  <Link to="/reservations" className='hover:opacity-80 transition-opacity duration-300'>Reservations</Link>
        
                  <Link to="/about-us" className='hover:opacity-80 transition-opacity duration-300'>About Us</Link>

                
                <button className='group'>
                  <h3 className='text-center cursor-pointer relative' onClick={toggleAffiliate}>
                  Affiliates <FaCaretDown className='inline -mt-1'/> 
                </h3>

                <ul className={`absolute top-[60%] right-[4%] border rounded-lg border-transparent px-4 bg-orange-400 ${affiliateOpen ? 'scale-y-100' : 'scale-y-0'} pt-10 
                duration-200
                origin-top text-lg`}
                >
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

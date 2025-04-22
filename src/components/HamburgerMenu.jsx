import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
const HamburgerMenu = () => {
    const [ham, setHam] = useState(false)
  const toggleHam =()=> {
    setHam(!ham);
  }
  const [affiliateOpen, setAffiliateOpen] = useState(false);
    const toggleAffiliate = ()=> {
      setAffiliateOpen(!affiliateOpen);
    }
  return (
    <div>
         <button className=' sm:hidden cursor-pointer relative w-8 h-8 mr-3 text-2xl' onClick={toggleHam}>
                    &#9776;
                    
                  </button> 
                <nav className={`transition-all duration-200 origin-top ${!ham ? 'scale-y-0' : 'scale-y-100'} flex flex-col sm:hidden justify-center ${affiliateOpen ? 'h-[40vh]' : ''} items-center max-w-2xl px-7 pt-1 mt-3 pb-7 text-sm absolute right-0 top-10 rounded-b-lg bg-orange-400 h-[19em]`} aria-label='main'>
                  <Link to="/" className='hover:opacity-80 transition-opacity duration-300 flex-1 pt-5'>Home</Link>
        
                  <Link to="/menu" className='hover:opacity-80 transition-opacity duration-300 flex-1 pt-5'>Menu</Link>

                  <Link to="/reservations" className='hover:opacity-80 transition-opacity duration-300 flex-1 pt-5'>Reservations</Link>
        
                  <Link to="/about-us" className='hover:opacity-80 transition-opacity duration-300 flex-1 pt-5'>About Us</Link>

                  <button onClick={toggleAffiliate} className='flex-1 pt-5'>
                <h3 className='text-center cursor-pointer relative'>
                  Affiliates <FaCaretDown className='inline -mt-1'/> </h3>
                </button>

                <section className={`${affiliateOpen ? 'transition-all ease-in-out scale-y-100' : ' scale-y-0 ease-in-out transition-all'}`}>

                {/* Dropdown menu */}
                <ul className={`transition-all ease-in-out duration-200 ${affiliateOpen ? 'scale-y-100 origin-top block': 'scale-y-0 scale-x-0 hidden'} border rounded-lg border-transparent bg-orange-400 pt-3
                text-sm text-center mt-0.5 `}>
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
                </section>
                
                  

                    {/* dropdown menu */}
                   
              </nav>
      
    </div>
  )
}

export default HamburgerMenu

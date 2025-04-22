import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
  const [affiliateOpen, setAffiliateOpen] = useState(false);
  const toggleAffiliate = ()=> {
    setAffiliateOpen(!affiliateOpen);
  }

  const [ham, setHam] = useState(true)
  const toggleHam =()=> {
    setHam(!ham);
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
                
                  <button className=' sm:hidden cursor-pointer relative w-8 h-8 mr-3 text-2xl' onClick={toggleHam}>
                    &#9776;
                    
                  </button> 
                <nav className={`transition-all duration-200 origin-top ${!ham ? 'scale-y-0' : 'scale-y-100'} flex flex-col sm:hidden justify-center ${affiliateOpen ? 'h-[35vh]' : ''} items-center max-w-2xl px-7 pt-1 mt-3 pb-7 text-sm absolute right-0 top-10 rounded-b-lg bg-orange-400 h-[19em]`} aria-label='main'>
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
                text-sm text-center `}>
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

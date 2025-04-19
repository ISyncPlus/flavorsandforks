import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-900 px-1 py-5 text-white'>
      <section className='flex justify-evenly items-center max-w-full mx-auto'>
        <div className='flex-2'>
          <h1 className='text-lg sm:text-2xl mb-2 text-center'>
            Flavors &amp; Forks
          </h1>
          <p className='text-[0.7rem] text-center'>
            &copy;2021 - 2025 Flavors &amp; Forks|All Rights Reserved
          </p>
        </div>

        <div className='hidden md:block flex-1'>
          <h3 className='text-lg'>
            Quick Links
          </h3>
          <ul className="list-none">
            <li className="relative before:content-['-'] before:absolute before:left-0 pl-4"> 
              <Link to="/">Home</Link>
            </li>
            <li className="relative before:content-['-'] before:absolute before:left-0 pl-4">
            <Link to="/menu">Menu</Link>
            </li>
            <li className="relative before:content-['-'] before:absolute before:left-0 pl-4">
            <Link to="/about-us">About Us</Link>
            </li>
            <li className="relative before:content-['-'] before:absolute before:left-0 pl-4">
            <a href="/">Reservations</a>
            </li>
          </ul>
        </div>

        <div className='-mt-1 flex-1'>
          <h3 className='sm:text-xl font-bold'>
            Opening Hours
          </h3>
          <div className='text-[0.8rem] sm:text-1'>
          <p>Mon - Fri 10:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 12:00 PM - 11:00 PM</p>
          </div>
        </div>

        <div className="text-[0.8rem] sm:text-1 flex-1">
          <h3 className="text-lg sm:text-xl">
            Contact Us
          </h3>
          <div>
          <p>126 Flyer Street, Detroit Smash, MHA</p>
          <p>📞 (123) 456-7890</p>
          <p>info@flavorsandforks.com</p>
          </div>
        </div>
      </section>

    </footer>
      
    </div>
  )
}

export default Footer

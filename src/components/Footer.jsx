import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-900 px-1 py-5 text-white'>
      <section className='flex justify-evenly items-center max-w-full mx-auto'>
        <div className='flex-1 sm:flex-auto w-1/3 sm:w-full'>
          <h1 className='text-lg sm:text-2xl mb-2 text-center font-bold'>
            Flavors &amp; Forks
          </h1>
          <p className='text-[0.6em] text-center'>
            <i>
            &copy;2021 - 2025 Flavors &amp; Forks | All Rights Reserved
              </i>
          </p>
        </div>

        <div className='hidden md:block flex-1 w-1/3 sm:w-full text-center'>
          <h3 className='text-xl font-bold'>
            Quick Links
          </h3>
          <ul className="list-none text-lg">
            <li className="pl-4"> 
              <Link to="/">Home</Link>
            </li>
            <li className="pl-4">
            <Link to="/menu">Menu</Link>
            </li>
            <li className="pl-4">
            <Link to="/about-us">About Us</Link>
            </li>
            <li className="pl-4">
            <a href="/">Reservations</a>
            </li>
          </ul>
        </div>

        <div className='sm:-mt-8 flex-1 sm:flex-auto w-1/3 sm:w-full text-center'>
          <h3 className='sm:text-xl text-[0.8em] font-bold'>
            Opening Hours
          </h3>
          <div className='text-[0.8rem] sm:text-1'>
          <p>Mon - Fri: <span className='block'>10:00 AM - 10:00 PM</span></p>
          <p>Sat - Sun:
             <span className='block'>
             12:00 PM - 11:00 PM
              </span>
              </p>
          </div>
        </div>

        <div className="text-[0.8rem] sm:text-xl flex-1 sm:flex-auto w-1/3 sm:w-full sm p-2">
          <h3 className="text-sm sm:text-xl -mt-1 font-bold">
            Contact Us
          </h3>
          <div>
          <p>F&amp;F Head Branch, 126 Flyer Street, Detroit Smash, MHA</p>
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

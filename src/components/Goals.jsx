import React from 'react'

const Goals = () => {
  return (
    <div>
        <section className="flex flex-col md:flex-row mb-10">
            <figure className='mx-auto'>
                <img src="/mission.jpg" alt="our mission" className='rounded-full object-cover h-60 w-60 mx-auto border-orange-400 border-1'/>
                <h2 className='text-center text-3xl font-bold p-3 font-dancing-script'>🎯 Our Mission</h2>
                <p className='text-center sm:text-left sm:text-lg'>
                To serve meals that feel like a warm hug — crafted with care, cooked with love, and shared with joy.
            At Flavors & Forks, our mission goes beyond food. We're here to create moments — the kind that bring people together, that make you smile, and that turn a regular day into something a little more special. Whether it's a cozy solo lunch or a lively dinner with loved ones, we want every visit to feel personal and unforgettable.
            We're big on flavor, obsessed with quality, and even more passionate about people. Every dish we serve reflects that.
                </p>
                
            </figure>

            <figure className='mx-auto'>
                <img src="/vision.png" alt="our vision" className='rounded-full object-cover h-60 w-60 mx-auto border-orange-400 border-1'/>
                <h2 className='text-center text-3xl font-bold p-3 font-dancing-script'>🌟 Our Vision</h2>
                <p className='text-center sm:text-right sm:text-lg'>
                To serve meals that feel like a warm hug — crafted with care, cooked with love, and shared with joy.
            At Flavors & Forks, our mission goes beyond food. We're here to create moments — the kind that bring people together, that make you smile, and that turn a regular day into something a little more special. Whether it's a cozy solo lunch or a lively dinner with loved ones, we want every visit to feel personal and unforgettable.
            We're big on flavor, obsessed with quality, and even more passionate about people. Every dish we serve reflects that.
                </p>
                
            </figure>
        </section>
    </div>
  )
}

export default Goals

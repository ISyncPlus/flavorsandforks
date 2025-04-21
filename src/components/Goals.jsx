import React from 'react'

const Goals = () => {
  return (
    <div>
        <section className="flex flex-col md:flex-row md:justify-between mb-10">
            <figure className='mx-auto flex-1'>
                <img src="/mission.jpg" alt="our mission" className='rounded-full object-cover h-60 w-60 mx-auto border-orange-400 border-1'/>
                <h2 className='text-center text-3xl font-bold p-3 font-dancing-script'>🎯 Our Mission</h2>
                <p className='text-center sm:text-left sm:text-lg mb-10'>
                To serve meals that feel like a warm hug — crafted with care, cooked with love, and shared with joy.
                At Flavors & Forks, our mission goes beyond food. We're here to create moments — the kind that bring people together, that make you smile, and that turn a regular day into something a little more special. Whether it's a cozy solo lunch or a lively dinner with loved ones, we want every visit to feel personal and unforgettable.
                We're big on flavor, obsessed with quality, and even more passionate about people. Every dish we serve reflects that.
                </p>
                
            </figure>

            <figure className='mx-auto flex-1'>
                <img src="/vision.png" alt="our vision" className='rounded-full object-cover h-60 w-60 mx-auto border-orange-400 border-1'/>
                <h2 className='text-center text-3xl font-bold p-3 font-dancing-script'>🌟 Our Vision</h2>
                <p className='text-center sm:text-right sm:text-lg'>
                To become a beloved name across Africa — not just through the meals we serve, but the memories we help create.

                We envision Flavors & Forks in every major city across the continent, each branch celebrating local culture while staying rooted in our core values: warmth, flavor, and community.

                As we grow, we're not just opening doors — we're building spaces where families connect, travelers feel at home, and cultures share stories over good food. One table, one city, one country at a time — until Flavors & Forks becomes a true taste of home, everywhere.
                </p>
                
            </figure>
        </section>
    </div>
  )
}

export default Goals

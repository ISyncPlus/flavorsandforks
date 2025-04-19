import React from 'react'

const Ceo = () => {
  return (
    <div>
        <section className="flex flex-col sm:flex-row sm:justify-evenly items-center mb-10">
            <img src="/avatar.png" alt="Blank Avatar" className="rounded-full w-2/5 h-2/5 sm:w-3/10 sm:h-2/5 shadow-2xl"/>
            <div className='self-start pt-13 w-[90%] p-5'>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            Meet Our CEO - Jordan Amari
            </h2>
            <p className="text-lg sm:text-xl text-left sm:text-right">
            Flavors & Forks started as a dream in a tiny kitchen, with nothing more than a wooden spoon and a passion for bringing people together through food. Jordan Amari, our founder and head visionary, turned that dream into a cozy, welcoming space where flavor, community, and warmth collide. With years of culinary training and a heart for hospitality, Jordan believes every plate served should tell a story — one that's rich, memorable, and worth sharing.
            </p>
            </div>
        </section>
    </div>
  )
}

export default Ceo

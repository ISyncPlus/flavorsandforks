import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-full mx-auto font-playwrite bg-gray-100 text-white">
      <article id="hero" className="flex flex-col justify-center bg-[url('/restaurant.jpg')] min-h-dvh scroll-mt-40 -mt-10 rounded-b-lg ">
        <div className='flex flex-col justify-center py-20 text-center items-center'>

        <img src="/logo.png" alt="Flavor and Forks" className="w-1/4 md:w-1/5" />
        <h2 className="text-6xl md:text-8xl mb-2 sm:mb-10 -mt-2 font-play-cu leading-normal">
          Flavors &amp; Forks
        </h2>
        <h3 className='text-2xl font-sans'>The Taste You've Been Waiting For</h3>

        </div>
      </article>
    </div>
  )
}

export default Hero

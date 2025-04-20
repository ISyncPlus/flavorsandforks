import React from 'react'

const Preview = () => {
  return (
    <div className="max-w-full mx-auto font-playwrite bg-gray-100 text-white">
      <section className='bg-gray-100 text-black pb-10'>
        
              <h3 className="text-3xl text-center pt-10 mb-5 font-serif">
                What's in Store?🍽️
              </h3>
              <div className="flex flex-col justify-center items-center p-6 max-w-6xl mx-auto">
      
                {/* First Des */}
              <figure className='flex flex-col-reverse sm:flex-row gap-8 justify-between items-center'>
                <section className="mb-10">
                  <h2 className='font-bold text-3xl md:text-4xl font-cinzel leading-8 text-center mb-3'>
                    Discover Our Ambiance
                  </h2>
                  <p className="md:text-xl wrap-normal mb-3">
                  At Flavors & Forks, we've created a cozy and elegant atmosphere, perfect for any occasion. With beautiful tables and soft lighting, every detail is designed to make you feel right at home. Enjoy a meal in a space that's as delightful as the food itself.
                  </p>
                </section>
              <img src="/inStore-1.jpg" alt="Ambient Environment" className='w-85 h-85 rounded-full object-cover ml-10 shadow-lg'/>
              </figure>
      
              {/* Second Des */}
              <figure className='flex flex-col-reverse sm:flex-row-reverse gap-8 justify-between items-center'>
                <section>
                  <h2 className='font-bold text-3xl md:text-4xl font-cinzel leading-8 text-center mb-3'>
                    Masterful Cooking in Action
                  </h2>
                  <p className="md:text-xl mb-5">
                  Our chefs bring passion to every dish, using fresh ingredients and expert techniques. Watch as they craft each meal with precision, from the perfect sauce to the final touch. It's not just cooking, it's an art.
                  </p>
                </section>
              <img src="/inStore-2.jpg" alt="Top Class Chef" className='w-85 h-85 rounded-full object-cover sm:mr-10 shadow-lg'/>
              </figure>
      
            {/* Third Des */}
              <figure className='flex flex-col-reverse sm:flex-row gap-8 justify-between items-center'>
                <section>
                  <h2 className='font-bold text-3xl md:text-4xl font-cinzel text-center leading-8 mb-3'>
                    Meals Worth Remembering
                  </h2>
                  <p className="md:text-xl mb-5">
                  At Flavors & Forks, we believe every meal should be an experience. From the first bite to the last, we serve dishes made with the freshest ingredients and a whole lot of love.
                  </p>
                </section>
              <img src="/inStore-3.png" alt="Amazing food" className='w-90 h-90 rounded-full object-cover sm:ml-10 shadow-lg'/>
      
      
              </figure>
              </div>
      
            </section>
    </div>
  )
}

export default Preview

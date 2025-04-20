import React from 'react'

const Team = () => {
  return (
    <div>
      <h2 className="text-center mt-3 text-2xl sm:text-3xl font-bold mb-10">
            Our Team 
        </h2>

        <section className="flex flex-col">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
            <img src="/team.jpg" alt="Lagos Team" className="w-70 h-70 object-cover rounded-full border-2  border-orange-400 shadow-xl"/>
            <img src="/team-2.jpg" alt="Accra Team" className="w-70 h-70 object-cover rounded-full border-2  border-orange-400 shadow-xl"/>

            <div className="w-70 h-70 rounded-full border-2  border-orange-400 sm:col-span-2 lg:col-span-1">
            <img src="/team-3.jpg" alt="Nairobi Team" className="w-69 h-69 object-cover rounded-full shadow-xl"/>
            </div> 
        </div>

            <p className="p-5 text-lg sm:text-xl text-center mt-3">
            Across every branch of Flavors & Forks, one thing stays consistent: the energy of our amazing team. From Lagos to Accra to Nairobi, our chefs bring not just talent, but heart into every kitchen. You'll find them laughing together, perfecting recipes, and crafting dishes that make people pause mid-bite with joy.

            These aren't just employees — they're the soul of our restaurant. Every smile you see in those photos? That's real. It's the joy of doing what we love, together, every single day. Different kitchens, same passion. That's what makes us Flavors & Forks.
            </p>

        </section>
        <hr className='w-30 mx-auto mb-15 mt-7'/>
    </div>
  )
}

export default Team

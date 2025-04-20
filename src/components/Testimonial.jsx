import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <blockquote className=' mx-auto relative max-w-5xl'>
        <div className="py-15 px-5 bg-slate-700 text-white rounded-[3em]  

        before:content-['\201C']  before:absolute
        before:left-1
        before:top-10
        before:text-6xl
        before:font-play-cu 
        before:text-slate-200
        before:text-white-300

        after:content-['\201D']  after:absolute
        after:right-8
        after:bottom-14
        after:text-6xl
        after:font-play-cu 
        after:text-slate-200
        after:text-white-300
        
        ">
      <h2 className="text-center  text-2xl sm:text-3xl font-fat-face font-bold mb-7">
      True nourishment is found in flavor, in silence, in shared smiles
        </h2>

        <p className="text-right font-vesper text-xl md:text-2xl">
        - Flavors &amp; Forks
      </p>
      </div>
      

        </blockquote>
      
    </div>
  )
}

export default Testimonial

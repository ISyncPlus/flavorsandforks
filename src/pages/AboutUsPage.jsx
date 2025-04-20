import React from 'react'
import Team from '../components/Team'
import Ceo from '../components/Ceo'
import Goals from '../components/Goals'
import Testimonial from '../components/Testimonial'
const AboutUsPage = () => {
  return (
    <div className="max-w-7xl min-h-dvh mx-auto px-5 pt-10 bg-gray-100 pb-10">
        <Ceo/>

        <Team/>

        <Goals/>

        <Testimonial/>
    </div>
  )
}

export default AboutUsPage


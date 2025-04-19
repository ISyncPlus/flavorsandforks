import React from 'react'
import Team from '../components/Team'
import Ceo from '../components/Ceo'
import Goals from '../components/Goals'
const AboutUsPage = () => {
  return (
    <div className="max-w-7xl min-h-dvh mx-auto px-5 pt-10 bg-gray-100">
        <Ceo/>

        <Team/>

        <Goals/>
    </div>
  )
}

export default AboutUsPage


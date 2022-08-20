import React from 'react'
import heroImage from '../Airbnb-Experiences/Group-77.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImage} alt="img" />
      <div className='heroText'>
        <h1>Online Experience</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero

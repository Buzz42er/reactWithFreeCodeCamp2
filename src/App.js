import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import katie from "./Airbnb-Experiences/Katie-Zaferes.png";

const App = () => {
  return (
    <div className='appConteiner'>
      <Nav/>
      <Hero></Hero>
      <Card 
                photo={katie}
                score='5.0'
                reviewCount='6'
                country='USA'
                course='Life lessons with Katie Zaferes'
                price='$136'
                quantity='person'
            />
    </div>
  )
}

export default App

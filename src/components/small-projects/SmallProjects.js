import React from 'react'
import Counter from './counter2'
import '../../App.css';
import TurneryOperator from './TurneryOperator';
import Adding from './Adding';
import ContactFavorite from './ContactFavorite';
import MovingStateUp from './PassingData/MovingStateUp';


const SmallProjects = () => {
  return (
    <div className='bodyProjectsS'>
      <Counter />
      <TurneryOperator/>
      <Adding/>
      <ContactFavorite/>
      <MovingStateUp/>
    </div>
  )
}

export default SmallProjects

import React from 'react'
import Counter from './counter2'
import '../../App.css';
import TurneryOperator from './TurneryOperator';
import Adding from './Adding';
import ContactFavorite from './ContactFavorite';
import MovingStateUp from './PassingData/MovingStateUp';
import BoxesApp from '../boxes/BoxesApp';


const SmallProjects = () => {
  return (
    <div className='bodyProjectsS'>
      <Counter />
      <TurneryOperator/>
      <Adding/>
      <ContactFavorite/>
      <MovingStateUp/>
      <BoxesApp/>
    </div>
  )
}

export default SmallProjects

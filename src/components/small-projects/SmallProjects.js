import React from 'react'
import Counter from './counter2'
import '../../App.css';
import TurneryOperator from './TurneryOperator';
import Adding from './Adding';

const SmallProjects = () => {
  return (
    <div className='bodyProjectsS'>
      <Counter />
      <TurneryOperator/>
      <Adding/>
    </div>
  )
}

export default SmallProjects

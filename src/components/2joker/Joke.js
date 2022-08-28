import React from 'react'

const Joke = (props) => {



  return (
    <div className='jokes'>
      {props.setup && <p>{props.setup}</p>} 
      {/* if there is no prop to pass this will not show, they bouth need to be true */}
      <p className='punch'>{props.punchline}</p>
    </div>
  )
}

export default Joke

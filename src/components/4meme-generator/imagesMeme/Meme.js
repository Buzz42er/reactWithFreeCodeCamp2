import React from 'react'

const Meme = (props) => {

  return (
  
    <img className='meme' src={require(`./memesData.js${props.url}`)} alt="meme" />
  
  )
}

export default Meme

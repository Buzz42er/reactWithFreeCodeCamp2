import React from 'react'

const PhotoShuffle = () => {
    const shuffle = () => {
        console.log('i was clicked!')
    }
    const over = () => console.log('hovered!')
  return (
    <div className='PhotoShuffle'>
      <img src={require('./photos/pexels-amber-janssens-7327624.jpg')} alt="" className="photoShuffle" onMouseOver={over} />
      <button className='shuffleButton' onClick={shuffle}>Shuffle</button>
    </div>
  )
}

export default PhotoShuffle

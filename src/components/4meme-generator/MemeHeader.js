import React from 'react'

const MemeHeader = () => {
  return (
    <div className='MemeHeader'>
      <div className="leftMeme">
        <img src={require('./imagesMeme/logo.png')} alt="" className="logoMeme" />
        <h1 className="headingMeme">Meme generator</h1>
      </div>
      <div className="rightMeme">
        <h3 className="projectHeadingMeme">React Course - Project 3</h3>
      </div>
    </div>
  )
}

export default MemeHeader

import React from 'react'
import memesData from "./memesData.js"
// import Meme from './imagesMeme/Meme.js'

const MemeMain = () => {

  // const random = () => {
  //     const i = (max) => {
  //     return Math.floor(Math.random() * max);
  //   }  
  //   const memeArrayURL = memesData.data.memes[i(100)].url
  //   console.log(memeArrayURL)

    
  // }
  // // const srcImgPath = memesData.data.memes[random].url
  // const [url, setUrl] = React.useState("nista")
  
  // const click = () => {
  //   setUrl(
  //       function url() {
  //       const i = (max) => {
  //         return Math.floor(Math.url() * max)
  //       }
  //       const memeArrayURL = memesData.data.memes[i(100)].url
  //       console.log(memeArrayURL)


  //     }
  //   )
  // }

  const [url, setUrl] = React.useState()
    
    function click() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setUrl(url => memesArray[randomNumber].url)
        
        
    }
 
  return (
    <div className='MemeMain'>
      <div className='formMeme'>
        <div className="textInput">
        <input type="text" id='upperText' placeholder='Here write upper text'/>
        <input type="text" id='lowerText' placeholder='Here write lower text'/>
        </div>
        <button id='submitButton' onClick={click} >Get a new meme image 🖼</button> {/** */}
      </div>
      {/* {memeImg} */}
       <img className='meme' src={url} alt="meme" /> 
    </div>
  )
}

export default MemeMain

import React from 'react'
import memesData from "./memesData.js"
import { useState } from 'react'
// import Meme from './imagesMeme/Meme.js'

const MemeMain = () => {

  ////////////////////////first phase
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

  // const [url, setUrl] = React.useState()
    
  //   function click() {
  //       const memesArray = memesData.data.memes
  //       const randomNumber = Math.floor(Math.random() * memesArray.length)
  //       setUrl(url => memesArray[randomNumber].url)
        
        
  //   }
 
  // return (
  //   <div className='MemeMain'>
  //     <div className='formMeme'>
  //       <div className="textInput">
  //       <input type="text" id='upperText' placeholder='Here write upper text'/>
  //       <input type="text" id='lowerText' placeholder='Here write lower text'/>
  //       </div>
  //       <button id='submitButton' onClick={click} >Get a new meme image 🖼</button> {/** */}
  //     </div>
  //     {/* {memeImg} */}
  //      <img className='meme' src={url} alt="meme" /> 
  //   </div>
  // )

  ///////////////////////////second phase

  /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
      topText: '',
      bottomText:'',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  
  function getMemeImage() {
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      setMeme(prevMeme => ({
          ...prevMeme, 
          randomImage: memesArray[randomNumber].url
          }))
      
  }
  
  return (
      <main>
          <div className="MemeMain">
          <div className='formMeme'>
          <div className="textInput">
              <input 
                  type="text"
                  id='upperText'
                  placeholder="Top text"
                  
              />
              <input 
                  type="text"
                  placeholder="Bottom text"
                  id='lowerText'
              />
              </div>
              
              <button 
                  id='submitButton'
                  onClick={getMemeImage}
              >
                  Get a new meme image 🖼
              </button>
              </div>
          </div>
          <img src={meme.randomImage} className="meme" alt=''/>
      </main>
  )
}

export default MemeMain

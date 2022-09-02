import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
    //without cleanup
    //cleanup is return function at the end of useEffect that runs when whole component changes
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="MemeMain">
        <div className="formMeme">
          <div className="textInput">
            <input
              type="text"
              id="upperText"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text"
              id="lowerText"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>

          <button id="submitButton" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme--div">
          <img src={meme.randomImage} className="meme" alt="" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

export default MemeMain;

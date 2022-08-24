import React from 'react'
import './boxes.css'
import boxes from './boxes'
import Box from './Box'
import { useState } from 'react'

const BoxesApp = () => {

    // /////////////////////////////////first phase
    // /**
    //  * Challenge part 1:
    //  * 1. Initialize state with the default value of the
    //  *    array pulled in from boxes.js
    //  * 2. Map over that state array and display each one
    //  *    as an empty square (black border, transparent bg color)
    //  *    (Don't worry about using the "on" property yet)
    //  */
    //  const [box, setBox] = React.useState(boxes)
    
    //  const boxElement = box.map(box => (
    //      <div className='box' key={box.id} ></div>  
    //      // shown={box.on}
    //  ))
     
    //  return (
    //      <main>
    //          <h1>Boxes will go here</h1>
    //          {boxElement}
    //      </main>
    //  )

    //////////////////////////second phase

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    // const [squares, setSquares] = React.useState(boxes)
    
    
 
    // const squareElements = squares.map(square => (
    //     <Box
    //         key={square.id}
    //         on={square.on}
    //         // handleClick={handleClick}
    //     />
    // ))
    
    // // const handleClick = () => {
    // //     setSquares(prevSquares => {
    // //         return {
    // //             ...prevSquares, 
    // //             on: !prevSquares.on
    // //         }
    // //     }
    // //     )
    // // }
    
    // return (
    //     <main>
    //         {squareElements}
    //     </main>
    // )

    //////////////////////////fourth phase
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    const toggle = (id) => {
        console.log(id)
        // setSquares(prevSquares => {
        //     return {
        //         ...prevSquares,
        //         on: !prevSquares.on
        //     }
        // })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

export default BoxesApp

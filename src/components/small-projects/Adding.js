import { useState } from 'react'

export default function Adding() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(
            prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}` ]
        
       
        )
        
        // We'll work on this next
        // const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <div className='adding'>
            <button onClick={addItem} className='buttonAdd' >Add Item</button>
            {thingsElements}
        </div>
        <Adding2/>
        </div>
    )
}

function Adding2() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    
    const [thingsArray, setThingsArray] = useState([])
    
    function addItem() {
        setThingsArray(
            prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        )
        // Build from scratch :)
    }
    
    const thingsElements = thingsArray.map(thing => {
        return <p key={thing}>{thing}</p>
        
    })
    
    return (
        <div className='adding'>
            <button onClick={addItem} className='buttonAdd'>Add Item</button>
            {thingsElements}
        </div>
    )
}

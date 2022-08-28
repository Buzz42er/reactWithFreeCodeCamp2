import React from 'react'

const AddItem = () => {
    const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"])
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
     const mapping = thingsArray.map(thing =>  <p key={thing}>{thing}</p>)

    /**
     * Challenge: Add an event listener to the button so when
     * it is clicked, it adds another thing to our array
     * 
     * Hint: use the array length + 1 to determine the number
     * of the "Thing" being added. Also, have you event listener
     * console.log(thingsArray) after adding the new item to the
     * array
     * 
     * Spoiler: the page won't update when new things get added
     * to the array!
     */
    //  const lenght = thingsArray.length
    

    //  const add = thingsArray.push(`Thing ${thingsArray.lenght + 1}`)
    //  console.log(thingsArray)

        
    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        setThings(prevState => [...prevState, newThingText])

        console.log(thingsArray)
    }

    
     
  return (
    <div className='MemeMain'>
      <button id='submitButton' onClick={addItem}>Add Item</button>
      {mapping}
    </div>
  )
}

export default AddItem




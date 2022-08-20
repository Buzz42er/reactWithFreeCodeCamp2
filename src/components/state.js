import React from "react"

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {

    const date = new Date()
    const hours = date.getHours()
    if(hours < 12 && hours > 4){
        console.log(`Good morning, ${name}!`)
    }else if(hours > 12 && hours < 16){
        console.log(`Good afternoon, ${name}!`)
    }else if(hours > 16 && hours < 20){
        console.log(`Good evening, ${name}!`)
    }else if(hours > 20 && hours < 4){
        console.log(`Good morning, ${name}!`)
    }
    
}

greeting("Bob")


function greetings(name) {
    const date = new Date()
    const hours = date.getHours()
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greetings("Bob"))


// 1. How would you describe the concept of "state"?
// State is changabe, it is value that is changed inside of the function, by internal logic
//..
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)

// 2. When would you want to use props instead of state?
// Props are for getting data into a function from outside, and with prop values you 
//shouldn't mess inside of the function 
//..
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.

// 3. When would you want to use state instead of props?
// I would you state when I need to change internal values of the function, add 
//delete from array and similar.
//..
//Anytime you want a component to maintain some values from
//within the component. (And "remember" those values even
//when React re-renders the component)

// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Imutable means just to not mess with, you can change it but you shouldn't because 
//they are designed to provide new info from outside
//..
//Unchanging. Props are immutable. State is mutable.


export default function StateHello() {
    /**
     * Challenge: Replace our hard-coded "Hello" on the page with 
     * some state initiated with React.useState()
     */
     function IsImportant() {
        const [isImportant, func] = React.useState("Yes")
        console.log(isImportant)
        return (
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value">
                    <h1>{isImportant}</h1>
                </div>
            </div>
        )
    }

    function No() {
        const [isImportant, setIsImportant] = React.useState("Click")
        /**
         * Challenge: 
         * 1. Create a function called `handleClick` that runs
         *    setIsImportant("No")
         * 2. add a click event listener to the div.state--value
         *    that runs `handleClick` when the div is clicked.
         */
        
        function handleClick() {
            return setIsImportant("No")
        }
        
        return (
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value" onClick={handleClick}>
                    <h1>{isImportant}</h1>
                </div>
            </div>
        )
    }



    function Counter() {
        /**
         * Challenge: Set up state to track our count (initial value is 0)
         */
         const [number, setCount] = React.useState(0)
        
            /**
             * Note: if you ever need the old value of state
             * to help you determine the new value of state,
             * you should pass a callback function to your
             * state setter function instead of using
             * state directly. This callback function will
             * receive the old value of state as its parameter,
             * which you can then use to determine your new
             * value of state.
             */

            //  function add() {
            //     setCount(prevCount => prevCount + 1)
            // }
            //  function sub() {
            //     setCount(prevCount => prevCount - 1)
            // }

         function add() {
             let adding = number + 1
             setCount(adding)
         }
         function subtract() {
            let sub = number - 1
            setCount(sub)
        }
        return (
            <div className="counter">
                <button className="counter--minus" onClick={subtract}>–</button>
                <div className="counter--count">
                    <h1>{number}</h1>
                </div>
                <button className="counter--plus" onClick={add}>+</button>
            </div>
        )
    }
//----------------------------------------------------------------------------------------------------
    const result = React.useState("Hello")
    console.log(result)
    return (
      <div className="stateHelloMain">
        <div className="state">
          <h1 className="state--title">Is state important to know?</h1>
          <div className="state--value">
            <h1>{result[0]}</h1>
          </div>
        </div>
        <IsImportant />
        <No />
        <Counter />
        <GoingOut />
        <OutGoing />
        <AddingItem/>
        <ContactFavorite/>
      </div>
    );
}


// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
//     new function, with old value, or just old value and rewrite it
//     ..
    
//     a. Callback function - whatever the callback function 
//        returns === new value of state
//     b. New value of state (setCount(42))

// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
//     when I need my old value in the future
//     ..
//     Whenever you DO need the previous value to determine the new value

// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
//     when I need to change original value, for some reason
//     ..
//     Whenever you don't need the previous value of state to determine
//     what the new value of state should be.

function GoingOut() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */

    //  const isGoingOut = true
    
    //  let answer  // Use ternary here
    //  if(isGoingOut === true) {
    //      answer = "Yes"
    //  } else {
    //      answer = "No"
    //  }

    function answer(isGoingOut) {
        return (isGoingOut ? 'Yes' : 'No')
    }
    //const isGoingOut = false
    //let answer = isGoingOut ? "Yes" : "No"
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{answer(true)}</h1>
                {/* {isGoingOut ? "Yes" : "No"} <--- this way you can write it in element directly */}
            </div>
        </div>
    )
}

function OutGoing() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    const click = () => setIsGoingOut(prevState => !prevState )
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={click} >
                <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
            </div>
        </div>
    )
}

function AddingItem() {
    const [items, setItems] = React.useState(['item 1', 'item 2'])
    const click = () => setItems(old => {
        const newOne = `item ${old.length + 1}`
        return [...old, newOne ]
        })
    console.log(items)
    

    const inParagraph = items.map(item => {
                                            return <p 
                                            key={item}>
                                                {item}
                                                </p>})
    return (
        <div>
            <button onClick={click}>Add Item</button>
            {inParagraph}
        </div>
    )
}

function ContactFavorite() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "full-star.jpg" : "empty-star.jpg"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" alt="" />
                <div className="card--info">
                    <img 
                        src={require(`./stateImages/${starIcon}`)} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt=''
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
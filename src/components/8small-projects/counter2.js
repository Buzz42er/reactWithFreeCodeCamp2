import { useState } from "react"
import '../../App.css';


//count component is here because it's this small, part of second phase
function Count(props) {
    return (
        <div className="counter--count">
                <h1>{props.number}</h1>
        </div>
    )
}

export default function Counter() {
////////////////////////////first phase

    //     /**
//      * Challenge: Set up state to track our count (initial value is 0)
//      */
//     const [number, setNumber] = useState(0)
    
//     const handleSub = () => {
//         setNumber(prevNumber => prevNumber - 1)
//     }
//     const handleAdd = () => {
//         setNumber(prevNumber => prevNumber + 1)        
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={handleSub}>–</button>
//             <div className="counter--count">
//                 <h1>{number}</h1>
//             </div>
//             <button className="counter--plus" onClick={handleAdd}>+</button>
//         </div>
//     )

///////////////////////////// second phase
    const [count, setCount] = useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}



// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
//    just new value directly
//    or 
//    change old value, that you do with call back function, like this
//    prevValue => prevValue + change
//    that way old value stays and can be changed by interacting


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
//     when I dont need original value


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
//    when I will have use from original value, maybe just by clicking to change to prevOne or something else


import { useState } from "react"

export default function TurneryOperator() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const [isGoingOut, setIsGoingOut] = useState(true)
    
    const click = () => {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }
    
     // Use ternary here
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={click}>
                <h1>{(isGoingOut ? 'Yes' : 'No')}</h1> {/* turnery is done with () */}
            </div>
        </div>
    )
}
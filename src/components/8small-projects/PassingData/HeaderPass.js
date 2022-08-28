import React from 'react'

const HeaderPass = (props) => {
 
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    
    
     return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

export default HeaderPass

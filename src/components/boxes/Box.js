import React from 'react'

const Box = (props) => {
    // const boxStyle = {
    //     backgroundColor: props.on ? '#222255' : 'none',
    //     borderRadius: '5px'
    // }
        
    //     return (
    //         <div className="box" style={boxStyle}  ></div>
    //         // onClick={props.handleClick}
    //     )

    ///////////////////////////third phase
        /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

    ///////////////////////////fourth phase
        //  const [on, setOn] = React.useState(props.on)
    
        //  const handleClick = () => {
        //      setOn(prevOn => !prevOn)
        //  }
         
        //  const styles = {
        //      backgroundColor: on ? "#222255" : "transparent",
        //      borderRadius: '5px'
             
        //  }

        //  return (
        //      <div style={styles} className="box" onClick={handleClick}></div>
        //  )


         const [on, setOn] = React.useState(props.on)
    
         const handleClick = () => {
             setOn(prevOn => !prevOn)
         }
         
         const styles = {
             backgroundColor: on ? "#222255" : "transparent",
             borderRadius: '5px'
             
         }
         


         return (
            <div 
                style={styles} 
                className="box"
                onClick={()=>props.toggle(props.id)}
            >
            </div>
        )
}

export default Box

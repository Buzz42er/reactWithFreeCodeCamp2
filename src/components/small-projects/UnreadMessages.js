import { useState } from "react"



export default function UnreadMessages() {
    ///////////////////////////////////////////first phase
    // const [messages, setMessages] = useState(["a", "b"])
    // /**
    //  * Challenge:
    //  * - Only display the <h1> below if there are unread messages
    //  */
    
    // // const show = (value) => {
    // //     if(messages.length === 0) {
    // //        return value = false
    // //    }else {
    // //        return value = true
    // //    }
 
    // // }
    
    // // console.log(show())   // ---> to get the value of value
    
    
    // return (
    //     <div>
    //         {messages.length && <h1>You have {messages.length} unread messages!</h1>}
    //     </div>
    // )

    /////////////////////////////////////////////////////second phase
        // const [messages, setMessages] = useState(["a", "b"])
        // /**
        //  * Challenge:
        //  * - If there are no unread messages, display "You're all caught up!"
        //  * - If there are > 0 unread messages, display "You have <n> unread
        //  *   message(s)"
        //  *      - If there's exactly 1 unread message, it should read "message"
        //  *        (singular)
        //  */
        
        // const show = () => {
        //     if(messages.length === 0) {
        //         return (
        //             <h1>You're all caught up!</h1>
        //         )
        //     }else if(messages.length === 1 ) {
        //         return (
        //             <h1>You have {messages.length} unread message</h1>
        //         )
        //     }else if(messages.length > 1) {
        //         return (
        //             <h1>You have {messages.length} unread messages</h1>
        //         )
        //     }
        // }
        
        // return (
        //     <div>
        //         {show()}
        //     </div>
        // )
        const [messages, setMessages] = useState(["a","b"])
        /**
         * Challenge:
         * - If there are no unread messages, display "You're all caught up!"
         * - If there are > 0 unread messages, display "You have <n> unread
         *   message(s)"
         *      - If there's exactly 1 unread message, it should read "message"
         *        (singular)
         */
        return (
            <div>
                {
                    messages.length === 0 ?
                    <h1>You're all caught up!</h1> :
                    <h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>
                }
            </div>
        )
    }

    // 1. What is "conditional rendering"?
    // it renders if all conditions are met and looks like this 
    // {value that needs to be true && something you want to render}
    // ..
    //When we want to only sometimes display something on the page based on a condition of some sort
    
    // 2. When would you use &&?
    // when contition that you choose is true when you want to render
    //..
    //When you want to either display something or NOT display it
    
    // 3. When would you use a ternary?
    // when I have only 2 values to deside on
    //..
    //When you need to decide which thing among 2 options to display
    
    // 4. What if you need to decide between > 2 options on
    //    what to display?
    //    then we can use if else statements, or switch
    //..
    //Use an `if...else if... else` conditional or a `switch` statement
import React from "react"
import HeaderPass from "./HeaderPass"
import BodyPass from "./BodyPass"

export default function MovingStateUp() {
    //and passing it back to components as props 
    const [user, setUser] = React.useState("Joe")
    return (
        <main>
            <HeaderPass 
            user={user}
            />
            <BodyPass />
        </main>
    )
}

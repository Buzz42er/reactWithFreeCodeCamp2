import { useState } from "react"


//////////////////////////////part of second phase
function Star(props) {
    let starIcon = props.isFilled ? "full-star.jpg" : "empty-star.jpg"
    

return (
    <img 
                    src= {require(`../stateImages/${starIcon}`)}
                    className="card--favorite"
                    onClick={props.onHandleClick}
                    alt=''
                />
)
}


export default function ContactFavorite() {

    ////////////////////////////////////first phase
    // const [contact, setContact] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })
    
    // let starIcon = contact.isFavorite ? "full-star.jpg" : "empty-star.jpg"
    
    // function toggleFavorite() {
    //     setContact(prevContact => {
    //         return {  //this is an object so this needs to be in side of braces{}, because again we are returning object
    //             ...prevContact,
    //             isFavorite: !prevContact.isFavorite
    //         }
    //     })
    //     // Challenge: Rebuild it :)
    // }
    
    // return (
    //     <main>
    //         <article className="card">
    //             <img src="./images/user.png" className="card--image" alt=''/>
    //             <div className="card--info">
    //                 <img 
    //                     alt=""
    //                     src={require(`../stateImages/${starIcon}`)} 
    //                     className="card--favorite"
    //                     onClick={toggleFavorite}
    //                 />
    //                 <h2 className="card--name">
    //                     {contact.firstName} {contact.lastName}
    //                 </h2>
    //                 <p className="card--contact">{contact.phone}</p>
    //                 <p className="card--contact">{contact.email}</p>
    //             </div>
                
    //         </article>
    //     </main>
    // )


    ///////////////////////////////////second phase
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */
    
     function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))  
    }
    
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" alt=""/>
                <div className="card--info">
                    <Star 
                        
                        isFilled={contact.isFavorite}
                        onHandleClick={toggleFavorite}
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
import React from 'react'
import './cats.css'
import ContactCard from './ContactCard'
import pumpkin from './catsImg/pumpkin.png'
import felix from './catsImg/felix.jpg'
import fluffykins from './catsImg/fluffykins.jpg'
import whiskerson from './catsImg/mr-whiskerson.jpg'
import './cats.css'

const CatContacts = () => {
    return (
        <div className="contacts">
            <ContactCard 
                img={whiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                mail="mr.whiskaz@catnap.meow"   
            />
            
            <ContactCard 
                img={fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                mail="fluff@me.com"
            />
            
            <ContactCard 
                img={felix}
                name="Felix"
                phone="(212) 555-4567"
                mail="thecat@hotmail.com"
            />
            
            <ContactCard 
                img={pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                mail="pumpkin@scrimba.com"
            />
            
        </div>
    )

}

//quiz => https://scrimba.com/scrim/cMLrprhP

export default CatContacts

import React from "react";
import star from "../Airbnb-Experiences/Star.png";

const Card = (props) => {
  return (
    <div className="cards">
      <img className="expImg" src={props.photo} alt="" />
      <div className="score">
        <img className="starImg" src={star} alt="" />
        <span>{props.scorder}</span>
        <span className="grayText">({props.reviewCount}) •</span>
        <span className="grayText">{props.country}</span>
      </div>
      <p>{props.course}</p>
      <p>
        <strong>From {props.price}</strong> / {props.quantity}
      </p>
    </div>
  );
};

export default Card;

/* 
            <Card 
                photo=''
                score='5.0'
                country='USA'
                course='Life lessons with Katie Zaferes'
                price='$136'
                quantity='person'
            /> 
*/

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

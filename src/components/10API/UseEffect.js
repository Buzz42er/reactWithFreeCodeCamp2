import React, { useEffect, useState } from "react";

const UseEffect = () => {
  /**
 *   const [starWarsData, setStarWarsData] = useState({}); // create state with which you can contain data that you get from fetch request
  console.log("Component rendered"); //see how many times component renders because fetch is not inside useEffects( and fatch is a one of effects, this one creates loop and comonents fetches data over and over again )

  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json()) //from link above get json from call
    .then((data) => setStarWarsData(data)); //theb that data(that json) put as a useState constant, declare it as starWarsData

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      {/* then stringify that json data to see it in display //needs closing side of this comment
    </div>
  );
 * 
 */

  const [starWarsData, setStarWarsData] = useState({});

  console.log("Component rendered");

  // side effects
  useEffect(function () {
    fetch("https://swapi.dev/api/people/1").then((res) => res.json());
    // .then(data => setStarWarsData(data))
  }, []); //dependency array
  //without second parametar of useEffect that goes after bracets, the only difference is that code inside useEffect runs after the component visual part has been rendered, (par with return for the main component(useEffect))
  return (
    <div className="UseEffect effectComponents">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default UseEffect;

/**
 * 1. What is a "side effect" in React? What are some examples?
Side effects are unwanted effect in your application that happen when code that is not under control of React has endered your componenet, for example fetch API that is not under Reacts control and we got unvonted loop when we try to contain data that we get from it inside of state
..


2. What is NOT a "side effect" in React? Examples?
Wanted behaviour, for example fetch methode catching data once and state displaying it in side of component once without multiple rerenders 
..


3. When does React run your useEffect function? When does it NOT run
   the effect function?
When parametar called dependency array that compares prevArray value with current array value, if they are the same, effect will not render, if they are different it will render and update prevArrey to be the same as current array value. If array is empty effect will run when component first loads and never again.
.. 


4. How would you explain what the "dependecies array" is?
Dependency array is property that useEffect is dependent on to run and render or not, if the value is the same as it was it will not render but if it is diffrent it will render, again if empty it will run only once when component renders.
..

 * same from effectOnClick, just wanted to have it in both files
 */

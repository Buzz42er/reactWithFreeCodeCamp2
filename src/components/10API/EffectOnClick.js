import React from "react";

const EffectOnClick = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log("Component rendered");

  // side effects
  React.useEffect(
    function () {
      console.log("Effect ran");
      fetch("https://swapi.dev/api/people/1")
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [] //for this it's best to leave it empty because we don't need to run it every time count changes
  ); // [prevCount] compared to [count] if different it will render what's inside of useEffect and update prevCount to current count

  return (
    <div className="EffectOnClick effectComponents">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button
        className="submitButton"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Add
      </button>
    </div>
  );
};

export default EffectOnClick;

/**
 * Quiz:
 * 1. What will happen if I put back our Star Wars API call
 *    into the effect function?
 * 2. How will the useEffect be different if I use
 *    setStarWarsData() instead of console.log()
 * 3. What SHOULD be in our dependencies array in this case?
 */

/**
 * 1. What is a "side effect" in React? What are some examples?
Side effects are unwanted effect in your application that happen when code that is not under control of React has endered your componenet, for example fetch API that is not under Reacts control and we got unvonted loop when we try to contain data that we get from it inside of state
..
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?
Wanted behaviour, for example fetch methode catching data once and state displaying it in side of component once without multiple rerenders 
..
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the effect function?
When parametar called dependency array that compares prevArray value with current array value, if they are the same, effect will not render, if they are different it will render and update prevArrey to be the same as current array value. If array is empty effect will run when component first loads and never again.
.. 
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

4. How would you explain what the "dependecies array" is?
Dependency array is property that useEffect is dependent on to run and render or not, if the value is the same as it was it will not render but if it is diffrent it will render, again if empty it will run only once when component renders.
..
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function
 * 
 */

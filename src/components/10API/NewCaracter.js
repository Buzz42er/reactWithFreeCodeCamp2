import React, { useEffect, useState } from "react";

const NewCaracter = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  /**
   * Challenge: Combine `count` with the request URL
   * so pressing the "Get Next Character" button will
   * get a new character from the Star Wars API.
   * Remember: don't forget to consider the dependencies
   * array!
   */

  useEffect(
    function () {
      console.log("Effect ran");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <h2>The count is {count}</h2>
      <button
        className="submitButton"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default NewCaracter;

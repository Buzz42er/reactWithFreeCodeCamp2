import React from "react";
import Joke from "./Joke";
import jokesData from "../../2joker/jokesData.js";

export default function JokesApp() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}

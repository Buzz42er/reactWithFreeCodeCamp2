import React from "react";
import Counter from "./counter2";
import "../../App.css";
import TurneryOperator from "./TurneryOperator";
import Adding from "./Adding";
import ContactFavorite from "./ContactFavorite";
import MovingStateUp from "./PassingData/MovingStateUp";
import BoxesApp from "./boxes/BoxesApp";
import JokesApp from "./jokes2/JokesApp";
import UnreadMessages from "./UnreadMessages";

const SmallProjects = () => {
  return (
    <div className="bodyProjectsS">
      <Counter />
      <TurneryOperator />
      <Adding />
      <ContactFavorite />
      <MovingStateUp />
      <BoxesApp />
      <JokesApp />
      <UnreadMessages />
    </div>
  );
};

export default SmallProjects;

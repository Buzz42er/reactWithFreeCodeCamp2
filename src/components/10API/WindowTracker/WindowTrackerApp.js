import React from "react";
import WindowTracker from "./WindowTracker";
import "./WindowTracker.css";

const WindowTrackerApp = () => {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  const [show, setShow] = React.useState(true);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
    console.log(show);
  };

  return (
    <div className="WindowTrackerBody">
      <div className="container">
        <button onClick={handleClick}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </div>
    </div>
  );
};

export default WindowTrackerApp;

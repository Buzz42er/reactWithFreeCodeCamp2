import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const WindowTracker = () => {
  //   const windowTrackerStyle = {
  //     display: props.show ? "flex" : "none",
  //   };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function widthChange() {
      setWindowWidth((prevWindowWidth) => window.innerWidth); //renders new value inside return of WindowTracker, evertime window width changes
    }

    window.addEventListener("resize", widthChange); //listens to changes in width

    return () => {
      window.removeEventListener("resize", widthChange); //it's executed right before it's not rendered enymore
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default WindowTracker;

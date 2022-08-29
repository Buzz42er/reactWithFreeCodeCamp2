import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const WindowTracker = () => {
  //   const windowTrackerStyle = {
  //     display: props.show ? "flex" : "none",
  //   };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth((prevWindowWidth) => window.innerWidth);
    });
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default WindowTracker;

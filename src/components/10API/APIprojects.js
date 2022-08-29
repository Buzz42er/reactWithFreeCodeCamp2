import UseEffect from "./UseEffect";
import "./API.css";
import EffectOnClick from "./EffectOnClick";
import NewCaracter from "./NewCaracter";
import WindowTrackerApp from "./WindowTracker/WindowTrackerApp";

const APIprojects = () => {
  return (
    <div className="APImain">
      <UseEffect />
      <EffectOnClick />
      <NewCaracter />
      <WindowTrackerApp />
    </div>
  );
};

export default APIprojects;

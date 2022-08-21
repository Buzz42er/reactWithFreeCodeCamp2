import React from "react"; //ES6 moduals, imported React
import { createRoot } from "react-dom/client"; //react 18 syntax before it was reactDOM
import App from "./App";
import "./index.css";
import './App.css';
import Hours from "./components/Hours";
import CatContacts from "./components/catContactCard/CatContacts";
import Jokes from "./components/joker/Jokes";
import Colors from "./components/maps";
import PhotoShuffle from "./components/photoshuffle/PhotoShuffle";
import AddItem from "./components/addItem/AddItem";
import './components/state.js'
import StateHello from "./components/state.js";
import SmallProjects from "./components/small-projects/SmallProjects";
import MemeApp from "./components/meme-generator/MemeApp";

//need to capitalise first letter of the name of the function
function Greeting() {
  //this is JSX
  return <h1>Hello, This is react site</h1>;
}

function List() {
  return (
    <>
      <ul>
        <li>first</li>
        <li>second</li>
      </ul>
      <hr />
    </>
  );
}

function Navi() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

const Simple = () => {
  return (
    //if appended, it will show an object, because jsx makes an object in JSON? or because it's inside of parentesies but it makes JSON object
    <div>
      <h1>This is first element</h1>
      <p>this is second</p>
      <ol>
        <li>prvi</li>
        <li>drugi</li>
      </ol>
      <p>ponestalo mi ideja, al to je cetiri</p>
    </div>
  );
};

// document.getElementById('root').append(JSON.stringify(simple))
// getting JSON object

// pass component to render, and get root element to display it
// react 18 syntax, container and root
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <Greeting />
    <Navi />
    <Hours />
    <Simple />
    <List />
    <App />
    <div className="cats"><CatContacts/></div>
    <div className="joke"><Jokes/></div>
    <Colors/>
    <MemeApp/>
    <PhotoShuffle />
    <AddItem />
    <StateHello />
    <h2>Repeats</h2>
    <SmallProjects/>
  </div>
  // simple // var render
);

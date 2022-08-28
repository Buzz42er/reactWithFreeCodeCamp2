import React from "react";
import Joke from "./Joke";
import './joke.css'
import jokesData from "./jokesData";

const ChallengeApp = () => {

  const jokeElements = jokesData.map(joke => {
      return <Joke 
                  key={joke.id}
                  setup={joke.setup} 
                  punchline={joke.punchline} 
      />
  })
  return (
      <div>
          {jokeElements}
      </div>
  )
}

//before
// const ChallengeApp = () => {
//   return (
//     <div className="alljokes">
//       <Joke 
       
//        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//                 isPun={true}
//                 upvotes={10}
//                 downvotes={2}
//                 comments={[{author: "", body: "", title: ""}, {}]}
//        />
      
//       <Joke 
         
//         setup ='whos there'
//         punchline ='not me'
//       />

//       <Joke 
       
//       setup ='i say hello'
//       punchline = 'yeah, wheel i dont'
//       />

//       <Joke 
       
//       setup ='horse wallks into a bar and the barmen asks'
//       punchline='why the long face'
//       />
      
//       <Joke 
       
//       setup = 'hello there sir, how may i help you? asked a little girl'
//       punchline ='kakav sir bogati, nisam ti ja mlikar mala'
//       />

//       <Joke 
       
//       setup ='i cant do this any more, they are so bad, glad this is the last one'
//       punchline ='oh yeah, wheel i didnt write those'
//       />
//     </div>
//   );
// };

export default ChallengeApp;

/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <ChallengeApp /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/

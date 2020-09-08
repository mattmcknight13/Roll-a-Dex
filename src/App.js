import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import Sheet from "./components/Sheet";
import GetNpc from "./components/GetNpc";
import Stat from "./components/Stats";
import axios from "axios";

function App(props) {
  // set default useStates for my npc value and npc keys
  const [npc, setNpc] = useState([]);
  const [npcKey, setNpcKey] = useState([]);

  // Triggers Get api call on first load
  useEffect(() => {
    makeApiCall();
  }, []);

  // create async function to make api call
  const makeApiCall = async () => {
    // create variable to assign airtable url to
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;
    // make axios.get call
    const res = await axios.get(airtableURL, {
      // provide api key
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    // create variable to store json object array
    let arr = res.data.records;
    // create a varaible i and have it be a random number based on length of api array
    let i = Math.floor(Math.random() * arr.length);
    // randomly select one api call based on i
    let npcKeys = Object.keys(arr[i].fields);
    let npcValues = Object.values(arr[i].fields);
    setNpcKey(npcKeys);
    setNpc(npcValues);
  };
  // const [npcFunction, setNpcFunction] = useState(callback => {callback})
  return (
    <div>
      <header>
        <h1>Roll-a-Dex NPC Generator</h1>
      </header>
      <nav>
        <Link to="/">Create NPC</Link>
        <Link to="/sheet"> Random Npc</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <h3>Create a NPC</h3>
            {/* pass down props to Form */}
            <Form onSubmit="/sheet" npc={props.npc} setNpc={props.setNpc} />
          </Route>
          <Route path="/sheet">
            <Sheet />
            <Stat />
            {/* pass down  props to GetNpc */}
            <GetNpc npc={npc} npcKey={npcKey} getRandomNpc={makeApiCall} />
            
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

// KNOWN ISSUES"
/*
Order of importance
1. Buttons not conditional rendering information or sending it to correct page so (component tree)(will change how others are handled so key to solve)
2. grabbing api data for curated npc
3. stats logic


- Form page does not display or move data to character sheet page
- GetNpc info is rendering on refresh and showing up before button call
- Randombutton is not sending getNpc data to character sheet for rendering
- Curated Npc is not rendering to the page after creation but is being appended to api
- Stats logic
- Current information that does appear on character sheet page, re runs on refresh or page leave, and reenter
- Need to send props up to App.js and down to Form.jsx to be able to grab curated npc to render it 
*/

// Pesudo code

/* 
App page will be for  passing rendered datat to index.js to be displayed

Button 1 will be for Random Npc  (get)(Read) request

Form compoent for input data fields for curated Npc

Button 2 will be for curated Npc will trigger (post) request and render data to character sheet

Create (Post) component appends information to air table

Random Number Generator 1 - will be for generating random number to attach to array for call get random npc button

Random number generator 2- creates stat array and assigns numbers, runs each through a switch statement to provide modifier and quick provides passive senses 

*/

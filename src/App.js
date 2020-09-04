import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import GetNpc from "./components/GetNpc";
import axios from "axios";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Switch>
          <Route>
            <GetNpc />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;






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

/*
BASE_URL = https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc  - gives list of all npc in database
res.data.records[i] to select random npc from array



Rescources to look at, Fry-lyfe, Audubon
*/

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import GetNpc from "./components/GetNpc";
import Stats from "./components/Stats";
import Sheet from "./components/Sheet";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";

function App(props) {
  // set default useStates for my npc value and npc keys
  const [npc, setNpc] = useState([]);
  const [npcKey, setNpcKey] = useState([]);

  //set randomNumber state to object
  const [randomNumber, setRandomNumber] = useState({
    Dex: 0,
    Str: 0,
    Con: 0,
    Int: 0,
    Wis: 0,
    Cha: 0,
  });
  // set state for modifier
  const [mod, setMod] = useState({
    Dex: 0,
    Str: 0,
    Con: 0,
    Int: 0,
    Wis: 0,
    Cha: 0,
  });

  //set state for toggle for api input source (form(post), random(get) calls)
  const [clicked, setClicked] = useState(true);

  //Stefon and  Soleil's ideas (big help witth passing the state up to use functionality further down)
  //  takes randomNumber.name value and runs it through a if/else
  const getMod = (stat) => Math.floor(stat / 2 - 5);
  //create getStat function with min,max as params
  const getStat = () => {
    //create helper function to hanlde math.random  calc
    const minMax = (min, max) => Math.floor(Math.random() * (max - min + 1));
    // create a object randomNum that that calcualtes attribtues
    const randomNum = {
      Dex: 6 + minMax(6, 18),
      Str: 6 + minMax(6, 18),
      Con: 6 + minMax(6, 18),
      Int: 6 + minMax(6, 18),
      Wis: 6 + minMax(6, 18),
      Cha: 6 + minMax(6, 18),
    };
    //  min + Math.floor(Math.random() * (max - min + 1));
    // setRandomNumber state object creates new randomized number 6-18
    setRandomNumber(randomNum);

    // setMod runs getMod function
    setMod({
      //set mod state by taking randomNumb value and pushing through if else
      Dex: getMod(randomNum.Dex),
      Str: getMod(randomNum.Str),
      Con: getMod(randomNum.Con),
      Int: getMod(randomNum.Int),
      Wis: getMod(randomNum.Wis),
      Cha: getMod(randomNum.Cha),
    });
  };
  const setNpcKeyValues = (fields) => {
    setNpcKey(Object.keys(fields));
    setNpc(Object.values(fields));
  };
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
    setNpcKeyValues(arr[i].fields);
    getStat();
  };

  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  };

  return (
    <div className="body">
      <div className="paper">
      <Header/>
        <main style={mainStyle}>
          <Switch>
            <Route exact path="/">
              <h2>Create a NPC</h2>
              {/* pass down props/state to Form */}
              <Form
                npc={props.npc}
                setNpc={props.setNpc}
                setNpcKeyValues={setNpcKeyValues}
                setClicked={setClicked}
                clicked={clicked}
              />
            </Route>
            <Route path="/sheet">
              <Sheet />
              <Stats randomNumber={randomNumber} mod={mod} getStat={getStat} />
              {/* pass down  props/state to GetNpc */}
              <GetNpc
                npc={npc}
                npcKey={npcKey}
                getRandomNpc={makeApiCall}
                getStat={getStat}
                clicked={clicked}
                setClicked={setClicked}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;

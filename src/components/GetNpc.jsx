import React, { useEffect, useState } from "react";
import axios from "axios";
import RandomButton from "./RandomButton";
import { Route } from "react-router-dom";

//get call
const GetNpc = (props) => {
  const [npc, setNpc] = useState([]);
  const [key, setKey] = useState([]);

  useEffect(() => {
    makeApiCall();
  }, []);

  const makeApiCall = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;
    const res = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    let arr = res.data.records;
    let i = Math.floor(Math.random() * arr.length);
    let npcKeys = Object.keys(res.data.records[i].fields);
    let npcValues = Object.values(res.data.records[i].fields);
    setKey(npcKeys);
    setNpc(npcValues);
  };

  return (
    <div className="randomnpc">
      <>
        <Route path="/">
          <RandomButton getRandomNpc={makeApiCall} />
        </Route >
        {npc.map((npc, idx) => (
          <p className={key[idx]} key={idx}>
            {npc}
          </p>
        ))}
      </>
    </div>
  );
};

export default GetNpc;

// render information to  character sheet



// KNOWN ISSUES"
/*
Form page does not display or move data to character sheet page
GetNpc info is rendering on refresh and showing up before button call
randombutton is not sending getNpc data to character sheet for rendering
*/
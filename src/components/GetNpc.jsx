import React, { useEffect, useState } from "react";
import axios from "axios";

//get call
const GetNpc = () => {
  const [npc, setNpc] = useState([]);
  const [key, setKey] = useState([]);

  

  useEffect(() => {
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
    makeApiCall();
  }, []);

  return (
    <div className="randomnpc">
      {npc.map((npc, idx) => (
        <p className={key} key={idx}>
          {npc}
        </p>
      ))}
    </div>
  );
};

export default GetNpc;

// Need to create a button that when clicked calls makeApiCall Routes you to character sheet page
// render information to  character sheet
// assign a loop to give each made p tag a class name for styling and placement to be only 1 not all keys

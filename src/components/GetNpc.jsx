import React, {useEffect, useState} from 'react'
import axios from 'axios'


//get call
const  GetNpc = () => {
  
  
  const [npc, setNpc] = useState([]);
  

  useEffect(() => {
  
    const makeApiCall = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;
      const res = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      let arr = res.data.records
      let i = Math.floor(Math.random() * arr.length)
      let npcStats = Object.values(res.data.records[i].fields)
      setNpc(npcStats);
      console.log(arr);
    };
    makeApiCall();
  }, []);

  return (
    <div className="randomnpc">
      <p>API information</p>
      {npc.map((npc, idx) => <p key={idx}>{npc}</p>)}
  </div>
  )
}

export default GetNpc;



// Need to create a random number generator that knows 
// length of api array and pulls from api to display randomly selected npc
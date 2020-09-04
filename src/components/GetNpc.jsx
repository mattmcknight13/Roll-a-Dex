import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


function GetNpc() {
  //get call
  const [movieData, setMovieData] = useState({});
  const [newSearch, setNewSearch] = useState("star wars");

  useEffect(() => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;

    const makeApiCall = async () => {
      const res = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setMovieData(res.data);
      console.log(res.data.records[1].fields);
    };
    makeApiCall();
  }, [newSearch]);

  return (
    <div className="randomnpc">
        
  </div>
  )
}

export default GetNpc;
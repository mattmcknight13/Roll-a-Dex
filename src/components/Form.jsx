import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  // use states set current and append information to api
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [hook, setHook] = useState("");

  // console.log(name,race,sex,job,description,hook)

  // onsubmit organizes info into object to be sent to api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      race,
      sex,
      job,
      description,
      hook,
    };
    console.log(fields)
    // api call posts new fields object to api database
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    // resets state to empty field
    // props.setNpc(!props.npc);
    setName("");
    setRace("");
    setJob("");
    setSex("");
    setDescription("");
    setHook("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            name="race"
            type="text"
            placeholder="Enter Race"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            name="sex"
            type="text"
            placeholder="Enter Sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            name="job"
            type="text"
            placeholder="Enter Job/Class"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            name="description"
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            name="hook"
            type="text"
            placeholder="Enter Story hook"
            value={hook}
            onChange={(e) => setHook(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Generate Created NPC</button>
        </div>
      </form>
    </div>
  );
}

export default Form;



// thoughts: (most likely wrong) looks like i need to grab the handlesubmit object i 
// create before api call happens and lift it to app.js then down to getnpc map for render, but how ?!?!?!?!?!?!

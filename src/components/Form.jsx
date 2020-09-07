import React, { useState } from "react";
import axios from "axios";

function Form() {
  // use states set current and append information to api
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [hook, setHook] = useState("");
  
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
    // api call posts new fields object to api database
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;
    console.log(fields);
    // await axios.post(url, data, options (headers))
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
    setName("");
    setRace("");
    setJob("");
    setSex("")
    setDescription("")
    setHook("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Name</label>
          <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="race">Enter Race</label>
          <input name="race" type="text" value={race} onChange={(e) => setRace(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="sex">Enter sex</label>
          <input name="sex" type="text" value={sex} onChange={(e) => setSex(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="job">Enter Occupation/Class</label>
          <input name="job" type="text" value={job} onChange={(e) => setJob(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="description">Enter Description</label>
          <input name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor="hook">Enter Plot Hook</label>
          <input name="hook" type="text" value={hook} onChange={(e) => setHook(e.target.value)} ></input>
        </div>
        <div>
          <button type="submit">Generate Created NPC</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

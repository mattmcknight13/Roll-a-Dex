import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Form.css"

function Form(props) {
  //set useHistory hook to a variable name
  const history = useHistory();
  //destructure props object
  const { setNpcKeyValues, setClicked, } = props;
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
    // create fields object and set keys to pull values from form with to create json file to send to api
    const fields = {
      name,
      race,
      sex,
      job,
      description,
      hook,
    };
    // onclick push to sheet page
   
    // create varaible to assign api endpoint
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/npc`;
    // make axios post call
    await axios.post(
      // endpoint
      airtableURL,
      // destructure fields object to be turn into json
      { fields },
      {
        // provide authorizatioin
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    // grab fields object to be sent to app.js for state change
    setNpcKeyValues(fields);
    // resets state to empty field
    setName("");
    setRace("");
    setJob("");
    setSex("");
    setDescription("");
    setHook("");
    setClicked(prevClicked =>  {
      return !prevClicked
    }); //click for form button
    history.push(`/sheet`);
  };

//styling 
  // const formStyle = {
  //   margin: 20,
  // };

  return (
    <div>
      {/* trigger handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form"
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="form"
            name="race"
            type="text"
            placeholder="Enter Race"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="form"
            name="sex"
            type="text"
            placeholder="Enter Sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="form"
            name="job"
            type="text"
            placeholder="Enter Job/Class"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="form"
            name="description"
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="form"
            name="hook"
            type="text"
            placeholder="Enter Story hook"
            value={hook}
            onChange={(e) => setHook(e.target.value)}
          ></input>
        </div>
        <div>
          <button className type="submit">
            Generate Created NPC
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

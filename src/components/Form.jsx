import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div>
          <input placeholder="Enter Name"></input>
        </div>
        <div>
          <input placeholder="Enter Race"></input>
        </div>
        <div>
          <input placeholder="Enter Occupation/class"></input>
        </div>
        <div>
          <input placeholder="Enter Description ex. long brown hair, lots of tattoos"></input>
        </div>
        <div>
          <input placeholder="Enter Plot Hook"></input>
        </div>
        <div>
          <button>Generate curated NPC</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

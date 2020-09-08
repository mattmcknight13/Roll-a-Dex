import React from "react";
import RandomButton from "./RandomButton";

//get call
// initate GetNpc function
const GetNpc = (props) => {
  // destructure props object
  const { npcKey, npc, getRandomNpc } = props;

  return (
    <div className="randomnpc">
      <>
        {/* have button trigger api call on click */}
        <RandomButton getRandomNpc={getRandomNpc} />
        {/* map through selected object to give key values to be classname, and assign values to approriate p tag */}
        {npc.map((n, idx) => (
          <p className={npcKey[idx]} key={idx}>
           {npcKey[idx]}: {n}
          </p>
        ))}
      </>
    </div>
  );
};

export default GetNpc;

// render information to  character sheet

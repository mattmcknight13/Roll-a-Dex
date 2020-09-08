import React from "react";
import RandomButton from "./RandomButton";

//get call
// initate GetNpc function
const GetNpc = (props) => {
  // destructure props object
  const { npcKey, npc, getRandomNpc, setNpcInfo } = props;
  console.log(setNpcInfo)

  return (
    <div className="randomnpc">
      <>
        {/* have button trigger api call on click */}
        <RandomButton getRandomNpc={getRandomNpc} />
        {/* map through selected object to give key values to be classname, and assign values to approriate p tag */}
        {npc.map((n, idx) => (
          <h2 className={npcKey[idx]} key={idx}>
           {npcKey[idx]}: {n}
          </h2>
        ))}
      </>
    </div>
  );
};

export default GetNpc;

// render information to  character sheet

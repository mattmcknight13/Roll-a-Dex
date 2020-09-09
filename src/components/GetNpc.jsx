import React from "react";
import RandomButton from "./RandomButton";

//get call
// initate GetNpc function
const GetNpc = (props) => {
  // destructure props object
  const { npcKey, npc, getRandomNpc, getStat} = props;
  console.log('getnpc',props.npcInfo)
  // console.log(setNpcInfo)

  return (
    <div className="randomnpc">
      <>
        {/* have button trigger api call on click */}
        <RandomButton getRandomNpc={getRandomNpc} getStat={getStat}/>
        {/* map through selected object to give key values to be classname, and assign values to approriate h2 tag */}
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

// need to either injext fields object which i have moved up to app.js and trick getnpc to render it instead,
// or find a way to get last element in api array to render as it should be newest item after appending (how would i pop off )




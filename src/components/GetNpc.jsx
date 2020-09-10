import React from "react";
import RandomButton from "./RandomButton";


//get call
// initate GetNpc function
const GetNpc = (props) => {
  // destructure props object
  const {
    npcKey,
    npc,
    getRandomNpc,
    getStat,
    clicked,
    setClicked,
  } = props;
  
  const npcStyle = {
    dipsplay: `flex`,
    flexDirection: `column`,
    marginTop: `-200px`,
    marginLeft: `300px`
  };
  const npcInfo = {
    wordBreak: `break-all`
  }
  
  return (
    <div className="randomnpc" style={npcStyle}>
      <>
        {/* have button trigger api call on click */}
        <RandomButton
          getRandomNpc={getRandomNpc}
          getStat={getStat}
          setClicked={setClicked}
          clicked={clicked}
        />

        {/* onClick clicked state changes between true and false triggering form render or randombutton */}
        {/* map through selected object to give key values to be classname, and assign values to approriate h2 tag */}
        {!clicked ? (
          npc.map((n, idx) => (
            <h4 style={npcInfo} className={npcKey[idx]} key={idx}  >
              {npcKey[idx]}: {n}
            </h4>
          ))
        ) : (
          <div>
            {/* render h2 tags where clasname is specfic index of array and value is of same index from different array */}
              <h4 style={npcInfo} className={npcKey[0]}>name: {npc[0]} </h4>
              <h4 style={npcInfo} className={npcKey[1]}>race: {npc[1]} </h4>
            <h4 style={npcInfo} className={npcKey[2]}>job: {npc[2]}</h4>
            <h4 style={npcInfo} className={npcKey[3]}>description:  {npc[3]}</h4>
            <h4 style={npcInfo} className={npcKey[4]}>hook:{npc[4]}</h4>
            <h4 style={npcInfo} className={npcKey[5]}>sex: {npc[5]}</h4>
          </div>
        )}
      </>
    </div>
  );
};

export default GetNpc;

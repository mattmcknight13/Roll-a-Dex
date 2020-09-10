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
    npcInfo,
    clicked,
    setClicked,
  } = props;
  // get keys and values from npcInfo and assign to variables
  let npcInfoKeys = Object.keys(npcInfo);
  let npcInfoValues = Object.values(npcInfo);
  const npcStyle = {
    dipsplay: `flex`,
    flexDirection: `column`,
    marginTop: `-200px`,
    marginLeft: `300px`,
  };
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
            <h4 className={npcKey[idx]} key={idx}>
              {npcKey[idx]}: {n}
            </h4>
          ))
        ) : (
          <div>
            {/* render h2 tags where clasname is specfic index of array and value is of same index from different array */}
            <h4 className={npcInfoKeys[0]}>name: {npcInfoValues[0]}</h4>
            <h4 className={npcInfoKeys[1]}>race: {npcInfoValues[1]}</h4>
            <h4 className={npcInfoKeys[2]}>sex: {npcInfoValues[2]}</h4>
            <h4 className={npcInfoKeys[3]}>job: {npcInfoValues[3]}</h4>
            <h4 className={npcInfoKeys[4]}>description: {npcInfoValues[4]}</h4>
            <h4 className={npcInfoKeys[5]}>hook: {npcInfoValues[5]}</h4>
          </div>
        )}
      </>
    </div>
  );
};

export default GetNpc;



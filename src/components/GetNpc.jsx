import React from "react";
import RandomButton from "./RandomButton";

//get call
// initate GetNpc function
const GetNpc = (props) => {
  // destructure props object
  const { npcKey, npc, getRandomNpc, getStat, npcInfo, setNpcInfo, clicked, setClicked } = props;
  // get keys and values from npcInfo and assign to variables
  let npcInfoKeys = Object.keys(npcInfo);
  let npcInfoValues = Object.values(npcInfo);

  return (
    <div className="randomnpc">
      <>
        {/* have button trigger api call on click */}
        <RandomButton getRandomNpc={getRandomNpc} getStat={getStat} setClicked={setClicked} clicked={clicked} />
        
        {/* onClick clicked state changes between true and false triggering form render or randombutton */}
        {/* map through selected object to give key values to be classname, and assign values to approriate h2 tag */}
        { !clicked ? (
          npc.map((n, idx) => (
            
            <h2 className={npcKey[idx]} key={idx}>
              {npcKey[idx]}: {n}
            </h2>
          ))
        ) : (
            <div>
              {/* render h2 tags where clasname is specfic index of array and value is of same index from different array */}
            <h2 className={npcInfoKeys[0]}>Name: {npcInfoValues[0]}</h2>
            <h2 className={npcInfoKeys[1]}>Race: {npcInfoValues[1]}</h2>
            <h2 className={npcInfoKeys[2]}>Sex: {npcInfoValues[2]}</h2>
            <h2 className={npcInfoKeys[3]}>Job: {npcInfoValues[3]}</h2>
            <h2 className={npcInfoKeys[4]}>Description: {npcInfoValues[4]}</h2>
            <h2 className={npcInfoKeys[5]}>Story Hook: {npcInfoValues[5]}</h2>
          </div>
        )}
      </>
    </div>
  );
};

export default GetNpc;


// need to set a toggle state to form button that if clicked turns true or false whichever works to render the form data
// otherwise should show random generated npc infomration


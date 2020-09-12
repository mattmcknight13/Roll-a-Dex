import React from "react";
import RandomButton from "./RandomButton";
import "./GetNpc.css";

//get call
// initate GetNpc function
const GetNpc = (props) => {
  // destructure props object
  const { npc, getRandomNpc, getStat, clicked, setClicked } = props;

  return (
    <div className="npc-style">
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
        <div>
          {/* render h2 tags where clasname is specfic index of array and value is of same index from different array */}
          <div className="person">
            <p className={npc[0]}> {npc[0]}</p>
            <p className={npc[1]}> {npc[1]}</p>
            <p className={npc[5]}> {npc[5]}</p>
            <p className={npc[2]}> {npc[2]}</p>
          </div>
          <div className="rp">
            <p className={npc[3]}> {npc[3]}</p>
            <p className={npc[4]}> {npc[4]}</p>
          </div>
        </div>
      </>
    </div>
  );
};
export default GetNpc;

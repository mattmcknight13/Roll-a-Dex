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
          {npc && (
            <>
              <div className="person">
                <p className="name">{npc.name}</p>
                <p className="race"> {npc.race}</p>
                <p className="sex"> {npc.sex}</p>
                <p className="job"> {npc.job}</p>
              </div>
              <div className="rp">
                <p className="decription"> {npc.description}</p>
                <p className="hook"> {npc.hook}</p>
              </div>
            </>
          )}
        </div>
      </>
    </div>
  );
};
export default GetNpc;



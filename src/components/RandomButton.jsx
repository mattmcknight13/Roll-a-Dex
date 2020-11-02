import React from "react";
import './RandomButton.css'



function RandomButton(props) {
  const { setClicked, getRandomNpc } = props;



  return (
    <div>
      {/* onclick button gets random npc */}
      <button
        className="random-btn"
        onClick={() => {
          setClicked(prevClicked => {
            return !prevClicked
          }); //click for random button
          getRandomNpc();
        }}
      >
        Generate a Random NPC
      </button>
    </div>
  );
}

export default RandomButton;

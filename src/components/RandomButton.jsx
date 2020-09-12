import React from "react";


function RandomButton(props) {
  const { setClicked, getRandomNpc } = props;



  return (
    <div>
      {/* onclick button gets random npc */}
      <button
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

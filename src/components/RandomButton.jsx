import React from "react";

function RandomButton(props) {
  const { setClicked, clicked, getRandomNpc } = props;



  return (
    <div>
      {/* onclick button gets random npc */}
      <button
        onClick={() => {
          setClicked(!clicked); //click for random button
          getRandomNpc();
        }}
      >
        Generate a Random NPC
      </button>
    </div>
  );
}

export default RandomButton;

import React from "react";

const RandomButton = (props) => {
  return (
    <div>
      {/* onclick button gets random npc */}
      <button
        onClick={() => {
          console.log('clicked')
        props.setClicked(!props.clicked)
          props.getRandomNpc();
        }}
      >
        Generate a Random NPC
      </button>
    </div>
  );
};

export default RandomButton;

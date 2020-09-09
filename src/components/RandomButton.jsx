import React from "react";

const RandomButton = (props) => {
  return (
    <div>
      {/* onclick button gets random npc */}
      <button
        onClick={() => {
          props.getRandomNpc();
        }}
      >
        Generate a Random NPC
      </button>
    </div>
  );
};

export default RandomButton;

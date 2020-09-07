import React from "react";
// import Stats from './Stats'


const RandomButton = (props) => {
  return (
    <div>
      <button onClick={() => props.getRandomNpc()}>
        Generate a Random NPC
      </button>
    </div>
  );
};

export default RandomButton;

// Need to create a button that when clicked  Routes you to character sheet page
// render information to  character sheet

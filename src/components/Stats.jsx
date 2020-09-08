import React from "react";
import { findByLabelText } from "@testing-library/react";

function Stats() {
  let stat = [];
  let min = 6;
  let max = 18;

  const Stat = () => {
    for (let i = 6; i > 0; i--) {
      stat = min + Math.floor(Math.random() * (max - min + 1));
      // console.log(stat);
      return stat;
    }
  };

  const style = {
    display: 'flex',
  }

  const statStyle = {
    margin: 40
  }

  return (
   
    <div style={style}>
      <h4 style={statStyle} >Dex </h4>
      <h5 style={statStyle}>{Stat()}</h5>
      <h4 style={statStyle}>Str </h4 >
      <h5 style={statStyle}>{Stat()}</h5>
      <h4 style={statStyle}>Con  </h4>
      <h5 style={statStyle}>{Stat ()}</h5>
      <h4 style={statStyle}>Int </ h4>
      <h5 style={statStyle}>{Stat() }</h5>
      <h4 style={statStyle}>Wis </h4 >
      <h5 style={statStyle}>{Stat()}</h5>
      <h4 style={statStyle}>Cha </h4>
      <h5 style={statStyle}>{Stat()}</h5>
    </div>
  );
}

export default Stats;

// Need to generate 6 random numbers
// need assign those numbers to stat blocks
// need to give each number a modifer based on stat number (ex swtich statemnet)
// for perception, insight, and investigation need to use stats to give passive stats (wis and int stat modifers)
// need to be tied to both buttons to generate and be displayed

/*

Attributes

Dex
Str
Con
Int
Wis
Cha

  Stat Modifiers (switch statement)
  6-7 = -2
  8-9 = -1
  10-11 = 0
  12-13 = +1
  14-15 = +2
  16-17 = +3
  18-19 = +4
  20 = +5


 Passive Senses  (quick arithmatic )
 Perception = Wis Modifier + 10
 Investigation = Int Modifier + 10
 Insight = Wis Modifier + 10

*/

//POST MVP randomly select two Stats on senses to add a Profienciency in

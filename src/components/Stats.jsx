import React from "react";


function Stats() {

  let stat = [];
  let min = 6;
  let max = 18;

  const Stat = () => {
    for (let i = 6; i > 0; i--) {
      stat = min + Math.floor(Math.random() * (max - min + 1));
      
      return stat;
    }
  };

  const style = {
    display: 'flex',
    justifyContent: 'center'
  }

  const statStyle = {
    margin: 100,
    border: 'solid green',
    padding: 20
  }

  return (
   
    <div style={style}>
      <h2 style={statStyle} >Dex <br />{Stat()} </h2>
      <h2 style={statStyle} >Str <br />{Stat()} </h2>
      <h2 style={statStyle} >Con <br />{Stat()} </h2>
      <h2 style={statStyle} >Int <br />{Stat()} </h2>
      <h2 style={statStyle} >Wis <br />{Stat()} </h2>
      <h2 style={statStyle} >Cha <br />{Stat()} </h2>
   
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

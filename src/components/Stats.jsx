import React from "react";

function Stats() {
  
  
  const Stat = () => {
    let stat = []
    let min = 6;
    let max = 18;
    for (let i = 6; i > 1; i--){
      stat = min + Math.floor(Math.random() * (max - min + 1));
      console.log(stat)
    }
    return stat
   
   
    // let modifer = 
  };
 
  
  return (
    <div>
      <h4>{Stat()}</h4>
     
    </div>
  )
}

export default Stats;

// Need to generate 6 random numbers
// need assign those numbers to stat blocks
// need to give each number a modifer based on stat number (ex swtich statemnet)
// for perception, insight, and investigation need to use stats to give passive stats
// need to be tied to both buttons to generate and be displayed

/*

Attributes

Dex
Str
Con
Int
Wis
Cha

  Stat Modifiers
  6-7 = -2
  8-9 = -1
  10-11 = 0
  12-13 = +1
  14-15 = +2
  16-17 = +3
  18-19 = +4
  20 = +5


 Passive Senses
 Perception = Wis Modifier + 10
 Investigation = Int Modifier + 10
 Insight = Wis Modifier + 10

*/

//POST MVP randomly select two Stats on senses to add a Profienciency in

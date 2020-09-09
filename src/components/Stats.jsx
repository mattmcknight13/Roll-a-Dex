import React, { useState } from "react";
import { Switch } from "react-router-dom";

function Stats() {
  // const [mod, setMod] = useState({
  //   Dex: 0,
  //   Str: 0,
  //   Con: 0,
  //   Int: 0,
  //   Wis: 0,
  //   Cha: 0,
  // });
  const [randomNumber, setRandomNumber] = useState({
    Dex: 0,
    Str: 0,
    Con: 0,
    Int: 0,
    Wis: 0,
    Cha: 0,
  });

  // const Stat = () => {
  //   let min = 6;
  //   let max = 18;
  //   for (let i = 6; (i) => 0; i--) {
  //     let stat = min + Math.floor(Math.random() * (max - min + 1));
  //     // console.log(stat)
  //     return stat;
  //   }
  // };

  const getMod = () => {
    setRandomNumber(Stat());
    // 6-7 = -2
    // 8-9 = -1 - for every number two above or below 10/11 you gain a +/- modifer shows how good you are at something
    // 10-11 = 0 -average person
    // 12-13 = +1
    // 14-15 = +2
    // 16-17 = +3
    // 18 = +4
  //   let mod = 0;
  //   if (Stat === 6 || Stat === 7) {
  //     mod = -2;
  //   } else if (Stat === 8 || Stat === 9) {
  //     mod = -1;
  //   } else if (Stat === 10 || Stat === 11) {
  //     mod = 0;
  //   } else if (Stat === 12 || Stat === 13) {
  //     mod = 1;
  //   } else if (Stat === 14 || Stat === 15) {
  //     mod = 2;
  //   } else if (Stat === 16 || Stat === 17) {
  //     mod = 3;
  //   } else {
  //     mod = 4;
  //   }
  // };

  function handleChange(e) {
    const { name } = e.target;
    const value = Stat();
    setRandomNumber({
      [name]: value,
    });
  }

  const style = {
    display: "flex",
    justifyContent: "center",
  };

  const statStyle = {
    margin: 100,
    border: "solid green",
    padding: 20,
  };

  return (
    <div style={style}>
      {/* <input
        name="Dex"
        value={randomNumber.Dex}
        style={statStyle}
        onChange={(e) => handleChange(e)}
      >
        Dex <br />
        {getMod()}{" "}
      </input>
      <input
        name="Str"
        value={randomNumber.Str}
        style={statStyle}
        onChange={(e) => handleChange(e)}
      >
        Str <br />
        {Stat()}{" "}
      </input>
      <input
        name="Con"
        value={randomNumber.Con}
        style={statStyle}
        onChange={(e) => handleChange(e)}
      >
        Con <br />
        {Stat()}{" "}
      </input>
      <input
        name="Int"
        value={randomNumber.Int}
        style={statStyle}
        onChange={(e) => handleChange(e)}
      >
        Int <br />
        {Stat()}{" "}
      </input>
      <input
        name="Wis"
        value={randomNumber.Wis}
        style={statStyle}
        onChange={(e) => handleChange(e)}
      >
        Wis <br />
        {Stat()}{" "}
      </input>
      <input
        name="Cha"
        value={randomNumber.Cha}
        style={statStyle}
        onChange={(e) => handleChange(e)}
      >
        Cha <br />
        {Stat()}{" "}
      </input> */}
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
  8-9 = -1 - for every number two above or below 10/11 you gain a +/- modifer shows how good you are at something
  10-11 = 0 -average person
  12-13 = +1
  14-15 = +2
  16-17 = +3
  18 = +4
 


 Passive Senses  (quick arithmatic )
 Perception = Wis Modifier + 10
 Investigation = Int Modifier + 10
 Insight = Wis Modifier + 10

*/

//POST MVP randomly select two Stats on senses to add a Profienciency in

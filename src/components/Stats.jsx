import React from "react";


function Stats(props) {
  const { randomNumber, mod, getStat } = props;

  let perception = mod.Wis + 10;
  

  let investigation = mod.Int + 10;

  const style = {
    display: "flex",
    justifyContent: "center",
  };

  const statStyle = {
    margin: 80,
    border: "solid black",
    padding: 20,
  };

  return (
    <div style={style}>
      <h2 style={statStyle}>
        Dex: <br />
        {randomNumber.Dex}
        <br />
        <h4>{mod.Dex}</h4>
      </h2>
      <h2 style={statStyle}>
        Str: <br />
        {randomNumber.Str} <br />
        <h4>{mod.Str}</h4>
      </h2>
      <h2 style={statStyle}>
        Con: <br />
        {randomNumber.Con}
        <br /> <h4>{mod.Con}</h4>
      </h2>
      <h2 style={statStyle}>
        Int: <br />
        {randomNumber.Int}
        <br /> <h4>{mod.Int}</h4>
      </h2>
      <h2 style={statStyle}>
        Wis: <br />
        {randomNumber.Wis}
        <br /> <h4>{mod.Wis}</h4>
      </h2>
      <h2 style={statStyle}>
        Cha: <br />
        {randomNumber.Cha}
        <br />
        <h4>{mod.Cha}</h4>
      </h2>
      <div className='Senses'>
        <h2>Perception: {perception}</h2>
        <h2>Investigation: {investigation}</h2>
        <h2>Insight: {perception}</h2>
      </div>
    </div>
  );
}

export default Stats;

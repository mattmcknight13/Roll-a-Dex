import React from "react";

function Stats(props) {
  const { randomNumber, mod, getStat } = props;

  let wisSense = mod.Wis + 10;

  let intSense = mod.Int + 10;

  const style = {
    display: "flex",
    justifyContent: "center",
  };

  const statStyle = {
    margin: 60,
    border: "solid black",
    padding: 20,
  };

  const modStyle = {
    border: "solid black",
    borderRadius: `50%`,
    height: `20px`,
    width: `20px`,
    marginTop: 130,
  };

  return (
    <div style={style}>
      <h2 style={statStyle}>
        Dex <br />
        {randomNumber.Dex}
      </h2>
      
        <h4 style={modStyle}>{mod.Dex}</h4>
      <h2 style={statStyle}>
        Str <br />
        {randomNumber.Str} 
      </h2>
      <br /><h4 style={modStyle}>{mod.Str}</h4>
      <h2 style={statStyle}>
        Con <br />
        {randomNumber.Con}
      </h2>
      <br /> <h4 style={modStyle}>{mod.Con}</h4>
      <h2 style={statStyle}>
        Int <br />
        {randomNumber.Int}
      </h2>
      <br /> <h4 style={modStyle}>{mod.Int}</h4>
      <h2 style={statStyle}>
        Wis <br />
        {randomNumber.Wis}
      </h2>
      <br /> <h4 style={modStyle}>{mod.Wis}</h4>
      <h2 style={statStyle}>
        Cha <br />
        {randomNumber.Cha}
      </h2>
      <br />
      <h4 style={modStyle}>{mod.Cha}</h4>
      <div className="Senses">
        <h2>Perception: {wisSense}</h2>
        <h2>Investigation: {intSense}</h2>
        <h2>Insight: {wisSense}</h2>
      </div>
    </div>
  );
}

export default Stats;

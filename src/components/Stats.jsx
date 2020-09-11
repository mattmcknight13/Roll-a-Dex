import React from "react";
import "./Stats"

function Stats(props) {
  const { randomNumber, mod } = props;

  let wisSense = mod.Wis + 10;

  let intSense = mod.Int + 10;

  const style = {
    display: "flex",
    justifyContent: "center",
    
  };

  const statStyle = {
    border: "solid black",
    padding: 20,
    marginRight: 80,
    backgroundColor: 'white'
  };

  const modStyle = {
    border: "solid black",
    borderRadius: `50%`,
    backgroundColor: `white`,
    marginTop: `-10px`,
    marginLeft: `-130px`,
    height: 20,
    width: 40, 
  };

  const senseStyle = {
    display: `flex`,
    flexDirection: `column`,
    marginLeft: `200px`,
    border: `solid black`,
    width: `200px`,
    backgroundColor: `white`
  };

 
  return (
    <div>
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
        <br />
        <h4 style={modStyle}>{mod.Str}</h4>
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
      </div>
      <div className="senses" style={senseStyle}>
        <h1>Senses</h1>
        <hr style={{color: ` black`, width: 190}}/>
        <h2>Perception: {wisSense}</h2>
        <h2>Investigation: {intSense}</h2>
        <h2>Insight: {wisSense}</h2>
      </div>
    </div>
  );
}

export default Stats;

import React from "react";
import "./Stats.css";

function Stats(props) {
  const { randomNumber, mod } = props;

  let wisSense = mod.Wis + 10;

  let intSense = mod.Int + 10;

  // const style = {
  //   display: "flex",
  //   justifyContent: "center",
  // };

  const statStyle = {
    border: "solid black",
    padding: 20,
    marginRight: 80,
    backgroundColor: "white",
    width: `50px`,
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
    backgroundColor: `white`,
  };
  return (
    <div>
      <div className="style">
        <h2 className="box">
          Dex <br />
          {randomNumber.Dex}
        </h2>
        <h4 style={modStyle}>{mod.Dex}</h4>
        <h2 className="box">
          Str <br />
          {randomNumber.Str}
        </h2>
        <br />
        <h4 style={modStyle}>{mod.Str}</h4>
        <h2 className="box">
          Con <br />
          {randomNumber.Con}
        </h2>
        <br /> <h4 style={modStyle}>{mod.Con}</h4>
        <h2 className="box">
          Int <br />
          {randomNumber.Int}
        </h2>
        <br /> <h4 style={modStyle}>{mod.Int}</h4>
        <h2 className="box">
          Wis <br />
          {randomNumber.Wis}
        </h2>
        <br /> <h4 style={modStyle}>{mod.Wis}</h4>
        <h2 className="box">
          Cha <br />
          {randomNumber.Cha}
        </h2>
        <br />
        <h4 style={modStyle}>{mod.Cha}</h4>
      </div>

      <div className="senses">
        <h1 className="sense">Senses</h1>
        <hr className="bar" />
        <h2 className="sense">Perception: {wisSense}</h2>
        <h2 className="sense">Investigation: {intSense}</h2>
        <h2 className="sense">Insight: {wisSense}</h2>
      </div>
    </div>
  );
}

export default Stats;

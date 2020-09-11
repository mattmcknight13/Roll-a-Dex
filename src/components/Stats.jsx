import React from "react";
import "./Stats.css";

function Stats(props) {
  const { randomNumber, mod } = props;

  let wisSense = mod.Wis + 10;

  let intSense = mod.Int + 10;

  return (
    <div>
      <div className="style">
        <h2 className="box">
          Dex <br />
          {randomNumber.Dex}
        </h2>
        <h4 className="mod">{mod.Dex}</h4>
        <h2 className="box">
          Str <br />
          {randomNumber.Str}
        </h2>
        <br />
        <h4 className="mod">{mod.Str}</h4>
        <h2 className="box">
          Con <br />
          {randomNumber.Con}
        </h2>
        <br /> <h4 className="mod">{mod.Con}</h4>
        <h2 className="box">
          Int <br />
          {randomNumber.Int}
        </h2>
        <br /> <h4 className="mod">{mod.Int}</h4>
        <h2 className="box">
          Wis <br />
          {randomNumber.Wis}
        </h2>
        <br /> <h4 className="mod">{mod.Wis}</h4>
        <h2 className="box">
          Cha <br />
          {randomNumber.Cha}
        </h2>
        <br />
        <h4 className="mod">{mod.Cha}</h4>
      </div>

      <div className="senses">
        <p className="sense">Senses</p>
        <hr className="bar" />
        <p className="sense">Perception: {wisSense}</p>
        <p className="sense">Investigation: {intSense}</p>
        <p className="sense">Insight: {wisSense}</p>
      </div>
    </div>
  );
}

export default Stats;

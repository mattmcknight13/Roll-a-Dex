// import React from "react";
// // import { Switch } from "react-router-dom";

// function Stats(props) {
//   const {randomNumber, mod, getStat } = props

//   function handleChange(e) {
//     const { name } = e.target;
//     const value = getStat();
//     randomNumber({
//       [name]: value,
//     });
//   }

//   const style = {
//     display: "flex",
//     justifyContent: "center",
//   };

//   const statStyle = {
//     margin: 100,
//     border: "solid green",
//     padding: 20,
//   };

//   return (
//     <div style={style}>
//         <input name="Dex" value={randomNumber.Dex} style={statStyle} onChange={(e) => handleChange(e)}>Dex <br />{randomNumber.Dex}</input>
//         <input name="Str" value={randomNumber.Str} style={statStyle} onChange={(e) => handleChange(e)}> Str <br />{randomNumber.Str}</input>
//         <input name="Con" value={randomNumber.Con} style={statStyle} onChange={(e) => handleChange(e)}>Con <br />{randomNumber.Con}</input>
//         <input name="Int" value={randomNumber.Int} style={statStyle} onChange={(e) => handleChange(e)}>Int <br />{randomNumber.Int}</input>
//         <input name="Wis" value={randomNumber.Wis} style={statStyle} onChange={(e) => handleChange(e)}>Wis <br />{randomNumber.Wis}</input>
//         <input name="Cha" value={randomNumber.Cha} style={statStyle} onChange={(e) => handleChange(e)}> Cha <br/>{randomNumber.Cha}</input> 
//      </div>   
//   );
// }




export default Stats;


import React, { useState } from "react";
import axios from "axios";
import RandomButton from "./RandomButton";
import { Route } from "react-router-dom";

//get call
const GetNpc = (props) => {
  const { npcKey, npc, getRandomNpc } = props;



  return (
    <div className="randomnpc">
      <>
        <RandomButton getRandomNpc={getRandomNpc} />
        {npc.map((n, idx) => (
          <p className={npcKey[idx]} key={idx}>
            {n}
          </p>
        ))}
      </>
    </div>
  );
};

export default GetNpc;

// render information to  character sheet

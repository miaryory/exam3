import React from "react";

const name = "Angel";

function RandomNum() {
  return Math.floor(Math.random() * 5) + 1;
}
const number = RandomNum();

const emoji = `./temp_assets/${number}.png`;
export default function Gameplace() {
  return (
    <div>
      <p>This is where the game goes</p>
      <p>
        my name is {name}, and i have {number} cats
      </p>
      <img src={require(`${emoji}`)} alt="random emoji"></img>
    </div>
  );
}

import React from "react";

function FindEmoji() {
  function RandomNum() {
    return Math.floor(Math.random() * 5) + 1;
  }
  const number = RandomNum();
  const emoji = `./temp_assets/${number}.png`;
  return emoji;
}

let emoji1 = FindEmoji();
let emoji2 = FindEmoji();
let emoji3 = FindEmoji();
let gamestatus = "nothing";

function CheckForWin() {

  console.log(emoji1, emoji2, emoji3);
  if (emoji1 === emoji2 && emoji2 === emoji3) {
    gamestatus = "win";
    console.log(gamestatus);
    return gamestatus;
  } else {
    gamestatus = "lose";
    console.log(gamestatus);
    return gamestatus;
  }
}


CheckForWin();

//*click spin > run game code to find new emojis and display them > then 

export default function Gameplace() {
  return (
    <div>
      <p>This is where the game goes</p>
      <img src={require(`${emoji1}`)} alt="random emoji"></img>
      <img src={require(`${emoji2}`)} alt="random emoji"></img>
      <img src={require(`${emoji3}`)} alt="random emoji"></img>
      <button>Spin</button>
    </div>
  );
}

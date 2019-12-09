import React from "react";
import "./Game.css";
import machineImg from "./assets/slotmachine.svg";

const default_emoji1 = `./assets/dice/placeholder.svg`;
const default_emoji2 = `./assets/dice/placeholder.svg`;
const default_emoji3 = `./assets/dice/placeholder.svg`;
const default_gamestatus = "";
let counter = 0;
let winstatus;



function rungame() {
  if (localStorage.getItem("winstatus") == "true") {
    alert("you already won")
  } else if (localStorage.getItem("tries") >= 3) {
    alert("max 3 tries!")
  } else {
    counter++;
    let emoji1 = FindEmoji();
    let emoji2 = FindEmoji();
    let emoji3 = FindEmoji();
    let gamestatus = CheckForWin(emoji1, emoji2, emoji3);
    console.log(gamestatus);
    console.log(counter);
    localStorage.setItem("tries", counter);
    return {
      emoji1: emoji1,
      emoji2: emoji2,
      emoji3: emoji3,
      gamestatus: gamestatus
    }
  }
}

function FindEmoji() {
  function RandomNum() {
    return Math.floor(Math.random() * 7) + 1;
  }
  const number = RandomNum();
  const emoji = `./assets/dice/${number}.svg`;
  return emoji;
}

function CheckForWin(emoji1, emoji2, emoji3) {
  console.log(emoji1, emoji2, emoji3)
  let gamestatus = default_gamestatus;

  if (emoji1 === emoji2 && emoji2 === emoji3) {
    gamestatus = "win";
    localStorage.setItem("winstatus", "true");
  } else {
    gamestatus = "lose";
  }
  return gamestatus;

}
//reee this is not working yet aaaaaaaaaa
/*function AlertFunk(gamestatus){
  alert(gamestatus);
}*/


export default class Gameplace extends React.Component {
  ///read react docs about this part - got that from there thanks to idw :)))
  constructor(props) {
    super(props);
    this.state = {
      emoji1: default_emoji1,
      emoji2: default_emoji2,
      emoji3: default_emoji3,
      gamestatus: default_gamestatus
    };
    this.spin = this.spin.bind(this); //this is a boilerplate for ES6 because of  a quirk thank u idw :)))

  }



  //spin! it spin!!!
  spin() {
    this.setState(rungame());

    /*AlertFunk();*/

  }

  render() {
    return ( <
      div id = "fullGame" >
      <
      div id = "mainRow" >
      <
      div id = "machineWrap" >
      <
      button onClick = {
        this.spin
      }
      id = "spinBTN" > Spin < /button> <
      div id = "whiteBox" > < /div> <
      img src = {
        machineImg
      }
      alt = "slotmachine"
      id = "machineImg" / >
      <
      /div> <
      div id = "dice" >
      <
      img src = {
        require(`${this.state.emoji1}`)
      }
      alt = "random emoji"
      className = "oneEmoji" > < /img> <
      img src = {
        require(`${this.state.emoji2}`)
      }
      alt = "random emoji"
      className = "oneEmoji" > < /img> <
      img src = {
        require(`${this.state.emoji3}`)
      }
      alt = "random emoji"
      className = "oneEmoji"
      id = "lastemoji" > < /img> <
      /div>

      <
      p > {
        this.state.gamestatus
      } < /p> <
      /div>

      <
      /div>

    );
  }
}
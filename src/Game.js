import React from "react";
import "./Game.css";

const default_emoji1 = `./temp_assets/wot.png`;
const default_emoji2 = `./temp_assets/wot.png`;
const default_emoji3 = `./temp_assets/wot.png`;
const default_gamestatus = "nothing";

function rungame() {
  let emoji1 = FindEmoji();
  let emoji2 = FindEmoji();
  let emoji3 = FindEmoji();
  let gamestatus = CheckForWin(emoji1, emoji2, emoji3);
  console.log(gamestatus);

  return {
    emoji1: emoji1,
    emoji2: emoji2,
    emoji3: emoji3,
    gamestatus: gamestatus
  }

}

function FindEmoji() {
  function RandomNum() {
    return Math.floor(Math.random() * 5) + 1;
  }
  const number = RandomNum();
  const emoji = `./temp_assets/${number}.png`;
  return emoji;
}

function CheckForWin(emoji1, emoji2, emoji3) {
  console.log(emoji1, emoji2, emoji3)
  let gamestatus = default_gamestatus;

  if (emoji1 === emoji2 && emoji2 === emoji3) {
    gamestatus = "win";
  } else {
    gamestatus = "lose";
  }
  return gamestatus;
}



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
  }

  render() {
    return (
      <div id="fullGame" >
        <div id="mainRow">
          <p>Click "Spin" to start</p>
          <img src={require(`${this.state.emoji1}`)} alt="random emoji" className="oneEmoji"></img>
          <img src={require(`${this.state.emoji2}`)} alt="random emoji" className="oneEmoji"></img>
          <img src={require(`${this.state.emoji3}`)} alt="random emoji" className="oneEmoji"></img>
          <p>you {this.state.gamestatus} !</p>
        </div>
        <button onClick={this.spin}>Spin</button>
      </div>

    );
  }
}

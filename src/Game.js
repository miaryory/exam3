import React from "react";
import "./Game.css";
import machineImg from "./assets/slotmachine.svg";

const default_emoji1 = `./assets/dice/placeholder.svg`;
const default_emoji2 = `./assets/dice/placeholder.svg`;
const default_emoji3 = `./assets/dice/placeholder.svg`;
const default_gamestatus = "";
let counter = 0;

function rungame(current_gamestate) {
  if (localStorage.getItem("winstatus") === "true") {
    alert("you already won");
    return current_gamestate;
  } else if (localStorage.getItem("tries") >= 4) {
    alert("max 3 tries!");
    return current_gamestate;
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
      ...current_gamestate,
      emoji1: emoji1,
      emoji2: emoji2,
      emoji3: emoji3,
      gamestatus: gamestatus
    };
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
  console.log(emoji1, emoji2, emoji3);
  let gamestatus = default_gamestatus;

  if (emoji1 === emoji2 && emoji2 === emoji3) {
    gamestatus = "win";
    localStorage.setItem("winstatus", "true");
  } else {
    gamestatus = "lose";
    localStorage.setItem("winstatus", "false");
  }
  return gamestatus;
}

function alerting(gamestatus) {
  if (gamestatus === "win") {
    alert(
      "Congratulations! You just won 5 extra rows with your next Lucky7 purchase :)"
    );
  } else if (gamestatus === "lose" && counter < 4) {
    alert("You lost, try again!");
    console.log(gamestatus);
  } else if (gamestatus === "lose" && counter === 4) {
    alert("unfortunately you've lost and run out of tries.");
  }
}

export default class Gameplace extends React.Component {
  ///read react docs about this part
  constructor(props) {
    super(props);
    this.state = {
      game_state: {
        emoji1: default_emoji1,
        emoji2: default_emoji2,
        emoji3: default_emoji3,
        gamestatus: default_gamestatus
      },
      animation_state: {
        animation1: false,
        animation2: false,
        animation3: false,
        waitForSpin: false
      }
    };
    this.spin = this.spin.bind(this); //this is a boilerplate for ES6 because of  a quirk in JS: https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
    this.animationEndAndUpdate = this.animationEndAndUpdate.bind(this);
  }

  //
  //spin! it spin!!!
  //spread syntax
  spin(current_state) {
    let new_state = {
      ...current_state,
      animation_state: { ...current_state.animation_state, waitForSpin: false },
      game_state: rungame(current_state.game_state)
    };
    //alerting();
    return new_state;
  }

  //reset animations then spin

  animationEndAndUpdate(new_state) {
    if (
      new_state.animation_state.waitForSpin === true &&
      new_state.animation_state.animation1 === false &&
      new_state.animation_state.animation2 === false &&
      new_state.animation_state.animation3 === false
    ) {
      this.setState(this.spin(new_state));
    } else {
      this.setState(new_state);
    }
  }

  /*note*/
  render() {
    const spinClick = () => {
      localStorage.setItem("subscribed", false);
      // we need an  onclick for the submit button on the form that changes the localstorage to true.
      if (
        localStorage.getItem("subscribed") === "false" &&
        localStorage.getItem("tries") >= 1
      ) {
        alert("subscribe to our newsletter for 3 more tries");
        console.log("subsribe form goes here");
      } else {
        this.setState({
          ...this.state,
          animation_state: {
            ...this.state.animation_state,
            animation1: true,
            animation2: true,
            animation3: true,
            waitForSpin: true
          }
        });
      }
    };
    ///the animation code is heavily inspired by https://stackoverflow.com/questions/24111813/how-can-i-animate-a-react-js-component-onclick-and-detect-the-end-of-the-animati

    const animation1end = () => {
      this.animationEndAndUpdate({
        ...this.state,
        animation_state: {
          ...this.state.animation_state,
          animation1: false
        }
      });
    };

    const animation2end = () => {
      this.animationEndAndUpdate({
        ...this.state,
        animation_state: {
          ...this.state.animation_state,
          animation2: false
        }
      });
    };

    const animation3end = () => {
      this.animationEndAndUpdate({
        ...this.state,
        animation_state: {
          ...this.state.animation_state,
          animation3: false
        }
      });
    };

    const defaultClassnames = "oneEmoji";
    const animationClasses = "oneEmoji oneEmojiAnim";

    return (
      <div id="fullGame">
        <div id="mainRow">
          <div id="machineWrap">
            <button onClick={() => spinClick()} id="spinBTN">
              Spin
            </button>
            <img src={machineImg} alt="slotmachine" id="machineImg" />
          </div>
          <div id="dice">
            <img
              src={require(`${this.state.game_state.emoji1}`)}
              alt="random emoji"
              className={
                this.state.animation_state.animation1
                  ? animationClasses
                  : defaultClassnames
              }
              onAnimationEnd={() => animation1end()}
            ></img>
            <img
              src={require(`${this.state.game_state.emoji2}`)}
              alt="random emoji"
              className={
                this.state.animation_state.animation1
                  ? animationClasses
                  : defaultClassnames
              }
              onAnimationEnd={() => animation2end()}
            ></img>
            <img
              src={require(`${this.state.game_state.emoji3}`)}
              alt="random emoji"
              className={
                this.state.animation_state.animation1
                  ? animationClasses
                  : defaultClassnames
              }
              onAnimationEnd={() => animation3end()}
              id="lastemoji"
            ></img>
          </div>
          <p> {this.state.gamestatus} </p>
        </div>
      </div>
    );
  }
}

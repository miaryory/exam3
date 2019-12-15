import React from "react";
import "./App.css";
import icon_math from "./assets/icons/mathicon.svg";
import icon_numbers from "./assets/icons/numbersicon.svg";
import icon_person from "./assets/icons/personicon.svg";
import icon_luck from "./assets/icons/leaficon.svg";


export default function FourOptions() {
  return (
    <div>
      <div className="fourThings">
        <div className="oneItem">
          <img src={icon_person} alt="icon of person" className="FOimg" ></img>
          <h2 className="FOh2">Create an account!</h2>
          <p className="FOp">You need to create an account to play lucky7</p>
          <button className="FObutton">Create an account</button>
        </div>
        <div className="oneItem">
          <img src={icon_numbers} alt="icon of numbers" className="FOimg" ></img>
          <h2 className="FOh2">Choose your own!</h2>
          <p className="FOp">Chose your own numbers for each of your rows</p>
          <button className="FObutton">Play Now</button>
        </div>
        <div className="oneItem">
          <img src={icon_luck} alt="icon of luck" className="FOimg" ></img>
          <h2 className="FOh2">Lucky 7s!</h2>
          <p className="FOp">Pick you lucky numbers, and have them appear in your rows</p>
          <button className="FObutton">Play Now</button>
        </div>
        <div className="oneItem">
          <img src={icon_math} alt="icon of math" className="FOimg" ></img>
          <h2 className="FOh2">Systematic Lucky7!</h2>
          <p className="FOp">For a more mathematical approach to the game, play Systematic Lucky7</p>
          <button className="FObutton">Play Now</button>
        </div>
      </div>
    </div>
  );
}

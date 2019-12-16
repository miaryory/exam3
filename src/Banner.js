import React from "react";
import "./Banner.css";
import Countdown from "./Countdown";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <div className="countdown">
          <p>Next Draw: </p>
          <Countdown />
        </div>
        <h1 className="price">6 000 000 kr</h1>
        <p className="slogan">Take your chance. Play Lucky 7.</p>
        <button className="button-scroll">
          <a className="scroll-down" href="#fullGame">
            {" "}
          </a>
        </button>
      </div>
    </div>
  );
}

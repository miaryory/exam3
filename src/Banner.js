import React from "react";
import "./Banner.css";
import Countdown from "./Countdown";

export default function Banner() {
  return (
    <div className="banner">
      <svg
        width="400"
        height="100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          id="shootingstar"
          x1="390"
          x2="390"
          y1="10"
          y2="10"
          stroke="white"
          strokeWidth="0.4"
        >
          <animate
            attributeName="x1"
            from="390"
            to="0"
            begin="0.5s"
            dur="0.5s"
            repeatCount="once"
            fill="freeze"
          />

          <animate
            attributeName="y1"
            from="10"
            to="100"
            begin="0.5s"
            dur="0.5s"
            repeatCount="once"
            fill="freeze"
          />
        </line>
      </svg>
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

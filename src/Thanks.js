import React from "react";
import "./App.css";
import mark from "./assets/mark.png";

export default function Thanks(props) {
  return (
    <div className="subscribe-container">
      <img id="mark" alt="mark" src={mark}></img>
      <h1 className="welcome">THANK YOU!</h1>
      <h5 className="acount-thanks">Thank you for subscribing!</h5>
      <p className="acount-message">
        Your acount was created and you're now a member of Lucky 7 website.
      </p>
    </div>
  );
}

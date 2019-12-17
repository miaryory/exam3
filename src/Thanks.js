import React from "react";
import "./App.css";
import mark from "./assets/mark.png";

export default function Thanks(props) {
  return (
    <div className="thank-modal">
      <img id="mark" alt="mark" src={mark}></img>
      <h1 className="welcome">THANK YOU FOR SUBSCRIBING!</h1>
      <p className="acount-message">
        Your acount was created and you're now a member of Lucky 7 website.
        <br />
        The email will be sent to <b>{props.email}</b>
      </p>
    </div>
  );
}

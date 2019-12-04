import React from "react";
import "./Footer.css";
import BtnForm from "./BtnForm";

export default function Footer() {
  return (
    <>
      <BtnForm />
      <footer>
        <div id="col1">
          <h3>Title here</h3>

          <ul>
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#c">Link3</a>
            </li>
          </ul>
        </div>
        <div id="col2">
          <h3>Title here</h3>
          <ul>
            <li>
              <a href="#">Link4</a>
            </li>
            <li>
              <a href="#">Link5</a>
            </li>
            <li>
              <a href="#c">Link6</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

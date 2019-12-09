import React from "react";
import "./Footer.css";
import CreateAcount from "./CreateAcount";
import CreateAcount2 from "./CreateAcount2";
import CreateAcount3 from "./CreateAcount3";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <>
      <Subscribe />
      <CreateAcount />
      <CreateAcount2 />
      <CreateAcount3 />

      <footer>
        <p>© 2019 LUCKY 7 </p>
        <div id="col1">
          <h3>Title here</h3>

          <ul>
            <li>
              <a href="#">Privacy Policy</a>
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

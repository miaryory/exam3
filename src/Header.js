import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import logo from "./temp_assets/logo.png";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import { Button } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <img id="logoImg" src={logo}></img>
      <nav id="desktop-nav">
        <ul>
          <li>
            <a href="#home">Section1</a>
          </li>
          <li>
            <a href="#news">Section2</a>
          </li>
          <li>
            <a href="#contact">Section3</a>
          </li>
          <li>
            <a onClick={handleShow} href="#about">
              Log in
            </a>
          </li>
        </ul>
      </nav>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Form here!{Login}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}

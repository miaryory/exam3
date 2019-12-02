import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./Header.css";
import Login from "./Login";
import logo from "./temp_assets/logo.png";

Modal.setAppElement("body");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // height: "50%",
    // width: "40%",
    // paddingTop: "80px"
    padding: "80px 50px 20px"
  }
};

export default function Header() {
  // var subtitle;
  var close;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Add style here
    close.style.color = "#aaa";
    close.style.backgroundColor = "white";
    close.style.float = "right";
    close.style.fontSize = "30px";
    close.style.fontWeight = "700";
    close.style.marginRight = "-6px";
    close.style.marginTop = "-69px";
    close.style.border = "none";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <header id="header">
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
              <a onClick={openModal} href="#about">
                Log in
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal LogIn"
      >
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <button ref={_close => (close = _close)} onClick={closeModal}>
          &times;
        </button>
        <div>
          <Login />
        </div>
      </Modal>
    </div>
  );
}

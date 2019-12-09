import React from "react";
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
    padding: "10px 50px 20px",
    width: "530px"
  }
};

export default function Header() {
  var close;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Style for modal
    close.style.color = "#aaa";
    close.style.backgroundColor = "white";
    close.style.float = "right";
    close.style.fontSize = "30px";
    close.style.fontWeight = "700";
    close.style.marginRight = "-32px";
    close.style.marginTop = "-10px";
    close.style.border = "none";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
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
              <a onClick={openModal} href="#about">
                Log in
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal LogIn"
      >
        <button ref={_close => (close = _close)} onClick={closeModal}>
          &times;
        </button>
        <h3 className="login-title">Welcome back!</h3>
        <Login />
        <p className="login-forget">Did you forget your password?</p>
        {/* <h6>Create acount</h6> */}
        <h6 className="login-new"> I'm new here</h6>
        <button className="login-singup">Sign up</button>
      </Modal>
    </div>
  );
}

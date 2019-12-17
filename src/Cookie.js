import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "react-modal";

Modal.setAppElement("body");
//  Style for modal
const customStyles = {
  content: {
    top: "auto",
    left: "0",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    transform: "translate(0%, 0%)",
    padding: "20px",
    paddingLeft: "0px",
    overflow: "hidden",
    width: "100%",
    height: "100px",
    bottom: "0"
  }
};

export default function Cookie() {
  let close;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    //style for close button
    close.style.color = "#aaa";
    close.style.backgroundColor = "white";
    close.style.float = "right";
    close.style.fontSize = "30px";
    close.style.fontWeight = "700";
    close.style.border = "none";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Cookie"
      >
        <div>
          <button ref={_close => (close = _close)} onClick={closeModal}>
            &times;
          </button>
          <h3>This site uses cookies</h3>
          <p className="cookie-p">
            WE use cookies to ensure you get the best experience. By using our
            wewbsite you agree to our <span>Cookie Policy.</span>
          </p>
          <button className="cookie-btn"> Got it</button>
        </div>
      </Modal>
    </>
  );
}

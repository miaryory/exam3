import React from "react";
import "./App.css";
import Modal from "react-modal";
import icon_math from "./assets/icons/mathicon.svg";
import icon_numbers from "./assets/icons/numbersicon.svg";
import icon_person from "./assets/icons/personicon.svg";
import icon_luck from "./assets/icons/leaficon.svg";
import CreateAccount from "./CreateAcount";

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
    width: "70%",
    height: "93%"
  }
};

export default function FourOptions(props) {
  let close;
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

  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
        <CreateAccount users={props.users} />
      </Modal>
      <div>
        <div id="fourThings">
          <div className="oneItem">
            <img src={icon_person} alt="icon of person" className="FOimg"></img>
            <h2 className="FOh2">Create an account!</h2>
            <p className="FOp">You need to create an account to play Lucky 7</p>
            <button className="FObutton" onClick={openModal}>
              Create an account
            </button>
          </div>
          <div className="oneItem">
            <img
              src={icon_numbers}
              alt="icon of numbers"
              className="FOimg"
            ></img>
            <h2 className="FOh2">Choose your own!</h2>
            <p className="FOp">Chose your own numbers for each of your rows</p>
            <button className="FObutton">Play Now</button>
          </div>
          <div className="oneItem">
            <img src={icon_luck} alt="icon of luck" className="FOimg"></img>
            <h2 className="FOh2">The Lucky 7s!</h2>
            <p className="FOp">
              Pick your lucky numbers, and have them appear in your rows
            </p>
            <button className="FObutton">Play Now</button>
          </div>
          <div className="oneItem">
            <img src={icon_math} alt="icon of math" className="FOimg"></img>
            <h2 className="FOh2">Systematic Lucky 7!</h2>
            <p className="FOp">
              For a more mathematical approach to the game, play Systematic
              Lucky 7
            </p>
            <button className="FObutton">Play Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

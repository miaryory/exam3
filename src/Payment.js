import React from "react";
import "./App.css";
import useForm from "react-hook-form";
import Modal from "react-modal";
import Card from "./Card";
import cards from "./temp_assets/cards.PNG";

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
    paddingLeft: "0px",
    width: "80%",
    height: "93%"
  }
};

export default function Payment() {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    console.log(data);
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0.3
      }}
    />
  );

  // MODAL
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
    close.style.marginRight = "-32px";

    close.style.border = "none";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Open payment</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Subscribe"
      >
        <div className="acount-container">
          <button ref={_close => (close = _close)} onClick={closeModal}>
            &times;
          </button>
          {/* <div className="payment-grid"> */}
          <h1 className="payment-title">Payment information</h1>
          <ColoredLine color="gray" />
          <div className="payment-grid">
            <h4 className="payment-products-title">My products</h4>
            <p className="payment-products">5 rows</p>
            <div className="payment-total-container">
              <h4 className="payment-total">Total</h4>
              <p className="payment-price">100 dkk</p>
              <ColoredLine color="gray" />
            </div>

            <h4 className="payment-method">Payment Method</h4>
            <img className="cards" src={cards}></img>

            <form
              className="form-acount-container"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="pay-label">Card</label>
              <div className="pay-div">
                <Card />
              </div>
              <label htmlFor="submit"></label>
              <input
                className="form-payment-submit"
                type="submit"
                value="PAY"
              />
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./App.css";
import useForm from "react-hook-form";
import Modal from "react-modal";
import Thanks from "./Thanks";

Modal.setAppElement("body");
//  Style for modal
const customStyles = {
  content: {
    top: "50%",
    left: "51%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    paddingLeft: "0px"
  }
};

export default function Subscribe(props) {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });

  //get email input from the user
  const [userEmail, setEmail] = useState(" ");
  const [thanks, setThanks] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://kea3rdsemester-91fd.restdb.io/rest/" +
        "newsletter?fetchchildren=true",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "5d887df9fd86cb75861e2626",
          "cache-control": "no-cache"
        }
      }
    )
      .then(e => e.json())
      .then(e => setUsers(e));
  }, []);

  const newMember = mail => {
    const data = {
      email: mail
    };

    const postData = JSON.stringify(data);
    fetch("https://kea3rdsemester-91fd.restdb.io/rest/newsletter", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5d887df9fd86cb75861e2626",
        "cache-control": "no-cache"
      },
      body: postData
    })
      .then(res => res.json())
      .then(() => {
        users.push(data);
      });
  };

  //checking if the user is already stocked in the DB
  function isMember(a, obj) {
    var i = a.length;
    while (i--) {
      if (a[i].email === obj) {
        return true;
      }
    }
    return false;
  }

  const onSubmit = () => {
    //props.closeIt();
    if (!isMember(users, userEmail)) {
      newMember(userEmail);
      localStorage.setItem("subscribed", true);
      setThanks(true);
    } else {
      alert("You already Subscribed!");
    }
  };

  // MODAL
  let close;

  function afterOpenModal() {
    //style for close button
    close.style.color = "#aaa";
    close.style.backgroundColor = "white";
    // close.style.float = "right";
    close.style.fontSize = "30px";
    close.style.fontWeight = "700";
    close.style.border = "none";
  }

  return (
    <>
      <Modal
        isOpen={props.display}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeIt}
        style={customStyles}
        contentLabel="Modal Subscribe"
      >
        <div className="subscribe-container">
          <button
            className="subscribe-close"
            ref={_close => (close = _close)}
            onClick={props.closeIt}
          >
            &times;
          </button>
          {thanks ? (
            <>
              <Thanks email={userEmail} />
            </>
          ) : (
            <>
              <h1>Do you want more free spins?</h1>
              <h5>Subscribe to our newsletter and get 3 spins for FREE!</h5>
              <form
                className="form-subscribe-container"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="email-input"
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  placeholder="Enter your email..."
                  type="text"
                  ref={register({
                    required: "This is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="error-msg-email">{errors.email.message}</p>
                )}
                <div>
                  <label
                    htmlFor="subscribeCheckbox"
                    className="subscribe-label-checkbox"
                  >
                    Yes, I want to subscribe for LUCKY 7 newsletter. I have read
                    and agree to the Website Terms of Use. View our privacy
                    policy
                    <input
                      className="subscribeCheckbox"
                      name="subscribeCheckbox"
                      type="checkbox"
                      ref={register({
                        required: "This is required"
                      })}
                    />
                  </label>
                  {errors.subscribeCheckbox && (
                    <p>{errors.subscribeCheckbox.message}</p>
                  )}
                </div>

                <input className="form-subscribe-submit" type="Submit" />
              </form>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

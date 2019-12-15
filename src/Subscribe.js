import React, { useState, useEffect } from "react";
import "./App.css";
import useForm from "react-hook-form";
import Modal from "react-modal";

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
    paddingLeft: "0px"
  }
};

export default function Subscribe(props) {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });

  //get email input from the user
  const [userEmail, setEmail] = useState(" ");

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
        alert("Successfully subsribed!");
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
    props.closeIt();
    if (!isMember(users, userEmail)) {
      newMember(userEmail);
    } else {
      alert("You already Subscribed!");
    }
  };

  // MODAL
  let close;

  function afterOpenModal() {
    // Add style here
    close.style.color = "#aaa";
    close.style.backgroundColor = "white";
    close.style.float = "right";
    close.style.fontSize = "30px";
    close.style.fontWeight = "700";
    // close.style.marginRight = "-32px";
    // close.style.marginTop = "-180px";
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
          <h1>Do you want more free spins?</h1>
          <h5>
            Subscribe to our newsletter and get <span>3</span> spins for FREE!
          </h5>
          <form
            className="form-subscribe-container"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button
              className="subscribe-close"
              ref={_close => (close = _close)}
              onClick={props.closeIt}
            >
              &times;
            </button>

            <input
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
            {errors.email && <p>{errors.email.message}</p>}

            <input className="form-subscribe-submit" type="Submit" />

            <input
              className="subscribeCheckbox"
              name="subscribeCheckbox"
              type="checkbox"
              ref={register({
                required: "This is required"
              })}
            />
            <label
              htmlFor="subscribeCheckbox"
              className="subscribe-label-checkbox"
            >
              Yes, I want to subscribe for LUCKY 7 newsletter. I have read and
              agree to the Website Terms of Use. View our privacy policy
              {/* <input
                className="subscribeCheckbox"
                name="subscribeCheckbox"
                type="checkbox"
                ref={register({
                  required: "This is required"
                })}
              /> */}
            </label>
            {errors.subscribeCheckbox && (
              <p>{errors.subscribeCheckbox.message}</p>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
}

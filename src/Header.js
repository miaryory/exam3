import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Header.css";
//import Login from "./Login";
import logo from "./temp_assets/logo.png";
import useForm from "react-hook-form";
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
    width: "530px"
  }
};

export default function Header() {
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

  /************************* */
  const { register, errors } = useForm({ mode: "onChange" });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://kea3rdsemester-91fd.restdb.io/rest/" +
        "subscribers?fetchchildren=true",
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

  const [email, setEmail] = useState(" ");

  const [password, setPassword] = useState(" ");

  const [logged, setLogStatus] = useState(false);

  const submit = evt => {
    evt.preventDefault();
    users.map(user => {
      if (email === user.email && password === user.password) {
        setLogStatus(true);
      }
    });
  };

  const handleLogOut = evt => {
    evt.preventDefault();
    setLogStatus(false);
    closeModal();
    alert("You are logged out");
  };

  const [newuser, setNewUser] = useState(false);
  const handleNewUser = evt => {
    evt.preventDefault();
    setNewUser(true);
  };

  /********************** */

  if (logged) {
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
                <a onClick={handleLogOut} href="#about">
                  Log out
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  } else {
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

          {newuser ? (
            <>
              <CreateAccount />
              <p onClick={() => setNewUser(false)}>Already an account</p>
            </>
          ) : (
            <>
              <h3 className="login-title">Welcome back!</h3>
              <div className="login-container" onSubmit={submit}>
                <form className="form-login-container">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    placeholder="E-mail"
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

                  <label htmlFor="passwordL">Password</label>
                  <input
                    onChange={e => setPassword(e.target.value)}
                    name="passwordL"
                    placeholder="password"
                    ref={register({
                      required: "This is required",
                      pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
                        message:
                          "Must contain: one number, one uppercase and lowercase letter, at least 8 characters"
                      }
                    })}
                  />
                  {errors.passwordL && <p>{errors.passwordL.message}</p>}

                  <label htmlFor="submit"></label>
                  <input
                    className="form-login-submit"
                    type="submit"
                    value="Sign in"
                  />
                </form>
              </div>
              <p className="login-forget">Did you forget your password?</p>
              {/* <h6>Create acount</h6> */}
              <h6 className="login-new"> I'm new here</h6>
              <button className="login-singup" onClick={handleNewUser}>
                Sign up
              </button>
            </>
          )}
        </Modal>
      </div>
    );
  }
}

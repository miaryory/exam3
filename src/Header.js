import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Header.css";
//import Login from "./Login";
import logo from "./assets/logo.png";
import useForm from "react-hook-form";
import CreateAccount from "./CreateAcount";
//import Mobilemenu from "./Mobilemenu";
import { slide as Menu } from "react-burger-menu";
import PasswordMask from "react-password-mask";

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
    // width: "530px"
    width: "70%",
    height: "93%"
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
    setNewUser(false);
  }

  const [menuOpen, setMenuOpen] = useState(false);

  function setLoginMobile() {
    setMenuOpen(false);
    setIsOpen(true);
  }

  /************************* */
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });

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

  const [password, setPassword] = useState("");

  const [logged, setLogStatus] = useState(false);

  const handleLogOut = () => {
    //evt.preventDefault();
    window.location.reload();
    setLogStatus(false);

    localStorage.setItem("logStatus", "false");
    alert("You are logged out");
    closeModal();
  };

  const [newuser, setNewUser] = useState(false);
  const handleNewUser = evt => {
    evt.preventDefault();
    setNewUser(true);
  };

  //checking if email and password match one user in DB
  function isAuthentificated(a, mail, psw) {
    var i = a.length;
    while (i--) {
      if (a[i].email === mail && a[i].password === psw) {
        return true;
      }
    }
    return false;
  }

  const onSubmit = () => {
    if (isAuthentificated(users, email, password)) {
      setLogStatus(true);
      localStorage.setItem("logStatus", "true");
      closeModal();
    } else {
      setLogStatus(false);
    }
  };

  /********************** */

  if (logged || localStorage.getItem("logStatus") === "true") {
    return (
      <div>
        <header>
          <img id="logoImg" alt="Logo" src={logo}></img>
          <nav id="desktop-nav">
            <ul>
              <li>
                <a href="#fullGame">Game</a>
              </li>
              <li>
                <a href="#slider-container">Buy Rows</a>
              </li>
              <li>
                <a href="#fourThings">Options</a>
              </li>
              <li>
                <a href="#winners-section">Winners</a>
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
          <div className="menu-mobile">
            <Menu
              isOpen={menuOpen}
              onStateChange={state => setMenuOpen(state.isOpen)}
            >
              <a className="menu-item" href="#fullGame">
                Game
              </a>

              <a className="menu-item" href="#slider-container">
                Buy Rows
              </a>
              <a className="menu-item" href="#fourThings">
                Options
              </a>
              <a className="menu-item" href="#winners-section">
                Winners
              </a>

              <a onClick={setLoginMobile} href="#about">
                Log in
              </a>
            </Menu>
          </div>

          <img id="logoImg" alt="Logo" src={logo}></img>
          <nav id="desktop-nav">
            <ul>
              <li>
                <a href="#fullGame">Game</a>
              </li>
              <li>
                <a href="#slider-container">Buy Rows</a>
              </li>
              <li>
                <a href="#fourThings">Options</a>
              </li>
              <li>
                <a href="#winners-section">Winners</a>
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
              <CreateAccount users={users} />
              <button
                className="alreadyacount"
                onClick={() => setNewUser(false)}
              >
                Already an account
              </button>
            </>
          ) : (
            <>
              <h3 className="login-title">Welcome back!</h3>
              <div
                className="login-container"
                onSubmit={handleSubmit(onSubmit)}
              >
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

                  <label htmlFor="password">Password</label>
                  <PasswordMask
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    //  useVendorStyles={false}
                    ref={register({
                      required: "This is required",
                      pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
                        message:
                          "Must contain: one number, one uppercase and lowercase letter, at least 8 characters"
                      }
                    })}
                  />

                  {errors.password && <p>{errors.password.message}</p>}

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

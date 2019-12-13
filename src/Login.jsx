import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import useForm from "react-hook-form";
import CreateAccount from "./CreateAcount";
import Payment from "./Payment";

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

//by default the user is logged out
//localStorage.setItem("logStatus", false);

export default function Login(props) {
  let close;
  //const [modalIsOpen, setIsOpen] = React.useState(false);

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

  const [password, setPassword] = useState(" ");

  const [displayPayment, setPayment] = useState(false);

  const [newuser, setNewUser] = useState(false);
  const handleNewUser = evt => {
    evt.preventDefault();
    setNewUser(true);
  };

  const onSubmit = () => {
    users.map(user => {
      if (email === user.email && password === user.password) {
        localStorage.setItem("logStatus", "true");
        props.hide();
      }
    });
  };

  /********************** */

  return (
    <div>
      <Payment
        display={displayPayment}
        hide={() => setPayment(false)}
        total={localStorage.getItem("rows")}
      />
      <Modal
        isOpen={props.display}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.hide}
        style={customStyles}
        contentLabel="Modal LogIn"
      >
        <button ref={_close => (close = _close)} onClick={props.hide}>
          &times;
        </button>

        {newuser ? (
          <>
            <CreateAccount />
            <button className="alreadyacount" onClick={() => setNewUser(false)}>
              Already an account
            </button>
          </>
        ) : (
          <>
            <h3 className="login-title">Welcome back!</h3>
            <div className="login-container" onSubmit={handleSubmit(onSubmit)}>
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

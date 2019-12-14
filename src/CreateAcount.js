import React, { useState } from "react";
import "./App.css";
import "./Header.css";
import useForm from "react-hook-form";
import Phone from "./Phone";

export default function CreateAcount(props) {
  const [email, userEmail] = useState(" ");
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

  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    //check if the user already have an account
    if (isMember(props.users, email)) {
      alert("already used email");
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  };

  const [submit, setSubmit] = useState(false);

  if (submit) {
    return (
      <div className="acount-container">
        <h1 className="welcome">WELCOME</h1>
        <h5>Thank you for signing up.</h5>
      </div>
    );
  }

  return (
    <div className="acount-container">
      <h6 className="login-new"> I'm new here</h6>
      <form className="form-acount-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname">First Name</label>
        <input
          name="firstname"
          placeholder="firstname"
          ref={register({
            required: "This is a required",
            minLength: {
              value: 2,
              message: "First name must have more then 2 characters!"
            },
            maxLength: {
              value: 20,
              message: "First name must have no more then 20 characters!"
            }
          })}
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}
        <label htmlFor="lastname">Last Name</label>
        <input
          name="lastname"
          placeholder="lastname"
          ref={register({
            required: "This is a required",
            minLength: {
              value: 2,
              message: "Last name must have more then 2 characters!"
            },
            maxLength: {
              value: 20,
              message: "Last name must have no more then 20 characters!"
            }
          })}
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          onChange={e => userEmail(e.target.value)}
          name="email"
          placeholder="name@yahoo.com"
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
        <input
          name="password"
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
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="phone">Phone number</label>
        <Phone />

        <label htmlFor="zip">Zip code</label>
        <input
          name="zip"
          placeholder="Post number"
          type="tel"
          ref={register({
            required: "This is required",
            pattern: {
              value: /^\d{4}$/,
              message: "Must contain 4 numbers"
            },
            minLength: {
              value: 4,
              message: "It must have 4 numbers!"
            },
            maxLength: {
              value: 4,
              message: "It must have no more then 4 numbers!"
            }
          })}
        />
        {errors.zip && <p>{errors.zip.message}</p>}

        <label htmlFor="checkboxV" className="label-checkbox">
          By clicking Sign Up, you agree to our Terms and that you have read our
          Data Use Policy. Subscribe to Newsletter. 18+
          <input
            className="acount-checkbox"
            name="checkboxV"
            type="checkbox"
            placeholder="By clicking Sign Up, you agree to our Terms and that you have read our Data Use Policy.Subscribe to Newsletter. 18+"
            ref={register({
              required: "This is required"
            })}
          />
        </label>
        {errors.checkboxV && <p>{errors.checkboxV.message}</p>}

        <label htmlFor="submit"></label>
        <input className="form-acount-submit" type="submit" value="Sign up" />
      </form>
    </div>
  );
}

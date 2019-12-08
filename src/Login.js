import React, { Component } from "react";
import "./App.css";
import useForm from "react-hook-form";

export default function Login() {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    // const postData = JSON.stringify(data);
    // fetch("https://kea3rdsemester-91fd.restdb.io/rest/subscribers", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     "x-apikey": "5d887df9fd86cb75861e2626",
    //     "cache-control": "no-cache"
    //   },
    //   body: postData
    // })
    //   .then(res => res.json())
    //   .then(console.log(data));

    console.log(data);
  };

  return (
    <div className="login-container">
      <form className="form-login-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
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
        <input className="form-login-submit" type="submit" value="Sign in" />
      </form>
    </div>
  );
}

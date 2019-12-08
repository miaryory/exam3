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
        <label htmlFor="nameL">Name</label>
        <input
          name="nameL"
          placeholder="Name"
          ref={register({
            required: "This is a required",
            minLength: {
              value: 3,
              message: "Name must have more then 3 characters!"
            },
            maxLength: {
              value: 10,
              message: "Name must have no more then 10 characters!"
            }
          })}
        />
        {errors.nameL && <p>{errors.nameL.message}</p>}

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

        <input className="form-login-submit" type="submit" />

        <h6>Create acount</h6>
      </form>
    </div>
  );
}

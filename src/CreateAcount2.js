import React from "react";
import "./App.css";
import "./Header.css";
import useForm from "react-hook-form";
import Phone from "./Phone";

export default function CreateAcount2() {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="acount-container">
      <h6 className="login-new"> I'm new here</h6>
      <form className="form-acount-container" onSubmit={handleSubmit(onSubmit)}>
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
            name="Subscribe to Newsletter"
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

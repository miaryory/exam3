import React from "react";
import "./App.css";
import useForm from "react-hook-form";

export default function Subscribe() {
  const { register, errors, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="subscribe-container">
      <h1>Do you want more free spins?</h1>
      <h5>
        Subscribe to our newsletter and get <span>3</span> spins for FREE!
      </h5>
      <form
        className="form-subscribe-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <label htmlFor="firstname">First name</label>
        <input
          name="firstname"
          placeholder="first name"
          ref={register({
            required: "This is a required",
            minLength: {
              value: 2,
              message: "Firts name must have more then 2 characters!"
            },
            maxLength: {
              value: 20,
              message: "First name must have no more then 20 characters!"
            }
          })}
        />
        {errors.firstname && <p>{errors.firstname.message}</p>} */}

        {/* <label htmlFor="email">Email</label> */}
        <input
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

        <label htmlFor="subscribeCheckbox" className="subscribe-label-checkbox">
          Yes, I want to subscribe for LUCKY 7 newsletter. I have read and agree
          to the Website Terms of Use. View our privacy policy
          <input
            className="subscribeCheckbox"
            name="subscribeCheckbox"
            type="checkbox"
            ref={register({
              required: "This is required"
            })}
          />
        </label>
        {errors.subscribeCheckbox && <p>{errors.subscribeCheckbox.message}</p>}
        {/* <h6>
          You must be at least 18 years old to sign up for Newsletter. You can
          unsubscribe at any time through the link in all messages we send out.
          For more information on how we use your personal data, please see our
          Privacy Policy.
        </h6> */}
      </form>
    </div>
  );
}

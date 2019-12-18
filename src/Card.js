import React from "react";
import "./App.css";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

export default function PaymentInputs() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs({ errorMessages: " " });

  return (
    <div className="payment-input">
      <PaymentInputsWrapper {...wrapperProps}>
        <svg {...getCardImageProps({ images })} />
        <input {...getCardNumberProps()} />
        <input {...getExpiryDateProps()} />
        <input {...getCVCProps()} />
      </PaymentInputsWrapper>
    </div>
  );
}

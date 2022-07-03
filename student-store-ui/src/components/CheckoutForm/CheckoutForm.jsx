import React from "react";
import { useState } from "react";
import axios from "axios";

export default function CheckoutForm({ shoppingCart, setShoppingCart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const apiUrl = "http://localhost:3040/store/";

  const handleOnEmailChange = (e) => {
    //Stops page from reloading when the event is triggered
    e.preventDefault();
    setEmail(e.target.value);
    console.log("email: " + email);
  };

  const handleOnNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log("name: " + name);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      name: name,
      email: email,
    };

    //Send user info and shopping cart of order submitted to server
    console.log("apiUrl: " + apiUrl);
    axios
      .post(apiUrl, {
        userInfo: userInfo,
        shoppingCart: shoppingCart,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );

    console.log(name, email);
    console.log(userInfo);

    //Clears the shopping cart and reset the form after the user has submitted the form
    setShoppingCart([]);
    console.log(shoppingCart);
    setName("");
    setEmail("");
    document.querySelector(".checkoutFormName").value = "";
    document.querySelector(".checkoutFormEmail").value = "";
  };
  // console.log("Name after submit: " + name);
  // console.log("Email after submit: " + email);

  return (
    <div className="checkoutForm">
      <h3 className="paymentInfo">
        Payment Info
        <span className="paymentInfoIcon">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="inputField">
        <label className="inputLabel">Name </label>
        <div className="controlName">
          <input
            name="name"
            type="text"
            className="checkoutFormName"
            placeholder="Student Name"
            onChange={handleOnNameChange}
          />
        </div>
      </div>
      <div className="inputField">
        <label className="inputLabel">Email </label>
        <div className="controlEmail">
          <input
            name="email"
            type="email"
            className="checkoutFormEmail"
            placeholder="student@codepath.org"
            onChange={handleOnEmailChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button checkoutButton" onClick={handleOnSubmit}>
            Checkout
          </button>
        </div>
      </div>

      {/* <form>
      <label> Name 
        <input name="name" className="checkoutFormInput" type="text" placeholder="Student Name" value={name} onChange={handleOnNameChange} />
      </label>
      <label> Email 
        <input name="email" className="checkoutFormInput"type="email" placeholder="student@codepath.org" value={email} onChange={handleOnEmailChange} />
      </label>
      <input type="submit" value="Checkout" onClick={handleOnSubmit} />
    </form> */}
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="termsAndConditions" type="checkbox" />
            <span class="label">
              I agree to the
              <a href="#">Terms and Conditions</a>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

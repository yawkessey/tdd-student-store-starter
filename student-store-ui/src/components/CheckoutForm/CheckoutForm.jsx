import React from "react";
import {useState} from 'react';
import { ReactDOM } from "react";

export default function CheckoutForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert('The name you entered was: ' + name);
    }

  return (
    <div className="checkoutForm">
      <h3 className="paymentInfo">
        Payment Info
        <span className="paymentInfoIcon">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      {/* <div className="inputField">
        <label className="inputLabel">Name </label>
        <div className="controlName">
          <input
            name="name"
            type="text"
            className="checkoutFormInput"
            placeholder="Student Name"
          />
        </div>
      </div> */}
      {/* <div className="inputField">
        <label className="inputLabel">Email </label>
        <div className="controlEmail">
          <input
            name="email"
            type="email"
            className="checkoutFormInput"
            placeholder="student@codepath.org"
          />
        </div>
      </div> */}
    
      {/* <div className="field">
        <div className="control">
          <button className="button checkoutButton">Checkout</button>
        </div>
      </div> */}

    <form onSubmit={handleSubmit}>
      <label> Name 
        <input name="name" className="checkoutFormInput" type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label> Email 
        <input name="email" className="checkoutFormInput"type="email" placeholder="student@codepath.org" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Checkout" />
    </form>
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

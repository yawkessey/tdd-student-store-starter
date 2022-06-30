import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import shoppingCart from "../ShoppingCart/ShoppingCart";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({ shoppingCart, products, handleCheckoutFormChange, handleOnSubmitCheckOutForm }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const side = !isOpen ? (
    <ul className="sidebarClosed" >
      <li className="sidebarToggle" onClick={toggleSidebar}>
        <Link to="#" className="arrowBar">
          <i className="material-icons md-48">arrow_forward</i>
        </Link>
      </li>
    </ul>
  ) : (
    <ul className="sidebarOpen" >
      <li className="sidebarToggle" onClick={toggleSidebar}>
        <Link to="#" className="arrowBar">
          <i className="material-icons md-48">arrow_backwards</i>
        </Link>
      </li>
      <div className="shoppingCart">
      <ShoppingCart shoppingCart={shoppingCart} products={products} />
      </div>
      <div className="checkoutForm"> 
        <CheckoutForm handleCheckoutFormChange={handleCheckoutFormChange} handleOnSubmitCheckOutForm={handleOnSubmitCheckOutForm} />
      </div>
    </ul>
  );

  return side;
}

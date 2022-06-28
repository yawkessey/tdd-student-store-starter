import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import shoppingCart from "../ShoppingCart/ShoppingCart";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({ shoppingCart, products }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const side = !isOpen ? (
    <ul className="sidebarClosed" onClick={toggleSidebar}>
      <li className="sidebarToggle">
        <Link to="#" className="arrowBar">
          <i className="material-icons md-48">arrow_forward</i>
        </Link>
      </li>
    </ul>
  ) : (
    <ul className="sidebarOpen" onClick={toggleSidebar}>
      <li className="sidebarToggle">
        <Link to="#" className="arrowBar">
          <i className="material-icons md-48">arrow_backwards</i>
        </Link>
        <ShoppingCart shoppingCart={shoppingCart} products={products} />
      </li>
    </ul>
  );

  return side;
}

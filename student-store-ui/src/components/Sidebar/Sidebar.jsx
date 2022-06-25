import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar">
      <div className="toggleArrow">
        <Link to="#" className="toggleSidebar">
          <i className="material-icons md-48" onClick={toggleSidebar}>
            arrow_forward
          </i>
        </Link>
      </div>

      <nav className={isOpen ? "sidebarActive" : "sidebarNotActive"}>
        <ul className="sidebarItems" onClick={toggleSidebar}>
          <li className="sidebarToggle">
            <Link to="#" className="arrowBar">
              <i className="material-icons md-48">arrow_backwards</i>
            </Link>
          </li>
          <li>Shopping Cart</li>
          <li>Payment Info</li>
          <li>Checkout Info</li>
        </ul>
      </nav>
    </div>
  );
}

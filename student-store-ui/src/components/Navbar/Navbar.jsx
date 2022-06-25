import * as React from "react"
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import "./Navbar.css"
import SubNavbar from "../SubNavbar/SubNavbar";
let logo = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"


export default function Navbar() {
  
  return (
    <nav className="navbar">
      <Link to="/">

        <img id="logo" src = {logo} alt="Codepath logo"/>

      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/#about">About Us</Link>
        </li>

        <li>
          <Link to="/contact_us">Contact Us</Link>
        </li>

        <li>
          <Link to="/products/:productId">Buy Now</Link>
     
        </li>

      </ul>

    </nav>
  )
}

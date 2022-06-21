import * as React from "react"
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import "./Navbar.css"
//import { Link } from "react-rouer-dom"


export default function Navbar() {
  
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about_us">About Us</Link>
        </li>

        <li>
          <Link to="/contact_us">Contact Us</Link>
        </li>

        <li>
          <Link to="/products/:productId">Buy Now</Link>
     
        </li>

      </ul>
      {/* <a href="/"></a> */}
    </nav>
  )
}

import * as React from "react"
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import "./Navbar.css"
let logo = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"


export default function Navbar() {
  
  return (
    <nav className="navbar">
      <img id="logo" src = {logo} alt="Codepath logo"/>
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

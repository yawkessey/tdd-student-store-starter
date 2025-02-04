import * as React from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"
let logo = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"


export default function Navbar() {
  
  return (
    <nav className="navbar">
      <div className = "logo">
      <Link to="/">

        <img id="logo" src = {logo} alt="Codepath logo"/>

      </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/#about">About Us</a>
        </li>

        <li>
          <a href="/#contact_us" >Contact Us</a>
        </li>

        <li>
          <Link to="/products/:productId">Buy Now</Link>
     
        </li>

      </ul>

    </nav>
  )
}

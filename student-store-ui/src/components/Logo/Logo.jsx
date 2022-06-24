import * as React from "react"
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import Home from "../Home/Home"
import "./Navbar.css"
let logo = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"

export default function Logo() {
    return(
    <div className="logo">
        <Link to="/">
            <img src={logo}></img>
        </Link>
    </div>
    )
}
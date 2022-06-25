import React from "react";
import "./SubNavbar.css";

export default function SubNavbar() {
  return (
    <nav className="subNavContent">
      <div className="content">
        <div className="searchRow">
          <div className="searchBar">
            <input type="text" name="search" placeholder="Search" />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i class="material-icons">help</i>
            </span>
            <div className="cart">
              <a href="/">
                My Cart
                <i className="material-icons">help</i>
              </a>
            </div>
          </div>
        </div>
        <div className="categoryRow">
          <div className="hamburgerMenu"></div>
          <ul className="categoryMenu">
            <li>
              <button>All Categories</button>
            </li>
            <li>
              <button>Clothing</button>
            </li>
            <li>
              <button>Food</button>
            </li>
            <li>
              <button>Accessories</button>
            </li>
            <li>
              <button>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

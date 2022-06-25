import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="heroSection">
      <div className="heroContent">
        <h1>Welcome! Find your merch!</h1>
        <p>
          We have all kinds of goodies. Click on any of the items to start
          filling up your shopping cart. Checkout whenever you're ready.
        </p>
      </div>
      <div className="heroImage">
        <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"></img>
      </div>
    </div>
  );
}

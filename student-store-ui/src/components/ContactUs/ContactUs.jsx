import * as React from "react"
import "./ContactUs.css";

export default function ContactUs () {
  return (
    <div>
    <h1> Contact Us</h1>
    <div className="contactUsContainer">
      <div className="contactUsContent">
        <ul className="contactUsInfo">
          <li>
            <span className="label">Email:</span>
            <span>code@path.org</span>
          </li>
          
          <li>
            <span className="label">Phone:</span>
            <span>1-800-CODEPATH</span>
          </li>
            
          <li>
            <span className="label">Phone:</span>
            <span>123 Fake Street, San Francisco, CA</span>          
          </li>
          
          <li>
            <span className="label">Socials:</span>
            <span>1-800-CODEPATH</span>          
          </li>
        </ul>
      </div>
    <div className="contactUsImage">
      <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" />
    </div>
  </div>
      </div>
  )
}
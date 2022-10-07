import React from "react";
import "./footer.css";
//import Logo from '../../assest/icon.png'
import logo from '../../images/logo.png'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          {/* Column1 */}
          <div className="col">
            <h1>About Us</h1>
            <h1>
              <li>Dashboard</li>
              <li>Login</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Blockchain Information</li>
              <li>FAQs</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONACT INFO</h4>
            <ul className="list-unstyled">
              <li>Phone:0116307457</li>
              <li>Email:company@email.com</li>
              <li>Location:100 Rissik Street, JHB, ZA</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Docuify All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


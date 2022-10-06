import React from "react";
import "./Footer.css";
//import Logo from '../../assest/icon.png'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          {/* Column1 */}
          <div className="col">
            <h7>About Us</h7>
            <h7 className="list-unstyled">
              <li>Dashboard</li>
              <li>Login</li>
            </h7>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Support</h4>
            <ui className="list-unstyled">
              <li>Help Center</li>
              <li>Blockchain Information</li>
              <li>FAQs</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONACT INFO</h4>
            <ui className="list-unstyled">
              <li>Phone:0116307457</li>
              <li>Email:company@email.com</li>
              <li>Location:100 Rissik Street, JHB, ZA</li>
            </ui>
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


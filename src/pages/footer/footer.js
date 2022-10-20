import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitterSquare, FaLinkedinIn} from 'react-icons/fa'
import logo from '../../images/logo.png'

function Footer () {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         {/* column0 */}
          <div className="col">
            <div className='log'>
             <img className='logo1' src={logo} alt="logo"/>
            </div>
           </div>
          {/* Column1 */}
          <div className="col">
            <h6><p>About Us</p></h6>
            <h6>
              <li>Dashboard</li>
              <li>Login</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <h6>
              <li>Help Center</li>
              <li>Blockchain Information</li>
              <li>FAQs</li>
              </h6>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONACT INFO</h4>
            <ul className="list-unstyled">
              <h6>
                <li>Phone:0116307457</li>
                <li>Email:company@email.com</li>
                <li>Location:100 Rissik Street, JHB, ZA</li>
              </h6>
            </ul>
              {/* Social Media links Icons */}
                <div>
                  <ul>
                   <li className="iconS"><FaFacebookF size="0.65em"/></li>
                   <li className="iconS"><FaTwitterSquare size="0.65em"/></li>
	                 <li className="iconS"><FaInstagram size="0.65em"/></li>
                   <li className="iconS"><FaLinkedinIn size="0.65em"/></li>
                </ul>
              </div>
          </div>
        </div>
        <div className="row">
          <p className="col-sm" >
            &copy;{new Date().getFullYear()} Docuify All rights reserved
          </p>
        </div>
      </div>
    </div>
  )

}
export default Footer
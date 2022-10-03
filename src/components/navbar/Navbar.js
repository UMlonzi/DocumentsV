import React from 'react'
import './navbar.css'
//  import logo from '../../Images/pixlr-bg-result (1).png';
import { useNavigate } from "react-router-dom";

 
const Navbar = (props) => {
    const navigate = useNavigate();    return (
        <>
        <div className='backgroundimg'>
            <nav>
        {/* <img className='logo'   src={logo} alt="logo"/> */}
        
        <ul>
            <li>
                <a href=''>Home</a>
            </li>
            <li>

                <a href='/'>About</a>
            </li>
           
            <li>
                <a href='./Authentication'>Login/Register</a>
            </li>
        </ul>
        </nav>
        <h1>DocumentV</h1>
        <p>Quisque interfum nibh quis scelerisque mollis. <br></br> Etiam et sem vehicula, portitor ipsum eu, vehicula lacus</p>
         <button onClick={() => navigate("/Authentication")} className='Login1'>
            Login
         </button>
         </div>
         
    </>
  )
}

export default Navbar
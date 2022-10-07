import React,{useState,useRef} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import './navbar.css'
  import logo from '../../images/logo.png';
import { useNavigate } from "react-router-dom";
import About from '../../pages/about/About';

function Navbar(){
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    
	};

    const[btnPop, setBtnPop]=useState(false)
       return (
    
        <header className='header1'>
			<nav ref={navRef}>
                <div >
                <img className='logo'   src={logo} alt="logo"/>
                                </div>
				<a  href="/">Home</a>
        <button onClick={()=>setBtnPop(true)} className='about-btn'>About</button>
                    <About trigger={btnPop} setTrigger={setBtnPop}>
                         <div className='popup-details'>
                         <p>
                         Our company solves existing problem  of  verifying  the  validity of digital <br></br> assets (documents) at a very low implementation cost. 
                         <br></br><br></br>  The  characteristics  of  our company which is the blockchain  (the  permanent decentralized  ledger  of 
                        information), these  digital signatures  can  be  accessed <br></br>  by anyone. 
                        <br></br> Anyone  with  access  to  the blockchain can  now  verify the authenticity  of  a  digital  asset without  having  to  rely  on  trusted intermediaries.
                         </p>
                         </div>
                     </About>
                <a href="/Footer">Contact Us</a>
                
				 
				<a href="/Authentication">Login</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
        
				<FaBars />
			</button>
      
		</header>
  )
}

export default Navbar
import { useRef, useState } from "react";
import { FaBars, FaTimes,  } from "react-icons/fa";
import "./navigation.css";
import logo from '../../images/logo.png'
import About from '../../pages/about/About';


function Navigation () {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    const[btnPop, setBtnPop]=useState(false)
	return (
		<div className="backgroundimg1">

		
		<header >
		<nav className="nav1" ref={navRef}>
			<div className='log'>
			<img className='logo2'   src={logo} alt="logo"/>
							</div>
			<a className="a1" href="/">Home</a>
			<a className="a1" href="/#">Contact Us</a>
			<button onClick={()=>setBtnPop(true)} className='aboutbtn'>About</button>
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
			<a className="a1" href="/Authentication">Login</a>
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
	</div>
)
}

// 		<header>
// 			{/* <h3>LOGO</h3> */}
//       <img src={Logo} alt="logo" />
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">About Us</a>
// 				<a href="/#">Contact Us</a>
// 				<a href="/#">Login</a>
//         <a href="/#"> Register </a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button className="nav-btn" onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

export default Navigation;

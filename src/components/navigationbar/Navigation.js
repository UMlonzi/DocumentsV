import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navigation.css";
import Logo from '../../assest/icon.png'

function Navigation () {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			{/* <h3>LOGO</h3> */}
      <img src={Logo} alt="logo" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Contact Us</a>
				<a href="/#">Login</a>
        <a href="/#"> Register </a>
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
	);
}

export default Navigation;

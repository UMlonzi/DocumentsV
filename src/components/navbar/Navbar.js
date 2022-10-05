import React,{useState,useRef} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import './navbar.css'
//  import logo from '../../Images/pixlr-bg-result (1).png';
import { useNavigate } from "react-router-dom";
import About from '../../pages/about/About';

function Navbar(){
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    const[btnPop, setBtnPop]=useState(false)
    // const [naviagte]=useNavigate()
       return (
        //    <header>
        //         <nav ref={navRef}>
        //             <a href=''>Home</a>
        //             <a href=''>Contact Us</a>
        //             <button onClick={()=>setBtnPop(true)} className='about-btn'>About</button>
        //             <About trigger={btnPop} setTrigger={setBtnPop}>
        //                 <div className='popup-details'>
        //                 <p>
        //                     ghfdhgchgdcvhgdcdvcdvjhjv
        //                     dhfjhbvjfdbjhbfvbjhfdjvjhfdvjhjhfvjhjhjhfj
        //                     hgzchgvchgzxhgvcjhzcxvjhvvhghggjhgjhgjhgjhgjhgjh
        //                     udfuycvuydvcuyvuyubiubibiudbiubcbiubiub
        //                     hwyregtiuygruyegiuihwoeuywfeuywgvr
        //                     hghgdvfebiugfwveuyvuyvefuyvuyef
        //                     eiugfuyefuyeufuyeuyfjfdr
        //                     kvdhytfvdvfjhdsvjhdsvhgds
        //                     jgffdvhgdvfhgdvfvdawjdfvhedcytaefvfj
        //                     ewfdsavchgdsvfjhdsvfhdsaf
        //                     hgvdsahfgsvfhgdsfedsahgfdsf
        //                     dfcvdsahfajhvfjd vfjhdvfytfedvjhr
        //                     egdue87r8t384hgs gdw76r376t85g3gew hgvdsahfgsvfhgdsfedsahgfdsfsdsajhdwvsjf
        //                     ehvfhgdsafvjhshjfdsgdgfdgd
        //                 </p>
        //                 </div>
        //             </About> 
        //             <a href=''>Login</a>
        //             <button onClick={showNav} className='nav-btn nav-close-btn'>
        //                 <FaTimes/>
        //             </button>
        //     </nav>
        //     <button onClick={showNav} className='nav-btn'>
        //         <FaBars/>
        //     </button>
        //     </header>
        <header>
			<nav ref={navRef}>
				<a href="/">Home</a>
                <a href="/#">Contact Us</a>
				<button onClick={()=>setBtnPop(true)} className='about-btn'>About</button>
                    <About trigger={btnPop} setTrigger={setBtnPop}>
                         <div className='popup-details'>
                         <p>
                             ghfdhgchgdcvhgdcdvcdvjhjv
                             dhfjhbvjfdbjhbfvbjhfdjvjhfdvjhjhfvjhjhjhfj
                             hgzchgvchgzxhgvcjhzcxvjhvvhghggjhgjhgjhgjhgjhgjh
                             udfuycvuydvcuyvuyubiubibiudbiubcbiubiub
                             hwyregtiuygruyegiuihwoeuywfeuywgvr
                             hghgdvfebiugfwveuyvuyvefuyvuyef
                             eiugfuyefuyeufuyeuyfjfdr
                             kvdhytfvdvfjhdsvjhdsvhgds
                             jgffdvhgdvfhgdvfvdawjdfvhedcytaefvfj
                             ewfdsavchgdsvfjhdsvfhdsaf
                             hgvdsahfgsvfhgdsfedsahgfdsf
                             dfcvdsahfajhvfjd vfjhdvfytfedvjhr
                             egdue87r8t384hgs gdw76r376t85g3gew hgvdsahfgsvfhgdsfedsahgfdsfsdsajhdwvsjf
                             ehvfhgdsafvjhshjfdsgdgfdgd
                         </p>
                         </div>
                     </About> 
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
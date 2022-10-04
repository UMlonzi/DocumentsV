import React,{useState} from 'react'
import './navbar.css'
//  import logo from '../../Images/pixlr-bg-result (1).png';
import { useNavigate } from "react-router-dom";
import About from '../../pages/about/About';

 
const Navbar = (props) => {
    const[btnPop, setBtnPop]=useState(false)
    const navigate = useNavigate();    return (
        <>
        <div className='backgroundimg'>
            <nav>
        
        <ul>
            <li className='g'>
                <a className='g' href=''>Home</a>
            </li>
            <li>

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
            </li>
           
            <li>
                <a href='./Authentication'>Login/Register</a>
            </li>
        </ul>
        </nav>
        <div className='cbgffdf'>
        <h1>DocumentV</h1>
        <p>Quisque interfum nibh quis scelerisque mollis. <br></br> Etiam et sem vehicula, portitor ipsum eu, vehicula lacus</p>
        </div>
         <button onClick={() => navigate("/Authentication")} className='Login1'>
            Login
         </button>
         </div>
         
    </>
  )
}

export default Navbar
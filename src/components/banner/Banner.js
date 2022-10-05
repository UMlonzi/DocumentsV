
import './banner.css'
 import { useNavigate } from "react-router-dom";
 import React,{useState,useRef} from 'react';
 import About from '../../pages/about/About';

function Banner(){
    const navRef = useRef();
    const[btnPop, setBtnPop]=useState(false)
const navigate = useNavigate();    
    return (
        <>
        <div className='backgroundBanner'>
            <div>
            <h5 className='hBanner'>
            Docuify
            </h5>
            <div className='line2' />
            <p className='para'>Our company solves existing problem of <br></br>  verifying  the  validity of digital assets 
            <br></br>  at a very low implementation cost.... 
            </p>

            <button onClick={()=>setBtnPop(true)}  className='ReadMore'>
         Read More
         </button>
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
            </div>
            <div>
         <h5 className='header'>
               Why Our Clients Choose Us
            </h5>
            </div>
           
      
       
    </div>
                
          
         
    </>
  )
}

export default Banner
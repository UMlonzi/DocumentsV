import './banner.css'
 import { useNavigate } from "react-router-dom";
 import React,{useState,useRef} from 'react';
 import About from '../../pages/about/About';
 import documents from '../../images/download-removebg-preview.png';
 import tick from '../../images/images-removebg-preview.png';
 import legal from '../../images/5-58704_legal-operations-law-orange-icon-png-removebg-preview.png';


function Banner(){
    const navRef = useRef();
    const[btnPop, setBtnPop]=useState(false)
const navigate = useNavigate();    
    return (
    
        <div className='backgroundBanner'>
        
        <div className='para'>
            <h1>
            Docuify
            </h1>
            <div>
            {/* <div className='line2' /> */}
            <p>Our company solves existing problem of <br></br>  verifying  the  validity of digital assets 
            <br></br>  at a very low implementation cost.... 
            </p>
            </div>

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
            <div className='separate'>
         <h1>
               Why Our Clients Choose Us
            </h1>
                 <div className='line2' />
            <div className='inside'>
                <div className='img-text'>
            <img className='documents'   src={documents} alt="documents"/>
            <h2>Benefits of Document Management</h2>
            </div>
            <div className='img-text'>
            <img className='tick'   src={tick} alt="tick"/>
            <h2>Verified Document Storage</h2>
            </div>
            <div className='img-text'>
            <img className='legal'   src={legal} alt="legal"/>
            <h2>Important Legislation</h2>
            </div>
            </div>
           

            

            </div>
           
      
       
    </div>
  )
}

export default Banner
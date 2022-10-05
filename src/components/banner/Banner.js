import React from 'react'
import './banner.css'
 import { useNavigate } from "react-router-dom";


function Banner(){


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

            <button onClick={() => navigate("/About")} className='ReadMore'>
         Read More
         </button>
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
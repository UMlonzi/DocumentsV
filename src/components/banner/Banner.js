import React from 'react'
import './banner.css'
 import { useNavigate } from "react-router-dom";


function Banner(){


const navigate = useNavigate();    
    return (
        <>
        <div className='backgroundBanner'>
            <h5 className='hBanner'>
                DocumentV
            </h5>
            <button onClick={() => navigate("/About")} className='ReadMore'>
         Read More
         </button>
         <p>Lorem Ipsum is simply dummy <br></br>text of the printing <br></br> and typesetting industry.</p>
         <h5 className='header'>
               Why Our Clients Choose Us
            </h5>
         </div>
         
    </>
  )
}

export default Banner
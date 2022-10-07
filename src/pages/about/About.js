import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

import './about.css'

function About(props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
        <FaTimes  className='close-btn' onClick={()=>props.setTrigger(false)}>close</FaTimes>
        {props.children}
      </div>
    </div>
  ):'';
}

export default About

import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

<<<<<<< HEAD
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={nft} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h1>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h1>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
=======
import './about.css'

function About(props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
        <FaTimes  className='close-btn' onClick={()=>props.setTrigger(false)}>close</FaTimes>
        {props.children}
>>>>>>> c5b2b6552c30df6212c71b70de2e24207e0f0fe7
      </div>
    </div>
  ):'';
}

export default About

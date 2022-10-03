import React from 'react';
import './register.css';
// import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
// import image from '../assest/nav/img.jpg'


function register() {



  return (
    <div className='main-container'>

        {/* <div className='Logo'>
            <h1>Rand Hotel</h1>
        </div> */}
        

        <div className='inner-container'>
            
            <div className='signin-header'>
                        <h1>Sign up</h1>
                        <p className="" >
                            if you already have an account register you can Login here!
                        </p>
            </div>

            <div className='form'>
                    <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="input-fields-1"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <br></br>

                    <br></br>


                    <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="input-fields-2"
                    onChange={(e) => setPassword(e.target.value)}
                    />


                    <button onClick={Register }>Register</button>

                    <button onClick={Register }>Cancel</button>
            </div>
        </div>


        <p className="" >
                            if you already have an account register you can Login here!
        </p>

        <div className='right-container'>

        <div className='right-container-content'>
            <h1>
            Register to blockdocument
            </h1>
        </div>    

        </div>



    </div>
    
  )
}

export default register;
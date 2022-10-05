import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase";
import pic1 from '../../assets/login.jpg';
import pic2 from '../../assets/register.jpg'
import './authentication.css';
import { useNavigate } from "react-router";
// import TodoSVG from '../assets/todo-svg.svg'

export default function Authentication() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    // confirmEmail: "",
    password: "",
    // confirmPassword: ""
  });

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigate("/");
  //     }
  //   });
  // }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/Dashboard");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    // if (registerInformation.email !== registerInformation.confirmEmail) {
    //   alert("Please confirm that email are the same");
    //   return;
    // } 
    // else if (
    //   registerInformation.password !== registerInformation.confirmPassword
    // ) {
    //   alert("Please confirm that password are the same");
    //   return;
    // }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/Dashboard");
      })
      .catch((err) => alert(err.message));
  };
  const navigateTohome=()=>{
    navigate('/')
  }

  return (
    <div className="welcome">
      <div className="login-register-container">
        
        {isRegistering ? (
          <div  className='login-part'>
          <div className='picture-login'>
        <img src={pic2} />
        </div>
        <div className='login-form'>
            <h2>Register</h2>
        <div className='login-input'>
            <input
              type="email"
              placeholder="Email"
              value={registerInformation.email}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  email: e.target.value
                })
              }
            />
            </div>
            {/* <div>
            <input
              type="email"
              placeholder="Confirm Email"
              value={registerInformation.confirmEmail}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmEmail: e.target.value
                })
              }
            />
            </div> */}
            <div className='login-input'>
            <input
              type="password"
              placeholder="Password"
              value={registerInformation.password}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  password: e.target.value
                })
              }
            />
            </div>
            {/* <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={registerInformation.confirmPassword}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmPassword: e.target.value
                })
              }
            />
            </div> */}
            <div>
            <div>
            <button className="sign-in-register-button1" onClick={handleRegister}>Register</button>
            <button className='cancel-button1'>Reset</button>
            </div>
            <div>
            <h4>If you have an account ?</h4>
            <button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
            </div>
            </div>
          </div>
          </div>
        ) : (
          <div className='login-part'>
          <div className='picture-login'>
        <img src={pic1} />
        </div>
         
        <div className='login-form'>
               
        <div className='login-input'>
            <h2>Login</h2>
            <input
             type="email" 
             placeholder="Email" 
             onChange={handleEmailChange}
              value={email} />
              </div>
              <div className='login-input'>
            <input
              type="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
            />
            </div>
            <div className='signing-buttons'>
            <div>
            <button className="sign-in-register-button" onClick={handleSignIn}>
              Sign In
            </button>
            <button className='cancel-button' onClick={navigateTohome}>cancel</button>
            </div>
            <div>
                <h4>Dont have an account ?</h4>
            <button
              className="create-account-button"
              onClick={() => setIsRegistering(true)}
            >
              register here
            </button>
            </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
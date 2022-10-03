import './Loginuser.css';
import {useState} from 'react';
// import {auth} from '../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';


// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';



function login() {


//   const [email, setEmail ] = useState('');
//   const [password,setPassword] = useState(''); 

//   const login = (()=>{
//     signInWithEmailAndPassword(auth, email, password).then(()=>{
//       window.location('/');

//     }).catch((err)=>{
//       console.log(err)
//     })
    
//   })




  return (
    <div className='main-container'>

    <div className='Logo'>
        <h1>BRegister</h1>
    </div>
    

    <div className='inner-container'>
    <div className='signin-header'>
                    <h1>Register</h1>
                    <p className="" >
                        if you don't an account ,you can Register here!
                    </p>
                    {/* <Link to = '/'>Create account here</Link> */}
        </div>
        <div className='form'>
                <input
                placeholder="Enter in your Email"
                name="email"
                type="email"
                className="input-fields-1"
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>

                <br></br>


                <input
                placeholder="Enter in your Password"
                name="password"
                type="password"
                className="input-fields-2"
                onChange={(e) => setPassword(e.target.value)}
                />


                <button onClick={login}>Sign in</button>
        </div>
    </div>

    <div className='right-container'>

    {/* <div className='right-container-content'>
        <h1>
        Sign in to the Rand Hotel
        </h1>
        <p>
        Hotel as unique as your
        comforability
        </p>
    </div>     */}

    </div>



</div>
  );
}

export default login;
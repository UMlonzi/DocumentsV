import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';
import { Routes,Route } from 'react-router-dom';
import DashBoardPage from './pages/dashBoard';
import VeriAuthentication from './verifier/authentication/VeriAuthentication';
import VeriHome from './verifier/veriHomepage/VeriHome';
function App() {
  return (
    <div className="App">

      

   {/* <VeriAuthentication/> */}
    
   <Routes>
    <Route path='/DashBoard' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path="/" element={<DashBoardPage/>}/>
    <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path='/Profile' element={<Profile/>}/>      
    <Route  path='veriAuthentication' exact element={<VeriAuthentication/>}/>
   </Routes>
<<<<<<< HEAD
=======
   
>>>>>>> 516d07c4c6b1fc79660173b9cef6d15f25c249f1
    </div>
  )
}

 




export default App;
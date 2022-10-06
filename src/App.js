// import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';
<<<<<<< HEAD

// import Navigation from './pages/navigationbar/Navigation';
=======
import fandingPage from './pages/landingPage/LandingPage';
import Navigation from './pages/navigationbar/Navigation';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
//import Footer from './pages/footer/footer';
//import './pages/footer.css'; 

>>>>>>> fc4b2c5dee5c3d2d84624dfb9860fc869803c939



import DashBoardPage from './pages/dashBoard';
import VeriAuthentication from './verifier/authentication/VeriAuthentication';
// import VeriHome from './verifier/veriHomepage/VeriHome';

function App() {
  return (
    <div className="App">

   <Routes>
   <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path='/Profile' element={<Profile/>}/> 
<<<<<<< HEAD
    {/* <Route path='/Navigation' element={<Navigation/>} />   */}
=======
>>>>>>> fc4b2c5dee5c3d2d84624dfb9860fc869803c939
    <Route path="/Dashboard" element={<DashBoardPage/>}/>
    <Route path='/Profile' element={<Profile/>}/>      
    <Route  path='veriAuthentication' exact element={<VeriAuthentication/>}/>
   </Routes>
    </div>
  )
}

 




export default App;
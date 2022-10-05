
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';
import DashBoardPage from './pages/dashBoard';
import VeriAuthentication from './verifier/authentication/VeriAuthentication';
import VeriHome from './verifier/veriHomepage/VeriHome';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
   <Routes>
   <Route path='/LandingPage' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path="/" element={<DashBoardPage/>}/>
    <Route path='/Profile' element={<Profile/>}/>      
    <Route path='veriAuthentication'  element={<VeriAuthentication/>}/>
   </Routes>
    </div>
  )
}

 




export default App;
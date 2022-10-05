import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';
import DashBoardPage from './pages/dashBoard';
import VeriAuthentication from './verifier/authentication/VeriAuthentication';
import VeriHome from './verifier/veriHomepage/VeriHome';
function App() {
  return (
    <div className="App">
   <Routes>
   <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path="/Dashboard" element={<DashBoardPage/>}/>
    <Route path='/Profile' element={<Profile/>}/>      
    <Route  path='veriAuthentication' exact element={<VeriAuthentication/>}/>
   </Routes>
    </div>
  )
}

 




export default App;
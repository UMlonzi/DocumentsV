import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';
import VeriAuthentication from './verifier/authentication/VeriAuthentication';
import VeriHome from './verifier/veriHomepage/VeriHome';
function App() {
  return (
    <div className="App">
      
   <BrowserRouter>
   {/* <VeriAuthentication/> */}
   {/* <VeriHome/> */}
   <Routes>
    <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path='/Profile' element={<Profile/>}/>      
    <Route  path='veriAuthentication' exact element={<VeriAuthentication/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

 




export default App;
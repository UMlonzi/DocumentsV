import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path='/Profile' element={<Profile/>}/>      
   </Routes>
   </BrowserRouter>
    </div>
  )
}

 




export default App;
// import logo from './logo.svg';
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import Profile from './pages/profile/Profile';
import LandingPage from './pages/landingPage/LandingPage';
import Navigation from './pages/navigationbar/Navigation';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   {/* <Tablecomponent/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path='/Profile' element={<Profile/>}/> 
    <Route path='/Navigation' element={<Navigation/>} />     
    
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

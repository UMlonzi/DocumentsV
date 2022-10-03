import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import LandingPage from "./pages/landingPage/LandingPage";



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        </Routes>
      
    </BrowserRouter>
    
=======
import Authentication from './pages/authentictaion/Authentication';
import LandingPage from './pages/landingPage/LandingPage';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
   </Routes>
   </BrowserRouter>
   <Authentication/>
>>>>>>> 6e3bbad4be9ec75a2d478afcab92dd38280e5558
    </div>
  )
}

 




export default App;
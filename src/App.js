import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from "./pages/landingPage/LandingPage";



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        </Routes>
      
    </BrowserRouter>
    
    </div>
  )
}

 




export default App;
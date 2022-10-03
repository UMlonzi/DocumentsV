import logo from './logo.svg';
import './App.css';
import Authentication from './pages/authentictaion/Authentication';
import LandingPage from './pages/landingPage/LandingPage';
import { Routes,Route } from 'react-router-dom';
import DashBoardPage from './pages/dashBoard';
function App() {
  return (
    <div className="App">
   {/* <Tablecomponent*/}
   <Routes>
    <Route path='/DashBoard' exact element={<LandingPage/>}/>
    <Route path='/Authentication' element={<Authentication/>}/>
    <Route path="/" element={<DashBoardPage/>}/>
   </Routes>

    </div>
  );
}

export default App;

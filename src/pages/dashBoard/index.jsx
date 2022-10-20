import React from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
import Navigation from '../../components/navigationbar/Navigation'
// import Navbar from '../../components/navbar/Navbar'
import { WelcomeCard,UplaodToBlockchainBoxes,DisplayUplaodTable} from '../../component/upload/uplaodload';
import Footer from '../footer/footer';
import "./index.css";

const DashBoardPage = () => {
const {innerWidth}=window;
console.log(innerWidth);
  return (
    <div className="pageGrid" style={{maxWidth:`${innerWidth}px`,height:"100vh"}}>
<div className="item1"> <Navigation/></div>
<div className='item2'></div>
<div className='item3'><WelcomeCard /></div>
<div className="item4"><UplaodToBlockchainBoxes/></div>
<div className='item5'><DisplayUplaodTable/></div>
<div className="item16"><Footer/></div>
    </div>
  )
}

export default DashBoardPage

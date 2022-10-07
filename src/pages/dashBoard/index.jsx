import React from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
import Navigation from '../../components/navigationbar/Navigation'
// import Navbar from '../../components/navbar/Navbar'
import Footer from '../footer/footer';
const DashBoardPage = () => {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"white"}}>
      {/* <Navbar/> */}
<Navigation/>
<br></br>
<br></br>
<br></br>
<br></br>

<Tablecomponent/>
<Footer/>
    </div>
  )
}

export default DashBoardPage

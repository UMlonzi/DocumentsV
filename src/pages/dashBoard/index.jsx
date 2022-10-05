import React from 'react'
import Tablecomponent from '../../component/upload/uplaodload'
import Navigation from '../../pages/navigationbar/Navigation'

const DashBoardPage = () => {
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"white"}}>
<Navigation/>
<Tablecomponent/>
    </div>
  )
}

export default DashBoardPage

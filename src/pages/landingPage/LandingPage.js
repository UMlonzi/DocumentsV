import React from 'react'

import Navbar from '../../components/navbar/Navbar';
// import './home.css'
 import Body from '../../components/body/Body';
 import Banner from '../../components/banner/Banner';
// import Activities from '../../components/activities/Activities';
 import Footer from '../../components/footer/Footer';

function LandingPage() {
    return (
    <div className='nav'>
    
      <Navbar/>
    <Body/>
    <Banner/>
    <Footer/>
    </div>

    )
}

export default LandingPage
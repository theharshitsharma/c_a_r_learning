import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
// import React from 'react'

import {Outlet} from 'react-router-dom'
import React from 'react'
function Layout(){
    return(
        <>
        <Header/>

        <Outlet/>

        <Footer/>
        
        </>
    )
}
export default Layout
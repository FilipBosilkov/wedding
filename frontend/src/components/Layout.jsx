import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './NavBar'
import Footer from "./Footer";


const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
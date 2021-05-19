import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                
                <div className="logo">
                    <Link to="/">Ana Rosso</Link>
                </div>

                <nav className="nav">
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>

                    <li>
                        <Link to="/instagram">Instagram</Link>
                    </li>
                </nav>
                
                <div className="contact">
                    <Link to="/contact">Book me!</Link>
                 </div>

                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header
// className="nav-link"
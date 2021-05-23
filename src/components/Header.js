import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = ({onCursor}) => {
    return (
        <motion.div className="header"
            initial={{opacity: 0, y: -180}}
            animate={{opacity: 1, y: 0}}
            transition={{
                ease: 'easeInOut', 
                duration: 1,
                delay: .6,
            }}>
            <div className="header-inner">
                
                <div className="logo"
                >
                    {/* onMouseEnter={()=>onCursor('hovered')}
                onMouseLeave={onCursor} */}
                    <Link to="/">Ana Rosso</Link>
                </div>

                <nav className="nav">
                    <li>
                        <Link to="./about">About</Link>
                    </li>

                    <li>
                        <Link to="./gallery">Gallery</Link>
                    </li>

                    <li>
                        <Link to="./instagram">Instagram</Link>
                    </li>
                </nav>
                
                <div className="contact">
                    <Link to="./contact">Book me!</Link>
                 </div>

                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
    )
}

export default Header
// className="nav-link"
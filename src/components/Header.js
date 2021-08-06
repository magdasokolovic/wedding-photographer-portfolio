import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = ({setCursorHovered}) => {
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
                onMouseEnter={()=>setCursorHovered(true)}
                onMouseLeave={()=>setCursorHovered(false)}
                >
                    <Link to="/">Ana Rosso</Link>
                </div>

                <nav className="nav">
                    <li onMouseEnter={()=>setCursorHovered(true)} onMouseLeave={()=>setCursorHovered(false)}>
                        <Link to="./about">About</Link>
                    </li>

                    <li onMouseEnter={()=>setCursorHovered(true)} onMouseLeave={()=>setCursorHovered(false)}>
                        <a href="https://www.instagram.com/anarosso_photography/">Instagram</a>
                    </li>
                </nav>
                
                <div className="contact" onMouseEnter={()=>setCursorHovered(true)} onMouseLeave={()=>setCursorHovered(false)}>
                    <Link to="./contact">Book me!</Link>
                 </div>

                <div className="hamburger-menu" 
                    onMouseEnter={()=>setCursorHovered(true)}
                    onMouseLeave={()=>setCursorHovered(false)}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
    )
}

export default Header
// className="nav-link"
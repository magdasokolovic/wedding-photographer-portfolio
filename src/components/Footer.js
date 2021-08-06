import React from 'react'
import {Instagram, Facebook, Vimeo} from '../svg/social-icons'
import {motion} from 'framer-motion';



const Footer = ({setCursorHovered}) => {

    return (
        <div className="container">
            <div className="footer-nav">
                <div className="footer-container">
                    <motion.div className="footer-flex-container" 
                    initial={{
                        opacity: 0, 
                        y: 40}}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {delay: 1.2}
                      }}
                      >
                        <div className="footer-content">
                            <p onMouseEnter={()=>setCursorHovered(true)} 
                        onMouseLeave={()=>setCursorHovered(false)}>015204248662</p>
                            <p onMouseEnter={()=>setCursorHovered(true)} 
                        onMouseLeave={()=>setCursorHovered(false)}>magda.sokolovic@gmail.com</p>
                        

                        </div>
                        <div className="footer-content wider">
                            <p onMouseEnter={()=>setCursorHovered(true)} 
                        onMouseLeave={()=>setCursorHovered(false)}>Rhinstasse 88</p>
                            <p onMouseEnter={()=>setCursorHovered(true)} 
                        onMouseLeave={()=>setCursorHovered(false)}>10315 Berlin, Germany</p>
                        </div>
                        
                        <div className="footer-social" onMouseEnter={()=>setCursorHovered(true)} 
                    onMouseLeave={()=>setCursorHovered(false)}>
                            <a href="https://www.instagram.com/anarosso_photography/?fbclid=IwAR1EzFcutx77Sl8ZwvF4QTejsJE7ma9PN83PDRBZ4Di9lgaAklLaBGxoxbE">
                                <Instagram/>
                            </a>
                       
                        <div className="footer-social" onMouseEnter={()=>setCursorHovered(true)} 
                    onMouseLeave={()=>setCursorHovered(false)}>
                            <a href="https://www.facebook.com/anarossophotography">
                                <Facebook/>
                            </a>
                        </div>
                        <div className="footer-social" onMouseEnter={()=>setCursorHovered(true)} 
                        onMouseLeave={()=>setCursorHovered(false)}>
                            <a href="/">
                                <Vimeo/>
                            </a>
                        </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
            
       
    )
}

export default Footer

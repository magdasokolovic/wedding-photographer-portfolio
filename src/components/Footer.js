import React from 'react'
import {Instagram, Facebook, Vimeo} from '../svg/social-icons'
const Footer = () => {
    return (
        <div className="container">
            <div className="footer-nav">
                <div className="footer-container">
                    <div className="footer-flex-container">
                        <div className="footer-content">
                            <p>015204248662</p>
                            <p>magda.sokolovic@gmail.com</p>
                        

                        </div>
                        <div className="footer-content wider">
                            <p>Rhinstasse 88</p>
                            <p>10315 Berlin, Germany</p>
                        </div>
                        
                        <div className="footer-social">
                            <a href="/">
                                <Instagram/>
                            </a>
                       
                        <div className="footer-social">
                            <a href="/">
                                <Facebook/>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="/">
                                <Vimeo/>
                            </a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
       
    )
}

export default Footer

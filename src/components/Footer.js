import React, { useEffect } from 'react'
import {Instagram, Facebook, Vimeo} from '../svg/social-icons'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
// const transition = {duration: 1.4, ease: [.6, .01, -.05, .9]}


const Footer = () => {
    const animation = useAnimation()
    const [footerRef, inView] = useInView({
          // if you scroll back up it won't show the animation for the second time
          triggerOnce: true,
          //in order to take user longer to scroll until the animation occurs use rootMargin
          rootMargin: '-300px'
    })

    useEffect(()=>{
        if (inView) {
            animation.start('visible')
        }
    })
    return (
        <div className="container">
            <motion.div className="footer-nav"
             ref={footerRef}
             animate={animation} 
             initial="hidden" 
             variants={{
                 visible: {
                     opacity: 1,
                     y: 0,
                     transition: {duration: 1.3, ease: [.6, 0.05, -.01, .9]}
                 },
                 hidden: {
                     opacity: 0, y: 72,
                 }
             }}>
                <div className="footer-container">
                    <motion.div className="footer-flex-container" 
                    initial={{
                        opacity: 0, 
                        y: 40}}
                    //   animate={{
                    //     opacity: 1,
                    //     y: 0,
                    //     transition: {delay: 1.2, ...transition}
                    //   }}
                      >
                        <div className="footer-content">
                            <p>015204248662</p>
                            <p>magda.sokolovic@gmail.com</p>
                        

                        </div>
                        <div className="footer-content wider">
                            <p>Rhinstasse 88</p>
                            <p>10315 Berlin, Germany</p>
                        </div>
                        
                        <div className="footer-social">
                            <a href="https://www.instagram.com/anarosso_photography/?fbclid=IwAR1EzFcutx77Sl8ZwvF4QTejsJE7ma9PN83PDRBZ4Di9lgaAklLaBGxoxbE">
                                <Instagram/>
                            </a>
                       
                        <div className="footer-social">
                            <a href="https://www.facebook.com/anarossophotography">
                                <Facebook/>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="/">
                                <Vimeo/>
                            </a>
                        </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </div>
            
       
    )
}

export default Footer

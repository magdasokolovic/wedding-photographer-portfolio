import React, {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer'

import {Link} from 'react-router-dom';
import {motion, useAnimation} from 'framer-motion'
import video from '../video/final-bride-video.mp4'


// Scroll behaviour:


const HomeVideo = ({setCursorHovered}) => {
    const [hovered, setHovered] = useState(false)

    const animation = useAnimation()
    const [featuredRef, inView] = useInView({
         // if you scroll back up it won't show the animation for the second time
        triggerOnce: true,
        //in order to take user longer to scroll until the animation occurs use rootMargin
        rootMargin: '-300px'
    })

    useEffect(()=>{
        if (inView) {
            animation.start('visible')
        }
    }, [animation, inView])

    return (
        <motion.div 
            className="featured-video-section" 
            ref={featuredRef}
            animate={animation} 
            initial="hidden" 
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: .6, ease: [.6, 0.05, -.01, .9]}
                },
                hidden: {
                    opacity: 0, y: 72,
                }
            }}>
            <div className="video-section-container">
                <Link>
                    <motion.div className="featured-content"
                        onHoverStart={()=>setHovered(!hovered)}
                        onHoverEnd={()=>setHovered(!hovered)}

                        >
                        <div className="flex-container">
                            <div className="meta">
                                <h4>Special Day</h4>
                                <h4>June 06, 2020</h4>
                            </div>
                        </div>
                        <div className="featured-title">
                           
                            <motion.h2  animate={{opacity: hovered ? 1 : 0}}
                            transition={{duration: .6, ease: [0.6, .05, -.01, .9]}}>Karina & <br/> Tom's wedding</motion.h2>
                            <span className="arrow">
                                <motion.svg
                                    
                                    animate={{x: hovered ? 48 : 0}}
                                    transition={{duration: .6, ease: [0.6, .05, -.01, .9]}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 101 57"
                                        >
                                        <path
                                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                        fill="#FFF"
                                        fillRule="evenodd"
                                        ></path>
                                </motion.svg>
                            </span>
                        </div>
                    </motion.div>
                    <div className="featured-video" 
                    >
                        <video loop autoPlay width="100%" src={video}>  
                        </video>
                    </div>
                </Link>
            </div>
            <div className="video-section-container">
                <div className="featured-projects">
                    <div className="flex-end">
                        <button 
                        onMouseEnter={()=>setCursorHovered(true)}
                        onMouseLeave={()=>setCursorHovered(false)}
                        style={{background: setCursorHovered ? "2px solid #191919" : "none"}}
                        >
                            <span>Featured Photos</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HomeVideo

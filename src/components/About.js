import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
//with useAnimation hook you can control animation: start/stop it

//to capture scroll behaviour:
import {useInView} from 'react-intersection-observer'
// import Image from './Image'


    const About = ({id}) => {
        const animation = useAnimation()
        const [contentRef, inView] = useInView({
             // if you scroll back up it won't show the animation for the second time
            triggerOnce: true,
            //to take for user loner to scroll until the animation occurs use rootMargin
            rootMargin: '-200px'
        })

        useEffect(()=>{
            if (inView) {
                animation.start('visible')
            }
        }, [animation, inView])

    return (
            <div className="container">
            <motion.div className='detailed-information' ref={contentRef}
                animate={animation} initial="hidden"
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
                <div className='about-container'>
                    <div className='about-row'>
                        {/* <div className="about-image">
                        <Image
                            src={process.env.PUBLIC_URL + `/images/image-6.webp`}
                            fallback={process.env.PUBLIC_URL + `/images/image-6.jpg`}
                            alt={id}
                             />
                        </div> */}
                        <div className="about-content">
                            {/* <h2>
                            The insiration behind the artwork & <br /> what it means.
                            </h2> */}
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia, looked up one of
                            the more obscure comes from a line in section 1.10.32.
                            </p>
                        </div>
                        
                    </div>
                </div>
             </motion.div>
            </div>
    )
}

export default About

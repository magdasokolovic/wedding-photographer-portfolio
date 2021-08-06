import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
//with useAnimation hook you can control animation: start/stop it

//to capture scroll behaviour:
import {useInView} from 'react-intersection-observer'

    const About = () => {
        const animation = useAnimation()
        const [contentRef, inView] = useInView({
             // if you scroll back up it won't show the animation for the second time
            triggerOnce: true,
            //to take for user loner to scroll until the animation occurs use rootMargin
            rootMargin: '-300px',
        })

        useEffect(()=>{
            if (inView) {
                animation.start('visible')
            }
        }, [animation, inView])

    return (
            <motion.div className="container" 
                animate={animation} 
                ref={contentRef} 
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
                <div className='detailed-information' >
                        <div className='about-container'>
                            <div className='about-row'>
                                    <p>
                                    Studijuojant dėstytojai turėjo labai skeptišką požiūrį dėl vestuvių fotografavimo. Sakydavo, kad tai ne menas, todėl ir mano požiūris buvo toks pat. Tačiau kartą mano draugai paprašė fotografuoti jų vestuvėse. Kai paviešinome tuoktuvių nuotraukas socialiniuose tinkluose, suaukiau labai didelio susidomėjimo ir prašymų fotografuoti vestuves. Kadangi nesu iš tų žmonių, kurie bijo, nutariau tam ryžtis.
                                    </p>
                            </div>
                        </div>
                </div>
            </motion.div>
    )
}

export default About

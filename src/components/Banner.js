import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }
    }
}

const letterAnimation = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {
            ease: [.6, 0.01, -.05, .95],
            duration: 1,
        }
    }
}
const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setPlayMarquee(true)
        }, 2000)
    }, [])

    return (
        <motion.div className="banner" variants={banner}>
            <BannerDescriptionTop title={'wedding'}/>
            <BannerCenter title={'photographer'} playMarquee={playMarquee}/>
            <BannerScrollDown title={"Vilnius"} />
        </motion.div>
    )
}

const AnimatedLetters = ({title, disabled}) => (
    <motion.span className="row-title" 
        variants={disabled ? null : banner}
        initial='initial' animate='animate'>
        {[...title].map((letter, index)=>(
            <motion.span key={index} className="row-letter" variants={letterAnimation}>{letter}</motion.span>
        ))}
    </motion.span>
)


const BannerDescriptionTop = ({title}) => {
    return (
        <div className={"banner-row"}>
            <div className="row-col">
                <AnimatedLetters title={title}
                />
                {/* {[...title].filter((letter, index)=>index==0 (
                    <span className="decorated">{letter}</span>     
            ))} */}
                
            </div>

            <motion.div className="row-col" 
                initial={{opacity: 0, y: 80}}
                animate={{opacity: 1, y: 0}}
                transition= 
                {{ease: 'easeInOut',duration:1, delay: .4}}>
                <span className="row-message">
                Lorem excepteur quis ea et amet deserunt eu aliquip adipisicing veniam excepteur et nisi occaecat. Id ipsum dolor fugiat sit sunt cillum amet commodo incididunt. 
                </span>
            </motion.div>
        </div>
    )
}

const BannerScrollDown = ({title}) => {
    return (
    <div className={"banner-row center"}>
        <motion.div className="scroll"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition= 
            {{ease: [.6, 0.01, -.05, .95],
             duration:1, delay: 1}}>
            <motion.span 
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeInOut", duration: 1, delay: 1.8}}>scroll</motion.span>
            <motion.span 
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeInOut", duration: 1, delay: 1.8}}>down</motion.span>
        </motion.div>
        <AnimatedLetters title={title} />
    </div>
    )
}   

const BannerCenter = ({title, playMarquee}) => {
    return (
        <div className={`banner-row marquee ${playMarquee && "animate"}`}>
            <div className="marquee__inner">
                <AnimatedLetters title={title} disabled/>
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} disabled/>
                <AnimatedLetters title={title} disabled/>
            </div>
        </div>
    )
}

export default Banner;

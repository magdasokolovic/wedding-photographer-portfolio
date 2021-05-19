import React, {useEffect} from 'react'
import Image from './Image'
import {motion} from 'framer-motion'

//Variants (framer-motion animation):
const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    }
}

const item = {
    //initial:
    hidden: {
        opacity: 0,
        y: 200,
    },
    //animate:
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, 0.01, -.05, .95],
            duration: 1.6,
        },
    },
    //in order for this exit to work you need to use AnimatePresence component
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: .8,
        }
    }
}

const itemMain = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, 0.01, -.05, .95],
            duration: 1.6,
        }
    }
}
const Loader = ({setLoading}) => {

    


    return (
            <div className="loader">
                <motion.div className="loader-inner"
                    variants={container}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    onAnimationComplete={()=>setLoading(false)}>
                    <ImageBlock id='image-1' variants={item}/>
                    <motion.div className="transition-image"
                    variants={itemMain}>
                        <motion.img
                            src={process.env.PUBLIC_URL + `/images/image-8.jpg`}
                            alt="bride with friends on the wedding morning"
                            layoutId="main-image-1"
                            transition= {{ease: [.6, 0.01, -.05, .95],duration: 1.6,}}
                        />
                    </motion.div>
                    <ImageBlock id='image-2' variants={item}/>
                    <ImageBlock id='image-3' variants={item}/>
                    <ImageBlock id='image-4' variants={item}/>
                </motion.div>
            </div>
    )
}

export const ImageBlock = ({id, variants}) => {
    return (
        <motion.div 
        className={`image-block ${id}`} 
        variants={variants}>
            <Image
                src={process.env.PUBLIC_URL + `/images/${id}.webp`}
                fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
                alt={id}
            />
        </motion.div>
    )
}

export default Loader

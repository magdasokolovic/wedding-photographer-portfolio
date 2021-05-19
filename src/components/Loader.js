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
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: .8,
        }
    }
}
const Loader = ({setLoading}) => {

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLoading(false)
        }, 4000)

        return ()=>clearTimeout(timer)
    })


    return (
            <div className="loader">
                <motion.div className="loader-inner"
                    variants={container}
                    initial='hidden'
                    animate='show'
                    exit='exit'>
                    <ImageBlock id='image-1' variants={item}/>
                    <div className="transition-image">
                        <img
                            src={process.env.PUBLIC_URL + `/images/image-7.jpg`}
                            alt="bride with friends on the wedding morning"
                        />
                    </div>
                    <ImageBlock id='image-2' variants={item}/>
                    <ImageBlock id='image-3' variants={item}/>
                    <ImageBlock id='image-4' variants={item}/>
                </motion.div>
            </div>
    )
}

export const ImageBlock = ({id}) => {
    return (
        <div className={`image-block ${id}`}>
            <Image
                src={process.env.PUBLIC_URL + `/images/${id}.webp`}
                fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
                alt={id}
            />
        </div>
    )
}

export default Loader

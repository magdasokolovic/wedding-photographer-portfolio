import React, {useRef, useEffect, useState} from 'react'
import {motion} from "framer-motion"

const CustomCursor = ({cursorHovered}) => {
    // const [cursorHovered, setCursorHovered] = useState(false)
    const cursorRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        })
    }, [])

    return (
        <motion.div 
        className="custom-cursor" 
        ref={cursorRef}
        animate={{
            scale: cursorHovered ? 2 : 1, 
            opacity: cursorHovered ? 1 : 0
        }}
        ></motion.div>
    )
}

export default CustomCursor;

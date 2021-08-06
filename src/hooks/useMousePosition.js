import { useEffect, useState } from 'react'

const useMousePosition = () => {
    let [mousePosition, setMousePosition] = useState({x: null, y: null})

    useEffect(() => {
        function handlePosition(e) {
            setMousePosition({x:e.pageX, y: e.pageY})
        }

        window.addEventListener('mousemove', handlePosition)
        
        return() => window.removeEventListener('mousemove', handlePosition)
    }, [])

    return mousePosition
}

export default useMousePosition

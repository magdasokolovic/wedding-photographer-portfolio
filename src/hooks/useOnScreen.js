import {useState, useEffect} from 'react'

// the purpose of the hook is to check if the element/target is seen on the screen and
function useOnScren(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            //first value is callback, second is options:
            ([entry])=>{
                //Update the state with new values:
                setIntersecting(entry.isIntersecting ?? false)
            },
            {
                theshold: 0.9 // meaning that 90% of the element should be visible in order for change to occur
            }
        )

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef)
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [ref])

    return isIntersecting;
}

export default useOnScren;
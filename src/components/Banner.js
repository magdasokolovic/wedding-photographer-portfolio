import React, {useState, useEffect} from 'react'

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false)

    useEffect(() => {
        setPlayMarquee(true)
    }, [])

    return (
        <div className="banner">
            <BannerDescriptionTop title={'wedding'}/>
            <BannerCenter title={'photographer'} playMarquee={playMarquee}/>
            <BannerScrollDown title={"fashion"} />
        </div>
    )
}

const AnimatedLetters = ({title}) => (
    <span className="row-title">
        {[...title].map((letter)=>(
            <span className="row-letter">{letter}</span>
        ))}
    </span>
)


const BannerDescriptionTop = ({title}) => {
    return (
        <div className={"banner-row"}>
            <div className="row-col">
                <AnimatedLetters title={title}/>
                {[...title].filter((letter, index)=>index===0 (
                        <span className="decorated">{letter}</span>     
                ))}
            </div>

            <div className="row-col">
                <span className="row-message">
                Lorem excepteur quis ea et amet deserunt eu aliquip adipisicing veniam excepteur et nisi occaecat. Id ipsum dolor fugiat sit sunt cillum amet commodo incididunt. 
                </span>
            </div>
        </div>
    )
}

const BannerScrollDown = ({title}) => {
    return (
    <div className={"banner-row center"}>
        <div className="scroll">
            <span>scroll</span>
            <span>down</span>
        </div>
        <AnimatedLetters title={title} />
    </div>
    )
}   

const BannerCenter = ({title, playMarquee}) => {
    return (
        <div className={`banner-row marquee ${playMarquee && "animate"}`}>
            <div className="marquee__inner">
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </div>
        </div>
    )
}

export default Banner;

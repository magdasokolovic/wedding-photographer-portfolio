import {useEffect, useState} from 'react';
import {HashRouter} from 'react-router-dom'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import './sass/main.scss';

//Hooks:
import useMousePosition from './hooks/useMousePosition'
//Components: 
import Header from './components/Header'
import Banner from './components/Banner'
import Loader from './components/Loader'
import About from './components/About';
import HomeVideo from './components/HomeVideo';
import ThreeDMask from './components/3d-mask/threeDMask';
import Footer from './components/Footer';


function App() {
  const [loading, setLoading] = useState(true)
  const [cursorHovered, setCursorHovered] = useState(false)

  const {x, y} = useMousePosition()

  useEffect(() => {
    loading 
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading')
  })



  return (
    <HashRouter>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
            {/* <CustomCursor cursorHovered={cursorHovered}/> */}
            <motion.div 
            className="custom-cursor"
            animate={{
              x: x - 24, 
              y: y - 24,
              scale: cursorHovered ? 1.3 : 1
            }}
            transition={{
              ease: "linear", 
              duration: .2
            }}
            style={{
              background: cursorHovered ? "none" : "#ba181b",
              border: cursorHovered ? "2px solid #ba181b" : "none"
            }}
            ></motion.div>
            {loading ? (
              <motion.div key="loader">
                  <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              
              <>
              
                <div className="container">
                  
                      <Header setCursorHovered={setCursorHovered}/>
                      <Banner />
                      {!loading && (
                        <div className="transition-image final">
                          <motion.img src={process.env.PUBLIC_URL + `/images/image-8.webp`} alt='wedding couple' layoutId="main-image-1"
                          transition= {{ease: [.6, 0.01, -.05, .95],duration: 1.6}}/>
                        </div>
                      )} 
                    
                    <About />
                    <HomeVideo setCursorHovered={setCursorHovered}/> 
                    <ThreeDMask />
                    <Footer setCursorHovered={setCursorHovered}/>
                    
                </div>

                

              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>

    </HashRouter>
    
  );
}



export default App;

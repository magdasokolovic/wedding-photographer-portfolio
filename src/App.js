import {useEffect, useState} from 'react';
import {HashRouter} from 'react-router-dom'

import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'
// context: 
// import { GlobalProvider } from './context/globalContext';
// , useGlobalDispatchContext, useGlobalStateContext
import './sass/main.scss';

//Components: 
import Header from './components/Header'
import Banner from './components/Banner'
import Loader from './components/Loader'
//Pages:
import About from './components/About';
import HomeVideo from './components/HomeVideo';
import ThreeDMask from './components/3d-mask/threeDMask';
import CustomCursor from './components/customCursor';
import Footer from './components/Footer';
import Gallery from './pages/Gallery/Gallery';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading 
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading')
  })



  return (
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
            <CustomCursor/>
        
            {loading ? (
              <motion.div key="loader">
                  <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              
              <>
              
                <div className="container">
                  
                      <Header/>
                      <Banner />
                      {!loading && (
                        <div className="transition-image final">
                          <motion.img src={process.env.PUBLIC_URL + `/images/image-8.jpg`} alt='wedding couple' layoutId="main-image-1"
                          transition= {{ease: [.6, 0.01, -.05, .95],duration: 1.6}}/>
                        </div>
                      )} 
                    
                    <About />
                    <HomeVideo/>
                    <ThreeDMask />
                    <Footer/>
                    
                </div>

                <iframe
                  title="gallery"
                  src="/?gallery"
                  style={{height: "100vh", width: "100%"}}
                />
                

              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>

    
    
  );
}

function RoutedApp() {
  console.warn(window.location.search);

  return (
    <HashRouter>
      {window.location.search.includes("?gallery") ? <Gallery /> : <App />}
    </HashRouter>

  )
}

export default RoutedApp;

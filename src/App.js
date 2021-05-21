import {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
//, Switch, Route
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'

import './sass/main.scss';

//Components: 
import Header from './components/Header'
import Banner from './components/Banner'
import Loader from './components/Loader'
//Pages:
import About from './components/About';
import HomeVideo from './components/HomeVideo';
import ThreeDMask from './components/3d-mask/threeDMask';
// import Gallery from './pages/Gallery/Gallery';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading 
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading')
  })




  return (
    <BrowserRouter>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
      
          {loading ? (
            <motion.div key="loader">
                <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            
            <>
              <div className="container">
                    <Header />
                    <Banner />
                    {!loading && (
                      <div className="transition-image final">
                        <motion.img src={process.env.PUBLIC_URL + `/images/image-8.jpg`} alt='wedding couple' layoutId="main-image-1"
                        transition= {{ease: [.6, 0.01, -.05, .95],duration: 1.6,}}/>
                      </div>
                    )} 
                  
                  <About />
                  <HomeVideo/>
              </div>

                <ThreeDMask />
                
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>

      {/* <Switch>
        <Route exact to="/gallery" component={Gallery} />
        <Route exact to="/about" component={About} />
      </Switch> */}
    </BrowserRouter>
    
    
  );
}

export default App;

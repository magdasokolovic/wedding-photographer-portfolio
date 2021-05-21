import {useEffect, useState} from 'react';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'

import React from 'react'
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import HomeVideo from '../../components/HomeVideo';

export default function Home() {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading 
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading')
  })
    return (
      
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
                
              </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
   
    )
}


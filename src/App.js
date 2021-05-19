import {useEffect, useState} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

import './sass/main.scss';

//Components: 
import Header from './components/Header'
import Banner from './components/Banner'
import Loader from './components/Loader'
//Pages:
import About from './pages/About';
import Gallery from './pages/Gallery';
import Instagram from './pages/Instagram';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading 
    ? document.querySelector('body').classList.add('loading')
    : document.querySelector('body').classList.remove('loading')
  })


  return (
    <HashRouter>
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
         <Header />
         <Banner />
         {!loading && (
           <div className="transition-image final">
             <img src={process.env.PUBLIC_URL + `/images/image-7.jpg`} alt='five girls in a pillow fight'/>
           </div>
         )} 

          <Switch>
            {/* <Route exact path="/" component={Banner}></Route> */}
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/gallery" component={Gallery}></Route>
            <Route exact path="/instagram" component={Instagram}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </>
      )}
    </>
    </HashRouter>
  );
}

export default App;

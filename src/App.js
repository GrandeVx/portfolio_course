import React from 'react';

// componenti

import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetails from './pages/MovieDetails';

// Router
import { Route, Switch, useLocation } from 'react-router-dom';

// Global Style
import GlobalStyle from './components/GlobalStyle';

// Animazioni
import {AnimatePresence} from 'framer-motion';

import ScrollTop from './components/ScrollTop';

function App() {
  
  const location = useLocation();
  
  return (

    <div className="App">
          <GlobalStyle/>
          <ScrollTop/>
          <Nav/>

        <AnimatePresence exitBeforeEnter>

          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
            <AboutUs />
            </Route>
            
            <Route path="/work" exact>
            <OurWork />
            </Route>

            <Route path="/work/:id">  
              <MovieDetails/>
            </Route>

            <Route path="/contact">
            <ContactUs /> 
            </Route>

          </Switch>
      

        </AnimatePresence>

    </div>
  );
}

export default App;

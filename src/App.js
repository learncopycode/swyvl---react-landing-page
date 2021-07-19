
import { useRef, useEffect } from 'react';

import { useIntersection } from 'react-use'
import { useInView } from "react-intersection-observer"
import ScrollAnimation from 'react-animate-on-scroll';
import gsap from 'gsap'

import logo from './Components/img/symbol.svg';
import logoblack from './Components/img/logo.svg';
import swyvl from './Components/img/swyvl.svg';
import './App.css';
import Page1 from './Components/Page1.js';
import Page2 from './Components/Page2.js';
import Page3 from './Components/Page3.js';
import Page4 from './Components/Page4.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { CSSTransition } from 'react-transition-group';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion, useAnimation } from "framer-motion"


function App() {



  return (
    <Router>
      <div className="App position-relative">



        {/* <CSSTransition
          classNames="example"
          in={true}
          appear={true}
          timeout={500}>

          <h2>Fading at Initial Mount</h2>
        </CSSTransition>*/}



        <div className="containerr">
          <Header />



          <Page2 />





          <Page3 />
          <Page4 />
          <Footer />
        </div>







      </div>
    </Router>




  );
}

export default App;

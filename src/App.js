
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
          <div className="position-relative a100">
            <div className="position-absolute a100">

              {/* */}
              <div className=" ">
                <motion.div className="" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ opacity: { delay: 5, duration: 3, } }}  >
                  <div className="container">
                    <div className="position-absolute pt-4">
                      <img src={logoblack} alt="" />
                    </div>
                  </div>
                </motion.div>

                <motion.div className="" animate={{ opacity: 0 }} initial={{ opacity: 1 }} transition={{ opacity: { delay: 1.5, duration: 4, } }}  >
                  <div className="back">

                    <motion.div className="" animate={{ y: -420 }} initial={{}} transition={{ delay: 1.5, duration: 4 }}  >
                      <div className="middle">
                        <div className="d-inline">
                          <motion.div className="" animate={{ x: -400, scaleY: 0.5, scaleX: 0.5 }} initial={{}} transition={{ delay: 1.5, duration: 4 }}  >
                            <motion.div className="" animate={{ x: 20 }} initial={{ x: 100 }} transition={{ duration: 2 }}  >

                              <img width="50px" className="d-inline" src={logo} alt="" />


                              <motion.div className="d-inline pl-4" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ opacity: { delay: .5, duration: 4, }, delay: 3 }}  >
                                <img width="200px" src={swyvl} alt="" />
                              </motion.div>
                            </motion.div>
                          </motion.div>



                        </div>
                      </div>
                    </motion.div>

                  </div>
                </motion.div>

              </div>
              {/* */}



            </div>

            <div className="position-absolute a100">
              <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 4, duration: 4 }}><Page1 /></motion.div>
            </div>


          </div>



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

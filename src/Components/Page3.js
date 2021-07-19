import React from 'react'
import { motion, useAnimation } from "framer-motion"
import "./page-3.css"
import img2 from "./img/img2.png"
import { useRef, useEffect } from 'react';
import je from './img/je.png'
import left from './img/left.png'
import { useIntersection } from 'react-use';
import gsap from 'gsap'
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap";
export const Page3 = () => {
    const print = (element) => {

        return (
            <div className="position-relative bot">
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ delay: 1.5 }} className="je"><img src={je} alt="" />  </motion.div>
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ delay: 2 }} className="left"><img src={left} alt="" />  </motion.div>
            </div>



        )
    }

    const ref2 = useRef(null);
    const intersection = useIntersection(ref2, {
        root: null,
        rootMargin: "0px",
        threshold: .5,


    })


    const fadeIn = (element) => {
        TweenMax.fromTo(element, 1, { scale: .8 }, { scale: 1 }, 0);


        gsap.to(element, 4, {
            scale: 1.25,
            opacity: 1,

            ease: "power4.out",



        })
    }

    const fadeOut = (element) => {

        gsap.to(element, 3, {
            opacity: 0,

            ease: "power4.out"

        })
    }
    if (intersection && intersection.intersectionRatio < 0.5) {
        fadeOut('.fadeIn1')

    }
    else {
        fadeIn('.fadeIn1');

    }
    return (
        <div ref={ref2}>
            <div className="page-3 fadeIn1">


                <div className="container">
                    <div className="row content-page-3">
                        <div className="col-12 col-md-5 position-relative specific2">

                            <img src={img2} alt="" />
                            {intersection && intersection.intersectionRatio > 0.5 ? print() : () => {
                                return ("")
                            }}

                        </div>


                        <div className="col-12 col-md-7 right-page-3 top2">

                            <h2 className="inner-3">Start to learn and meet people</h2>
                            <p className="para-3">This text is a place holder, we will change it when we get the second survey, this can be a couple more lines</p>
                            <p className="para-3"><b>This is also a placeholder for a claim or catchphrase</b></p>



                        </div>






                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page3

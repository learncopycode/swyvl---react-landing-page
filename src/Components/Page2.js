import React from 'react'
import { motion, useAnimation } from "framer-motion"

import "./page-2.css"
import { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dot from './img/dot.png'
import right from './img/right.png'
import img1 from "./img/img1.png"
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap";
export const Page2 = () => {
    const ref1 = useRef(null);
    const ref10 = useRef(null);
    const intersection = useIntersection(ref1, {
        root: null,
        rootMargin: "0px",
        threshold: .5,


    })
    const intersection10 = useIntersection(ref10, {
        root: null,
        rootMargin: "0px",
        threshold: .8,


    })


    const fadeIn = (element) => {
        TweenMax.fromTo(element, 1, { scale: .8 }, { scale: 1 }, 0);


        gsap.to(element, 3, {
            scale: 1.25,
            opacity: 1,

            ease: "power4.out",



        })
    }
    const print = (element) => {

        return (
            <div className="position-relative bot">
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ delay: 2 }} className="dot"><img src={dot} alt="" />  </motion.div>
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ delay: 1.5 }} className="right"><img src={right} alt="" />  </motion.div>
            </div>



        )
    }

    const fadeOut = (element) => {

        gsap.to(element, 3, {
            opacity: 0,

            ease: "power4.out"

        })
    }
    if (intersection && intersection.intersectionRatio < 0.5) {
        fadeOut('.fadeIn');



    }
    else {
        fadeIn('.fadeIn');


    }


    gsap.registerPlugin(ScrollTrigger);
    const con = useRef(null);
    useEffect(() => {
        const element = con.current;
        gsap.fromTo(
            element.querySelector(".fs"),
            {
                opacity: 0,


            },
            {
                opacity: 1,

                duration: 1,
                scrollTrigger: {
                    trigger: element.querySelector(".fs"),
                    toggleActions: 'restart none resume none',
                    start: "top bottom",
                    end: 'top 30%',

                    scrub: true,

                }

            }
        );
    }, []);
    return (
        <div ref={ref1} className="b25">
            <div className="page-2 fadeIn" ref={con}>
                <div className="container fs">
                    <div className="content-page-2 row">
                        <div className="left-page-2 col-12 col-md-7 top1">

                            <h2 className="inner-h2 top ">Put in contact with teachers</h2>
                            <p className="innerpara">Find the teacher for your chosen topic</p>
                            <ul>
                                <li>Language</li>
                                <li>Topic-2</li>
                                <li>Topic-3 </li>
                                <li>Topic-4 </li>
                            </ul>


                        </div>
                        <div className="col-12 col-md-5 position-relative specific">

                            <img src={img1} alt="" />
                            {intersection && intersection.intersectionRatio > 0.5 ? print() : () => {
                                return ("")
                            }}


                        </div>






                    </div>

                </div>

            </div>

        </div>
    )
}

export default Page2

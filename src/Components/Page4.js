import React from 'react'
import "./page-4.css"
import { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
import { motion, useAnimation } from "framer-motion"
import gsap from 'gsap'
import phone from "./phone3.png"
import img3 from "./img/img3.png"
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap";
export const Page4 = () => {

    const print = (element) => {

        return (
            <div className="position-relative bot">
                <motion.div animate={{ y: 0, scale: 1, opacity: 1 }} initial={{ y: 200, scale: 0.8, opacity: 0 }} transition={{ delay: 1.5, duration: 2 }} className=""><h1 className="heading-4">Build your community & learn</h1> </motion.div>

            </div>



        )
    }

    const ref3 = useRef(null);
    const intersection = useIntersection(ref3, {
        root: null,
        rootMargin: "50%",
        threshold: 0.5


    })


    const fadeIn = (element) => {
        TweenMax.fromTo(element, 1, { scale: .6 }, { scale: 1 }, 0);



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
    if (intersection && intersection.intersectionRatio < 0.4) {
        fadeOut('.fadeIn2')

    }
    else {
        fadeIn('.fadeIn2');

    }
    return (


        <div>

            <div ref={ref3} className="page-4 fadeIn2">
                <div className="container ">
                    <div className="row">
                        <div className="content-page-4">
                            <div className="center-page-4 ">
                                <div className="centerit bkg">
                                    <div className="w-100"></div>
                                    <img src={img3} alt="" />
                                    <div className="">
                                        <div className="text-center"> {intersection && intersection.intersectionRatio > 0.5 ? print() : () => {
                                            return ("")
                                        }}</div>
                                    </div>

                                </div>

                                <h1 className="header-mail-section text-center">Build your community & learn</h1>




                            </div>



                        </div>
                        <div className="center-form-4">
                            <div className=""></div>
                            <div className="">
                                <p className="text-center"><b>Get the latest news</b></p>
                                <div className="centrify">
                                    <input className="inputcust" type="text" placeholder="email@example.com" /><input type="submit" value="Subscribe" />
                                </div>

                            </div>

                            <div className="col-md-2"></div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page4

import React from 'react'
import "./page-1.css"
import { useRef, useEffect } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Page1 = (props) => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".first"),
            {
                opacity: 0,
                color: 'white'

            },
            {
                opacity: 1,
                color: 'black',
                duration: 1,
                scrollTrigger: {
                    trigger: element.querySelector(".first"),
                    toggleActions: 'restart none resume none',
                    start: "top bottom",
                    end: 'top 30%',

                    scrub: true,

                }

            }
        );
    }, []);
    return (
        <div >
            <div className="container page-1 a100">
                <div className="navbar row">
                    <img width="100px" src="logo.svg" alt="" />
                </div>
                <div className="row content-page-1  ">
                    <div ref={ref} className="center-page-1">

                        <h1 className="heading-1 first" >Meet, Network & Swap Skills</h1>
                        <p className="para-1">A social platform where users can connect with like-minded individuals to trade their skills and time for free. It's tailored for professionals in the beauty, fitness, eduacation and creative industries</p>

                        <div className="center-form-1">
                            <p className="text-center"><b>Get the latest news</b></p>
                            <div className="onlyinput"><input type="text" placeholder="email@example.com" /><input type="submit" value="Subscribe" /></div>
                        </div>

                    </div>



                </div>
            </div>

        </div>
    )
}

export default Page1

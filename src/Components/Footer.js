import React from 'react'
import logo from "./img/whitelogo.svg"
import "./footer.css"
import insta from "./img/002-instagram.svg"
import facebook from "./img/003-facebook.svg"
import twitter from "./img/001-twitter.svg"
import {

    Link
} from "react-router-dom";
export const Page1 = () => {
    return (
        <div>
            <div className="footer ">
                <div className="container-fluid footerback">
                    <div className="container ">
                        <div className="row ">

                            <div className="col-12 col-md-6 padding ">
                                <img className="mid" src={logo} alt="" />
                            </div>
                            <div className="col-12 col-md-2  text-white position-relative  text-cen-sm">
                                <div className="contactinfo">
                                    <p>Contact us at:</p>
                                    <div className="p-4">
                                        <p>info@swyvl.co.uk</p>
                                        <p>+44 0202 123412</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-white text-cen-sm">
                                <p>Follow us on:</p>
                                <div className="p-4 text-cen-sm">
                                    <Link to="https://instagram.com"><img src={insta} alt="" /></Link>
                                    <Link to="x.com"> <img src={twitter} alt="" /></Link>
                                    <Link to="x.com"><img src={facebook} alt="" /></Link>
                                </div>

                            </div>
                        </div></div>

                </div>
            </div>

        </div>
    )
}

export default Page1

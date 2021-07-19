import React from 'react'
import { motion } from "framer-motion"
import logo from './img/symbol.svg';
import logoblack from './img/logo.svg';
import swyvl from './img/swyvl.svg';
export const Header = () => {
    return (
        <div>
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
    )
}

export default Header

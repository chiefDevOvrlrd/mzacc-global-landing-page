import { useState } from "react"
import "../styles/components/_navbar.scss"
import logo from '../assets/trace (1).svg'
import  ArrowIcon from '../assets/arrow_left_alt_24dp_F0F0F0_FILL0_wght400_GRAD0_opsz24.svg?react'
import { motion }from 'motion/react'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className="navbar">
            <div className="navbar__container">
                <div className={`navbar__logo ${isOpen ? "hide-logo" : ""}`}>
                    <img src={logo} alt="mzacc-global-logo" />
                    <p><span className="bigger__blue">MZACC</span><span className="smaller__ash">GLOBAL</span></p>
                </div>
                <div className={`navbar__sidebar ${isOpen ? "expanded" : ""}`}>
                    <motion.button
                        className={`navbar__toggle ${isOpen ? "open" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 },
                        }}
                        animate={{
                            rotate: isOpen ? 180 : 0
                        }}
                    >
                        <ArrowIcon className='arrow'/>
                    </motion.button>
                    <nav className={`navbar__links ${isOpen ? "expanded" : ""}`}>
                        <ul>
                            <motion.li
                                whileHover={{
                                    scale: 1.2,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            ><a href="#home">Home</a></motion.li>
                            <motion.li
                                whileHover={{
                                    scale: 1.2,
                                }}
                                whileTap={{
                                    scale: 0.9,
                            }}><a href="#ourpurpose">Our Purpose</a></motion.li>
                            <motion.li
                                whileHover={{
                                    scale: 1.2,
                                }}
                                whileTap={{
                                    scale: 0.9,
                            }}><a href="#ecosystem">Ecosystem/Partners</a></motion.li>
                            <motion.li
                                whileHover={{
                                    scale: 1.2,
                                }}
                                whileTap={{
                                    scale: 0.9,
                            }}><a href="#pricing">Pricing</a></motion.li>
                            <motion.li
                                whileHover={{
                                    scale: 1.2,
                                }}
                                whileTap={{
                                    scale: 0.9,
                            }}><a href="#reach-us">Contact Us</a></motion.li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
        </>
    )
}
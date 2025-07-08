import { useEffect, useRef, useState } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView} from 'motion/react'
import { WhiteButton, GreenButton } from "../components/ui/Buttons";
import '../styles/layout/_hero.scss'

export const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {setBackground} = useBackground();
    const [bgReady, setBgReady] = useState(false);
    const isInView = useInView(ref, {amount: 0.5})

    useEffect(() =>{
        if (isInView) {
            setBackground("#000000")
        }
    }, [isInView, setBackground]);

    useEffect(() => {
        const timer = setTimeout(() => setBgReady(true), 400); // match your bg transition time
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <motion.section
                ref={ref}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hero__container"
            >
                {bgReady && (
                    <>
                        <div className="hero__text">
                            <h1 className="intro__text">
                                <motion.span
                                    initial={{ opacity:0, y:20}}
                                    animate={{ opacity:1, y:0 }}
                                    transition={{ duration: 0.5, delay:0.4 }}
                                >Innovate.</motion.span>
                                <motion.span
                                    initial={{ opacity:0, y:20}}
                                    animate={{ opacity:1, y:0 }}
                                    transition={{ duration: 0.5, delay:0.7 }}
                                >Connect.</motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                >Transform Africa.</motion.span>
                            </h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 1.5}}
                            >
                                Driving digital solutions for Africa’s industries—AI, software, design, and more. We empower businesses, bridge networks, and deliver scalable impact across the continent and beyond.
                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: 1.7}}
                            className="hero__buttons"
                        >
                            <GreenButton text="Explore"/>
                            <WhiteButton text="Solution"/>
                        </motion.div>
                        <div className="hero__imgs">
                            <div className="img__container">

                                <motion.div 
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: -50,
                                        scale: 1,
                                    }}
                                    transition={{ duration: 0.6, delay: 1.8 }}
                                    whileHover={{
                                        scale: 0.9,
                                        transition: { duration: 0.2 },
                                    }}

                                    className="img1 img"
                                >
                                    <p>img</p>
                                </motion.div>
                                <motion.div 
                                    initial={{scale:0.9, opacity:0}}
                                    animate={{scale:1, opacity:1}}
                                    transition={{duration:0.5, delay:2.1 }}
                                    whileHover={{
                                        scale: 0.9,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="img2 img"
                                >
                                    <p>img</p>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 50,
                                    }}
                                    transition={{ duration: 0.6, delay: 1.8 }}
                                    whileHover={{
                                        scale: 0.9,
                                        transition: { duration: 0.2 , ease: "easeInOut" },
                                    }}
                                    className="img3 img">
                                    <p>img</p>
                                </motion.div>
                            </div>
                        </div>
                    </>
                )}
            </motion.section>
        </>
    );
};
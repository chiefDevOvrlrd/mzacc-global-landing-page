import { useEffect, useRef, useState } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView} from 'motion/react'
import { GreenButton } from "../components/ui/Buttons";
import { useMediaQuery } from "../hooks/useMediaQuery";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import '../styles/layout/_hero.scss'




export const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {setBackground} = useBackground();
    const [bgReady, setBgReady] = useState(false);
    const isInView = useInView(ref, {amount: 0.3});
    const isMobile = useMediaQuery('(max-width: 480px)');
    const isTablet = useMediaQuery('(max-width: 884px)');
    const img1X = isMobile ? -10 : isTablet ? -20 : -50;
    const img3X = isMobile ? 10 : isTablet ? 20 : 50;

    useEffect(() =>{
        if (isInView) {
            setBackground("#021526")
        }
    }, [isInView, setBackground]);

    useEffect(() => {
        const timer = setTimeout(() => setBgReady(true), 400); // match your bg transition time
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <motion.section
                id="home"
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
                                    className="intro__text-first"
                                >Mzacc Global</motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                >Driving Innovation Forward –</motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.3 }}
                                >From Africa to the World.
                                </motion.span>
                            </h1>
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 1.5}}
                            >
                                Mzacc Global is a multidimensional tech & innovation conglomerate building scalable systems to solve real-world problems through software, AI, design, smart infrastructure, fintech, education, oil tech, and more.

                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: 1.7}}
                            className="hero__buttons"
                        >
                            <GreenButton text="Contact Us"/>
                        </motion.div>
                        <div className="hero__imgs">
                            <div className="img__container">

                                <motion.div 
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={
                                        isInView ? {
                                        opacity: 1,
                                        x: img1X,
                                        scale: 1,
                                    }: {
                                        opacity: 0,}}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    whileHover={{
                                        scale: 0.9,
                                        transition: { duration: 0.2 },
                                    }}

                                    className="img1 img"
                                >
                                    <img src={img1} alt="Image 1" />
                                </motion.div>
                                <motion.div 
                                    initial={{scale:0.9, opacity:0}}
                                    animate={isInView ? {scale:1, opacity:1} : {scale:0.9, opacity:0}}
                                    transition={{duration:0.5, delay:1.5 }}
                                    whileHover={{
                                        scale: 0.9,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="img2 img"
                                >
                                    <img src={img2} alt="mzacc-global" />
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={isInView ? {
                                        opacity: 1,
                                        x: img3X,
                                    } : {opacity: 0,}}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    whileHover={{
                                        scale: 0.9,
                                        transition: { duration: 0.2 , ease: "easeInOut" },
                                    }}
                                    className="img3 img">
                                    <img src={img3} alt="mzacc-global" />
                                </motion.div>
                            </div>
                        </div>
                    </>
                )}
            </motion.section>
        </>
    );
};
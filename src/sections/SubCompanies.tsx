import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView } from 'motion/react';
import HorizontalScroll from "../components/ui/HorizontalScroll";
import deriv from '../assets/deriv.png';
import gonomad from '../assets/gonomad.png';
import exness from '../assets/exness.png';
import inveslo from '../assets/inveslo.png';  
import oneroyal from '../assets/oneroyal.png'; 
import "../styles/layout/_sub-companies.scss"

const containerVariants = {
     visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.4, // ✅ this is the delay after becoming visible
        },
    },
    hidden: {
        opacity: 0,
    },
};

const headingVariants = {
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.2 + i * 0.4,
            ease: [0.42, 0, 0.58, 1] as const,
        },
    }),
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
};


export const SubCompanies = () => {
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {amount: "some"});
    const partnerRef = useRef<HTMLDivElement>(null);
    const partnerInView = useInView(partnerRef, { amount: 0.4 });

    useEffect(() => {
        setBackground(isInView ? "#021526" : "#F2F2F2");
    }, [isInView, setBackground]);

    
    return(
        <div ref={ref}>
            <motion.section
                id="ecosystem"
                className="sub-companies"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="sub-companies__content">
                    <motion.h1
                        className="sub-companies__content-heading"
                        variants={headingVariants} custom={1}
                    >
                        OUR ECOSYSTEM 
                    </motion.h1>
                    <h3 className="sub-companies__content-text">
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView?{ opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                        >Driving Innovation Forward – </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 1.3 }}
                        > Solving Complex Global Challenges.
                        </motion.span>
                    </h3>
                    <motion.p
                        initial={{opacity: 0}}
                        animate={isInView ? {opacity: 1} : {opacity: 0}}
                        transition={{duration: 0.5, delay: 1.5}}
                    >
                        Mzacc Global is Africa’s rising global tech and innovation conglomerate. We’re building the future through 10 interconnected companies across AI, software, cybersecurity, real estate, education, finance, marketing, and sustainability.
                        From Lagos to London, Accra to Abu Dhabi — we design intelligent systems, scalable platforms, and digital ecosystems that empower businesses, transform industries, and rewrite what’s possible.
                        We are just getting started.Revolutionizing Africa and beyond. Let’s drive innovation forward — together — and solve complex global challenges.
                    </motion.p>
                </div>
                <HorizontalScroll/>
                <div className="partnership-grid__container"
                    ref={partnerRef}
                >
                    <motion.h1
                        initial="hidden"
                        animate={partnerInView ? "visible" : "hidden"}
                        variants={headingVariants} 
                        custom={0}
                        className="partnership-grid__container__heading"
                    >OUR PARTNERS</motion.h1>

                    <motion.div 
                        className="partnership-grid"
                        initial="hidden"
                        animate={partnerInView ? "visible" : "hidden"}
                        variants={headingVariants} 
                        custom={1}
                    >
                        <div className="partner">
                            <div className="img__container">
                                <img src={deriv} alt="Deriv" />
                            </div>
                        </div>
                        <div className="partner">
                            <div className="img__container">
                                <img src={gonomad} alt="gonomad" />
                            </div>
                        </div>
                        <div className="partner">
                            <div className="img__container">
                                <a href="https://one.exness.link/a/c_uog2y3qnsc"><img src={exness} alt="exness" /></a>
                            </div>
                        </div>
                        <div className="partner">
                            <div className="img__container">
                                <a href="https://www.inveslo.com/register?referral=1615"><img src={inveslo} alt="inveslo" /></a>
                            </div>
                        </div>
                        <div className="partner">
                            <div className="img__container">
                                <a href="https://vc.cabinet.oneroyal.com/links/go/10675"><img src={oneroyal} alt="oneroyale" /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}
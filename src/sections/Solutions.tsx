import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion, useInView } from 'motion/react';
import Carousel from '../components/CarouselBody';
import { IconFile } from '@tabler/icons-react';
import { IconFlare } from '@tabler/icons-react';
import { IconMessageCircle } from '@tabler/icons-react';
import { GreenButton } from "../components/ui/Buttons";
import '../styles/layout/_solution.scss';

const containerVariants = {
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    },
    hidden: {
        opacity: 0,
        transition: { duration: 0.4 }
    }
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

const textVariants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.8 + i * 0.4 },
    }),
    hidden: { opacity: 0, y: 40 },
};

const paragraphVariants = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 1.5 } },
    hidden: { opacity: 0 },
};

const carouselVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.8 } },
    hidden: { opacity: 0, y: 40 },
};

export const Solution = () => {
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.2 });
    const deliverRef = useRef<HTMLDivElement>(null);
    const deliverInView = useInView(deliverRef, { amount: 0.2 });
    const isTablet = useMediaQuery('(max-width: 884px)');
    const isMobile = useMediaQuery('(max-width: 480px)');

    useEffect(() => {
        setBackground(isInView ? "#F2F2F2" : "#021526");
    }, [isInView, setBackground]);

    return (
    <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="solution__container"
    >
        <div className="solution__text">
            <motion.h1 
                variants={headingVariants}
            >
                EXPLORE OUR CORE CAPABILITIES
            </motion.h1>
            <h3>
                <motion.span variants={textVariants} custom={0}>
                    Real solutions.
                </motion.span> <motion.span variants={textVariants} custom={1}>
                    Global impact.
                </motion.span>
            </h3>
            <motion.p variants={paragraphVariants}>
                Discover how our platforms connect real-world needs with digital
                innovation. We deliver scalable tools for businesses, talent, and
                economies across Africa and beyond.
            </motion.p>
        </div>

        <motion.div variants={carouselVariants}>
            <Carousel />
        </motion.div>

        {/* do a grid animation later, or not...  */}
        <div className="solution__gridtext" ref={deliverRef}>
            <motion.h1
                initial="hidden"
                animate={deliverInView ? "visible" : "hidden"}
                variants={headingVariants} 
                custom={0}
                className="solution__gridtext__header"
            >WHAT WE DELIVER</motion.h1>
            <motion.h3 
                initial="hidden"
                animate={deliverInView ? "visible" : "hidden"} 
                variants={textVariants}
                custom={1}
                className="solution__gridtext__text"
            >
                Solutions for real-world impact.
            </motion.h3>
            <div className="solution__grid">
                <motion.div className="grid">
                    <div className="icon__container"> 
                        <IconFile
                            width={isMobile ? 28 : isTablet ? 40 : 50}
                            height={isMobile ? 28 : isTablet ? 40 : 50}
                            stroke={1.3}
                        />
                    </div>
                    <h1>Custom Software</h1>
                    <p>Bespoke platforms and apps built to address business needs and drive measurable results.</p>
                </motion.div>
                <motion.div className="grid">
                    <div className="icon__container"> 
                        <IconFlare
                            width={isMobile ? 28 : isTablet ? 40 : 50}
                            height={isMobile ? 28 : isTablet ? 40 : 50}
                            stroke={1.3}
                        />
                    </div>
                    <h1>Custom Software</h1>
                    <p>Bespoke platforms and apps built to address business needs and drive measurable results.</p>
                </motion.div>
                <motion.div className="grid">
                    <div className="icon__container"> 
                        <IconMessageCircle
                            width={isMobile ? 28 : isTablet ? 40 : 50}
                            height={isMobile ? 28 : isTablet ? 40 : 50}
                            stroke={1.3}
                        />
                    </div>
                    <h1>Custom Software</h1>
                    <p>Bespoke platforms and apps built to address business needs and drive measurable results.</p>
                </motion.div>
                <motion.div className="grid">
                    <div className="icon__container"> 
                        <IconFlare
                            width={isMobile ? 28 : isTablet ? 40 : 50}
                            height={isMobile ? 28 : isTablet ? 40 : 50}
                            stroke={1.3}
                        />
                    </div>
                    <h1>Custom Software</h1>
                    <p>Bespoke platforms and apps built to address business needs and drive measurable results.</p>
                </motion.div>
                <motion.div className="grid">
                    <div className="icon__container"> 
                        <IconFlare
                            width={isMobile ? 28 : isTablet ? 40 : 50}
                            height={isMobile ? 28 : isTablet ? 40 : 50}
                            stroke={1.3}
                        />
                    </div>
                    <h1>Custom Software</h1>
                    <p>Bespoke platforms and apps built to address business needs and drive measurable results.</p>
                </motion.div>
                <motion.div className="grid">
                    <div className="icon__container"> 
                        <IconFlare
                            width={isMobile ? 28 : isTablet ? 40 : 50}
                            height={isMobile ? 28 : isTablet ? 40 : 50}
                            stroke={1.3}
                        />
                    </div>
                    <h1>Custom Software</h1>
                    <p>Bespoke platforms and apps built to address business needs and drive measurable results.</p>
                </motion.div>
            </div>
        </div>
        <div className="solution__button">
            <GreenButton text="Discover More"/>
        </div>
    </motion.section>
    );
};

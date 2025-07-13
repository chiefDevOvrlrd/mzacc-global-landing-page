import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView } from 'motion/react';
import Carousel from '../components/CarouselBody';
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


const carouselVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.8 } },
    hidden: { opacity: 0, y: 40 },
};

export const Solution = () => {
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.2 });

    useEffect(() => {
        setBackground(isInView ? "#F2F2F2" : "#021526");
    }, [isInView, setBackground]);

    return (
    <motion.section
        id="ourpurpose"
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
                OUR PURPOSE
            </motion.h1>
            <h3>
                <motion.span variants={textVariants} custom={0}>
                    So ,
                </motion.span> <motion.span variants={textVariants} custom={1}>
                    What drives us?
                </motion.span>
            </h3>
        </div>

        <motion.div variants={carouselVariants}>
            <Carousel />
        </motion.div>

        {/* do a grid animation later, or not...  */}
        
        {/* i guess not..... */}
    </motion.section>
    );
};

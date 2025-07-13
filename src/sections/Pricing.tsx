
import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView } from 'motion/react';
import { PriceCard } from "../components/ui/PriceCard";
import "../styles/layout/_pricing.scss"
const containerVariants = {
     visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.4, // ✅ this is the delay after becoming visible
        },
    },
    hidden: {
        opacity: 0,
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

export const Pricing = () =>{
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.2 });

    useEffect(() => {
        setBackground(isInView ? "#F2F2F2" : "#021526");
    }, [isInView, setBackground]);

    return(
        <motion.section
            id="pricing"
            className="pricing"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.h1
                className="pricing__text"
                variants={textVariants} custom={1}
            >
                Pricing for every stage
            </motion.h1>
            <PriceCard basic="200" business="100" enterprice="1000" />
        </motion.section>
    )
    
}
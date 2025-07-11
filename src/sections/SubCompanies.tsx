import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView } from 'motion/react';
import HorizontalScroll from "../components/ui/HorizontalScroll"
import "../styles/layout/_sub-companies.scss"

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


export const SubCompanies = () => {
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.1 });

    useEffect(() => {
        setBackground(isInView ? "#021526" : "#F2F2F2");
    }, [isInView, setBackground]);

    
    return(
        <motion.section
            className="sub-companies"ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <HorizontalScroll/>
        </motion.section>
    )
}
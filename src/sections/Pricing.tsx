import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView } from 'motion/react';
import InvestorTiers from "../components/InvestorTable";
// import { PriceCard } from "../components/ui/PriceCard";
import PricingTable from "../components/PricingTable";
import "../styles/layout/_pricing.scss"
const containerVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
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
            duration: 0.,
            delay: 0.2 + i * 0.2,
            ease: [0.42, 0, 0.58, 1] as const,
        },
    }),
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
};

const faqItemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            delay: i * 0.3, // 👈 tighter staggered delay
            ease: [0.42, 0, 0.58, 1] as const
        },
    }),
};

const textVariants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.8 + i * 0.4 },
    }),
    hidden: { opacity: 0, y: 20 },
};

const paragraphVariants = {
    visible: {
        opacity: 1,
        transition: {duration: 0.4, delay: 1.5}
    },
    hidden: { opacity: 0}
}

export const Pricing = () =>{
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const extraRef = useRef<HTMLUListElement>(null);
    const investmentRef = useRef<HTMLDivElement>(null);
    const benefitRef = useRef<HTMLUListElement>(null);


    const isInView = useInView(ref, { amount: 0.2 });
    const extraInView = useInView(extraRef, { amount: 0.2 });
    const investmentInView = useInView(investmentRef, { amount: 0.3 });
    const benefitInView = useInView(benefitRef);

    useEffect(() => {
        setBackground(isInView ? "#F2F2F2" : "#021526");
    }, [isInView, setBackground]);

    useEffect(() => {
    console.log("extraInView:", benefitInView);
    }, [benefitInView]);
    return(
        <div className="pricing-investment__section"
            ref={ref}
        >
            <motion.section
                id="pricing"
                className="pricing"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h1
                    className="pricing__heading"
                    variants={headingVariants} custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    OUR PRICING
                </motion.h1>
                <motion.h3
                    className="pricing__text"
                    variants={textVariants} custom={1}
                >
                    Pricing for every stage
                </motion.h3>
                <PricingTable />
                <ul
                    ref={extraRef}
                    className="extra"
                >
                    <motion.li
                        className="extra__item"
                        variants={faqItemVariants} custom={0}
                        animate={extraInView ? "visible" : "hidden"}
                    >
                        * All packages include Consultation & Project Management.
                    </motion.li>
                    <motion.li
                        className="extra__item"
                        variants={faqItemVariants} custom={1}
                        animate={extraInView ? "visible" : "hidden"}
                    >
                        * Naira rates use average market exchange — final quotes are always custom.
                    </motion.li>
                    <motion.li
                        className="extra__item"
                        variants={faqItemVariants} custom={2}
                        animate={extraInView ? "visible" : "hidden"}
                    >
                        * Flexible retainer or milestone payments available.
                    </motion.li>
                </ul>
            </motion.section>
            <motion.section
                id="investment"
                className="investment"
                ref={investmentRef}
                variants={containerVariants}
                initial="hidden"
                animate={investmentInView ? "visible" : "hidden"}
            >
                <motion.h1
                    className="investment__heading"
                    variants={headingVariants} custom={0}
                    initial="hidden"
                    animate={investmentInView ? "visible" : "hidden"}
                >
                    INVESTMENT PLANS
                </motion.h1>
                <motion.h3
                    className="investment__text"
                    variants={textVariants} custom={0}
                    initial="hidden"
                    animate={investmentInView ? "visible" : "hidden"}
                >
                    Who is this for?
                </motion.h3>
                <motion.p
                    className="investment__paragraph"
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={investmentInView ? "visible" : "hidden"}
                >
                    Individuals, entrepreneurs, businesses, organizations, venture funds, or corporate partners ready to invest in MZACC GLOBAL’s 10 subcompanies, projects, or revenue streams.
                </motion.p>
                <motion.div
                    variants={textVariants} custom={1}
                    initial="hidden"
                    animate={investmentInView ? "visible" : "hidden"}
                >    
                    <InvestorTiers />
                </motion.div>
                <ul className="benefits" ref={benefitRef}>
                    Investor Benefits:
                    <motion.li
                        className="benefits__item"
                        variants={faqItemVariants} custom={0}
                        animate={benefitInView ? "visible" : "hidden"}
                    >
                        * Diversified growth streams.
                    </motion.li>
                    <motion.li
                        className="benefits__item"
                        variants={faqItemVariants} custom={1}
                        animate={benefitInView ? "visible" : "hidden"}
                    >
                        * Project transparency & governance.
                    </motion.li>
                    <motion.li
                        className="benefits__item"
                        variants={faqItemVariants} custom={2}
                        animate={benefitInView ? "visible" : "hidden"}
                    >
                        * Global expansion footprint.
                    </motion.li>
                    <motion.li
                        className="benefits__item"
                        variants={faqItemVariants} custom={2}
                        animate={benefitInView ? "visible" : "hidden"}
                    >
                        * Flexible equity or revenue share.
                    </motion.li>
                    <motion.li
                        className="benefits__item"
                        variants={faqItemVariants} custom={2}
                        animate={benefitInView ? "visible" : "hidden"}
                    >
                        * Regular reporting & impact metrics.
                    </motion.li>
                </ul>
            </motion.section>
        </div>
    )
    
}
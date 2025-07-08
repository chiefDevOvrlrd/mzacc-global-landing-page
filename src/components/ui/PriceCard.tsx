import { BlackButton } from "./Buttons";
import { IconCheck } from '@tabler/icons-react';
import {motion, useInView} from "motion/react";
import { useRef } from "react";

interface Card{
    basic: string,
    business: string,
    enterprice: string,
}

const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
        duration: 0.6,
        delay: i * 0.2, // ← staggered delay
        ease: [0.42, 0, 0.58, 1] as const,
        },
    }),
};


export const PriceCard = ({basic, business, enterprice}: Card) =>{
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.3 });
    return(
        <div className="card__container" ref={ref}>
            <motion.div 
                
                className="card"
                custom={0}                         // ← pass index as custom
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}

            >
                <h1>BASIC</h1>
                <span className="amount">${basic}</span><span className="duration">/mo</span>
                <p>Core features for small teams.</p>
                <div className="get__started">
                    <BlackButton text="Start"/>
                </div>
                <hr />
                <article>INCLUDES:</article>
                <ul>
                    <li><div><IconCheck /></div>Platform access</li>
                    <li><div><IconCheck /></div>Standard support</li>
                    <li><div><IconCheck /></div>Basic analytics</li>
                    <li><div><IconCheck /></div>Community resources</li>
                </ul>
            </motion.div>
            <motion.div 
                className="card"
                custom={1}                         // ← pass index as custom
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <h1>BUSINESS</h1>
                <span className="amount">${business}</span><span className="duration">/mo</span>
                <p>Core featAdvanced tools for growing teams.</p>
                <div className="get__started">
                    <BlackButton text="Start"/>
                </div>
                <hr />
                <article>EVERYTHING IN BASIC, PLUS:</article>
                <ul>
                    <li><div><IconCheck /></div>Platform access</li>
                    <li><div><IconCheck /></div>Standard support</li>
                    <li><div><IconCheck /></div>Basic analytics</li>
                    <li><div><IconCheck /></div>Community resources</li>
                </ul>
            </motion.div>
            <motion.div 
                className="card"
                custom={2}                         // ← pass index as custom
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <h1>ENTERPRISE</h1>
                <span className="amount">${enterprice}</span><span className="duration">/mo</span>
                <p>Core features for small teams.</p>
                <div className="get__started">
                    <BlackButton text="Start"/>
                </div>
                <hr />
                <article>EVERYTHING IN BUSINESS, PLUS:</article>
                <ul>
                    <li><div><IconCheck /></div>Platform access</li>
                    <li><div><IconCheck /></div>Standard support</li>
                    <li><div><IconCheck /></div>Basic analytics</li>
                    <li><div><IconCheck /></div>Community resources</li>
                </ul>
            </motion.div>
        </div>
    )
}
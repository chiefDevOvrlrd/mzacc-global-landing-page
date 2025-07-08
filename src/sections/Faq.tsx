import {useState, useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView, AnimatePresence } from 'motion/react';
import "../styles/layout/_faq.scss"

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    isOpen: boolean;
}

const faqList: FAQItem[] = [
    {
        id: "faq1",
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase with a valid receipt.",
        isOpen: false
    },
    {
        id: "faq2",
        question: "How do I track my order?",
        answer: "Once your order is shipped, you’ll receive a tracking link via email.",
        isOpen: false
    },
    {
        id: "faq3",
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping fees may vary.",
        isOpen: false
    },
    {
        id: "faq4",
        question: "How can I contact customer support?",
        answer: "You can reach our support team via the contact form or live chat on our website.",
        isOpen: false
    },
    {
        id: "faq5",
        question: "Can I change or cancel my order?",
        answer: "Orders can be changed or canceled within 12 hours of placement.",
        isOpen: false
    }
];

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

const answerVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        y: -10,
        transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as const },
    },
    visible: {
        opacity: 1,
        height: "auto",
        y: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
};

export const Faq = () => {
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {amount: 0.3});
    const [faqs, setFaqs] = useState<FAQItem[]>(faqList);

    const toggleFAQ = (id: string) => {
        setFaqs(prev =>
            prev.map(item =>
                item.id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

    useEffect(() => {
        setBackground(isInView ? "#000000" : "#ffffff");
    }, [isInView, setBackground]);

    return(
        <motion.section
            ref={ref}
            className="faq"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="faq__container">
                <h1 className="faq__header"><motion.span variants={textVariants} custom={0}>Your questions,</motion.span> <motion.span variants={textVariants} custom={1}>answered fast</motion.span></h1>
                <div className="faq__list">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={faq.id} 
                            className="faq__item"
                            variants={faqItemVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={index}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                {faq.question}
                            </button>

                            <AnimatePresence initial={false}>
                                {faq.isOpen && (
                                <motion.div
                                    key="answer"
                                    variants={answerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="faq__answer"
                                >
                                    {faq.answer}
                                </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
                
            </div>

        </motion.section>
    )
}
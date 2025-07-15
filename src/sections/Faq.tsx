import React, {useState, useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { motion, useInView, AnimatePresence } from 'motion/react';
import "../styles/layout/_faq.scss"

interface FAQItem {
    id: string;
    question: React.ReactNode;
    answer: React.ReactNode;
    isOpen: boolean;
}

const faqList: FAQItem[] = [
    {
        id: "faq1",
        question: <>What services does <span className="mzacc-font">MZACC GLOBAL</span> offer?</>,
        answer: `MZACC GLOBAL offers a wide range of services through our subcompanies:
                * AI Systems & Automation
                * Full-Stack Software & Mobile App Development
                * Cybersecurity & Global Threat Monitoring
                * Business Strategy & Consultation
                * UI/UX Design, Motion Graphics & Storytelling
                * Digital Marketing, PR & Media
                * Fintech Solutions, Wallets, Forex Trading & Crypto
                * Smart Hardware & Energy Infrastructure
                * Real Estate & ClimateTech
                * OilTech Innovations
                * Talent Training & Leadership Development (via Mavizion Academy)
                * Affiliate Marketing & Networking Systems
                * Project Management — we help you plan, execute and deliver projects on time.`,
        isOpen: false
    },
    {
        id: "faq2",
        question: <>How can I learn Forex trading with <span className="mzacc-font">MZACC GLOBAL?</span></>,
        answer: "You can join Mavizion Academy, our talent training hub, to learn practical Forex trading and risk management. After you gain the skills, you can use our trusted broker partners — Inveslo, Exness, Deriv, or One Royal — and trade smarter with our proven risk management tips.",
        isOpen: false
    },
    {
        id: "faq3",
        question: "Do you offer custom solutions and project delivery?",
        answer: "Yes! We don’t just consult — our team can handle Project Management, ensuring your ideas are well planned, built, and delivered successfully. We tailor solutions for startups, corporations, and global enterprises",
        isOpen: false
    },
    {
        id: "faq4",
        question: "Which subcompany should I work with?",
        answer: `Each of our subcompanies focuses on specific domains. For example:
                * Mavizion for training & academy programs
                * Zentrovia for software, engineering & OilTech
                * Trusteon for cybersecurity & identity protection
                * Biznova for business strategy, marketing & monetisation
                * Formora for UI/UX, branding & design
                * Ainova for AI & smart systems
                * Linkspire for affiliate systems & networking
                * Finovia for fintech & trading
                * Greenova for real estate & climate tech
                * Enernova for OilTech & energy infrastructure
                If you’re not sure, use the contact button — our team will guide you.
                `,
        isOpen: false
    },
    {
        id: "faq5",
        question: "How do I start a project with you?",
        answer: "It’s easy — just use the contact button on this website to reach out. Our consultants will help you clarify your goals, answer your questions, and book an appointment to plan next steps.",
        isOpen: false
    },
    {
        id: "faq6",
        question: <>What makes <span className="mzacc-font">MZACC GLOBAL</span> unique?</>,
        answer: "We are more than a single company — we are an ecosystem of solutions. We combine AI, security, fintech, smart cities, real estate tech, energy innovation, and practical talent empowerment under one global group. Our Project Management capability ensures ideas move from plan to profit without revealing our proprietary strategy.",
        isOpen: false
    },
    {
        id: "faq7",
        question: <>Which markets does <span className="mzacc-font"> MZACC GLOBAL </span>serve?</>,
        answer: " We serve global industries including real estate, energy, oil & gas, finance & trading, digital security, smart infrastructure, sustainability, tech, and digital design — across Africa, Europe, the Middle East, and beyond.",
        isOpen: false
    },
    {
        id: "faq8",
        question: "How can I partner or invest?",
        answer: "We welcome serious investor and partnership conversations. Please use the contact button to reach our investment team — we’ll share relevant details and help you book an appointment.",
        isOpen: false
    },
    {
        id: "faq9",
        question: <>Where is <span className="mzacc-font">MZACC GLOBAL</span> based?</>,
        answer: " We’re a global company with an agile team and partners working worldwide — our vision is borderless.",
        isOpen: false
    },
    {
        id: "faq10",
        question: "How do I reach you for more details or support?",
        answer: "For any other questions or to book an appointment, please use the contact button on this page. We’ll get back to you quickly and provide everything you need.",
        isOpen: false
    },
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
        setBackground(isInView ? "#021526" : "#F2F2F2");
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
                <div className="need__more__help">
                    <motion.h3
                    className="need__more__help__header"
                    variants={faqItemVariants} custom={faqs.length}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    >
                        Need more help?
                    </motion.h3>
                    <motion.p
                        className="need__more__help__text"
                        variants={faqItemVariants} custom={faqs.length + 1}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        Use the contact button anytime to get in touch — our team is ready to clarify details, answer your questions, and help you succeed with <span className="mzacc-font">MZACC GLOBAL</span>.
                    </motion.p>
                </div>
            </div>

        </motion.section>
    )
}
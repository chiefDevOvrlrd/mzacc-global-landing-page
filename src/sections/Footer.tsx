import { motion, useInView } from 'motion/react';
import { useEffect, useRef } from "react";
import { useBackground } from "../context/BackgroundContext";
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandYoutube } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { BlackButton } from '../components/ui/Buttons';
import mzaccLogo from '../assets/mzacc-blue-logo.ico'
import whatsappqr from "../assets/whatsappqr.png";
import footerImg from "../assets/TechComp .jpg"
import "../styles/layout/_footer.scss";

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
        scale: 0.8,
    },
};

const textVariants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.8 + i * 0.4 },
    }),
    hidden: { opacity: 0, y: 20 },
};

const footerimageVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.6,
            ease: [0.42, 0, 0.58, 1] as const,
        },
    },
    hidden: {
        opacity: 0,
        x: -30, 
    },
};

const footerTextVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 1.5 }
    },
    hidden: { opacity: 0, y: 20 }
};

const Footer = () => {
    const { setBackground } = useBackground();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.1 });
    const currentYear = new Date().getFullYear();


    useEffect(() => {
        setBackground(isInView ? "#F2F2F2" : "#021526");
    }, [isInView, setBackground]);
    return (
        <>
        <motion.footer
            id='reach-us'
            className="footer"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="footer__container">
                <motion.h1
                className='footer__heading'
                variants={headingVariants} custom={0}
                >
                    GET IN TOUCH
                </motion.h1>
                <motion.h3
                className='footer__text'
                variants={textVariants} custom={0}
                >
                    Heard enough?
                </motion.h3>
                <motion.div 
                className="contact-us"
                variants={textVariants} custom={1}
                >
                    <BlackButton
                        text="Contact Us"
                        link='mzaccglobal@gmail.com'
                    />
                </motion.div>
                <div className="footer__grid">
                    <motion.div
                        variants={footerimageVariants} custom={0}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="footer__grid__image">
                            <img src={footerImg} alt="mzacc"
                                
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="footer__grid__details"
                        variants={footerTextVariants} custom={1}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div>
                            <div className="email">
                                <IconMail size={30} />
                                <span className='email__text'>Email Us</span>
                                <span className='email__link'><a href="mailto:mzaccglobal@gmail.com"></a>contact@mzaccglobal.com</span>
                            </div>
                        </div>
                        <div>
                            <div className="phone">
                                <IconBrandWhatsapp size={30} />
                                <span className='phone__text'>Message Us</span>
                                <span className='phone__link'><img src={whatsappqr} alt="qr-code" /></span>
                            </div>
                        </div>
                        <div>
                            <div className="location">
                                <IconMapPin size={30} />
                                <span className='location__text'>Location</span>
                                <span className='location__link'>
                                    <ul>
                                        <li>HQ: Delaware, USA.</li>
                                        <li>Operational HQ: Abuja, Nigeria.</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div></div>
                    </motion.div>
                </div>
            </div>
            <div className="last">
                <div className='last__logo'>
                    <img src={mzaccLogo} alt="mzacc_logo" />
                </div>
                <motion.div
                    className="last__copyright"
                    variants={footerTextVariants} custom={3}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    © {currentYear} MZACC GLOBAL. All rights reserved.
                </motion.div>
                <motion.div
                    className="last__socials"
                    variants={footerTextVariants} custom={2}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <a href="https://www.linkedin.com/company/mzaccglobal/" target="_blank" rel="noopener noreferrer">
                        <IconBrandLinkedin stroke={1.25} />
                    </a>
                    <a href="https://www.instagram.com/mzaccglobal?igsh=MWc2YzMzeWlpZzMwdQ%3D%3D&utm_source=qr">
                        <IconBrandInstagram stroke={1.25} />
                    </a>
                    <a href="https://discord.gg/TcuZ5nbd">
                        <IconBrandDiscord stroke={1.25} />
                    </a>
                    <a href="https://youtube.com/@mzaccglobal?si=YL0JNP8HbuMmJrOW ">
                        <IconBrandYoutube stroke={1.25} />
                    </a>
                </motion.div>
            </div>
        </motion.footer>
        </>
    )
}

export default Footer;
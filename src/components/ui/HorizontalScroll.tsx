import gsap from 'gsap';
import { motion, useInView } from 'motion/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useEffect } from 'react';
import { useMediaQuery } from "../../hooks/useMediaQuery";
import mavision from '../../assets/Mavizion.png';
import Zentrovia from '../../assets/Zentrovia.png';
import Formora from '../../assets/Formora.png';
import Linkspire from '../../assets/Linkspire.png';
import Biznova from '../../assets/Biznova.png';
import Ainova from '../../assets/Ainova.png';
import Greenova from '../../assets/Greenova.png';
import Finova from '../../assets/Finova.png';
import "../../styles/components/_horizontalScroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slider = useRef<HTMLDivElement | null>(null);
    const firstContainerRef = useRef<HTMLDivElement | null>(null);
    const lastContainerRef = useRef<HTMLDivElement | null>(null);
    const lastInView = useInView(lastContainerRef, { amount: 0.3 });
    //only run on computer screens
    const isTablet = useMediaQuery('(max-width: 884px)');

    useLayoutEffect(()=>{
        if (isTablet) return; // Exit if not on tablet or larger screens
        let ctx = gsap.context(() =>{
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels,{
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: slider.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (panels.length - 1),
                        end: () =>`+=${slider.current!.offsetWidth}`
                    }
                });
        }, containerRef);
        return () =>ctx.revert();
    }, [isTablet]);

    useEffect(() => {
        const handleLoad = () => {
            ScrollTrigger.refresh();
        };
        const imgs = document.querySelectorAll('.img__container-img');
        imgs.forEach(img => img.addEventListener('load', handleLoad));
        return () => imgs.forEach(img => img.removeEventListener('load', handleLoad));
    }, []);
    ``
    return(
        <div className='scroll__container' ref={containerRef}>
            <div 
                ref={firstContainerRef}
                className="firstContainer"
            >
                <div className="sub-company">
                    <div className='img__container'>
                        <img className="img__container-img" src={mavision} alt="Mavision" />
                    </div>
                    <div className='container__text'>
                        <h1 className="text">MAVISION <span className='text__span'> — Empowering the Future Through Knowledge</span></h1>
                        <p>Mavizion is our learning powerhouse — training the next generation in AI, cybersecurity, UI/UX, digital business, and tech. Through real-world certifications, bootcamps, and mentorship, we’re building elite African talent with global readiness.</p>
                    </div>
                </div>
                <div className="sub-company">
                    <div className='img__container'>
                        <img className="img__container-img" src={mavision} alt="Mavision" />
                    </div>
                    <div className='container__text'>
                        <h1 className="text">MAVISION <span className='text__span'> — Empowering the Future Through Knowledge</span></h1>
                        <p>Mavizion is our learning powerhouse — training the next generation in AI, cybersecurity, UI/UX, digital business, and tech. Through real-world certifications, bootcamps, and mentorship, we’re building elite African talent with global readiness.</p>
                    </div>
                </div>
            </div>
            <div ref={slider} className="container">
                <div className="panel ">
                    <div className="sub-company">
                        <div className="img__container">
                            <img src={Zentrovia} alt="Zentrovia" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Zentrovia <span className='text__span'> — Engineering Tomorrow, Today</span></h1>
                            <p>Zentrovia builds world-class platforms — from consumer apps to enterprise systems and OilTech solutions like TycoonSuite. We create software that scales, transforms, and disrupts.</p>
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            <img src={Linkspire} alt="Linkspire" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Linkspire <span className='text__span'> — Connecting Visionaries, Building Ecosystems</span></h1>
                            <p>Linkspire links talents, startups, creators, and affiliate marketers through collaborative, monetizable ecosystems. It’s our human capital engine.</p>
                        </div>                    
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            <img src={Biznova} alt="Biznova" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Biznova <span className='text__span'> — Growth Engine for Founders & Startups</span></h1>
                            <p>Biznova helps startups scale with growth systems, funnel strategies, branding, monetization, and investment readiness. We turn ideas into cash-flow machines.</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="sub-company">                        
                        <div className="img__container">
                            <img src={Ainova} alt="Ainova" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Ainova <span className='text__span'> — Artificial Intelligence for Global Impact</span></h1>
                            <p>
                                Ainova develops advanced AI agents, automation systems, and large-scale AI infrastructure — powering solutions in education, finance, health, and real estate tech.
                                It fuels smart cities, predictive housing systems, and eco-efficient buildings — including the AI core powering Greenova’s sustainable real estate projects.
                            </p>
                        </div>
                    </div>
                    <div className="sub-company">                        
                        <div className="img__container">
                            <img src={Greenova} alt="Greenova" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Greenova <span className='text__span'> — Smart Real Estate & Sustainable Innovation</span></h1>
                            <p>Greenova is our green infrastructure powerhouse — designing eco-smart buildings, solar-powered homes, sustainable urban systems, and climate-resilient architecture.
                                Fueled by AI from Ainova, it transforms real estate into future-forward, data-driven, energy-efficient assets.</p>
                        </div>
                    </div>
                    <div className="sub-company">                        
                        <div className="img__container">
                            <img src={Finova} alt="Finova" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Finova <span className='text__span'> — FinTech for Digital Tycoons</span></h1>
                            <p>Finovia builds smart financial systems for entrepreneurs — from AI trading bots and payment tools to investor dashboards. Finance, reimagined with intelligence.</p>
                        </div>
                    </div>
                    <div className="sub-company">                        
                        <div className="img__container">
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastContainer" ref={lastContainerRef}>
                <h3>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={lastInView?{ opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    > Why join us?</motion.span>
                </h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={lastInView?{ opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                >
                    Mzacc Global is building the future — with scalable platforms, profitable models, and vision-aligned teams. Each sub-company is an ecosystem of its own, engineered for local impact and global scalability.
                    <motion.span
                        initial={{ opacity: 0, y: -40 }}
                        animate={lastInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                        transition={{ duration: 1, delay: 2, type: "spring", bounce: 0.4 }}
                    >We're not asking for funding. </motion.span> 
                    <motion.span
                        initial={{ opacity: 0, y: -40 }}
                        animate={lastInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                        transition={{ duration: 1, delay: 2.2, type: "spring", bounce: 0.4 }}
                    >We're inviting you to co-create a continent-shifting legacy.</motion.span>
                </motion.p>
            </div>
        </div>
    )
}
import gsap from 'gsap';
import { motion, useInView } from 'motion/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from "../../hooks/useMediaQuery";
import mavision from '../../assets/Mavizion.png';
import Zentrovia from '../../assets/Zentrovia.png';
import Formora from '../../assets/Formora.png';
import Linkspire from '../../assets/Linkspire.png';
import "../../styles/components/_horizontalScroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slider = useRef<HTMLDivElement | null>(null);
    const firstContainerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(firstContainerRef, { amount: 0.3 });

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

    return(
        <div className='scroll__container' ref={containerRef}>
            <motion.div 
                ref={firstContainerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
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
            </motion.div>
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastContainer">
                <div className="partnership-grid">
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
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
                            <img src={Formora} alt="Formora" />
                        </div>
                        <div className="sub-company__text">
                            <h1 className="text">Formora <span className='text__span'> — Where Design Meets Experience</span></h1>
                            <p>Formora creates magnetic experiences through world-class UI/UX, branding, animation, and digital storytelling. We design visuals that convert and captivate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
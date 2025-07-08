import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import "../../styles/components/_horizontalScroll.scss"

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slider = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(()=>{
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
    }, []);

    return(
        <div className='scroll__container' ref={containerRef}>
            <div className="firstContainer">
                <div className='img__container'>sub-company</div>
                <div className='container__text'>
                    <div className="date">JUNE 2025</div>
                    <h1 className="text">Innovation Shaping Africa's Future</h1>
                    <p>See how tech, design and AI are driving real change and global growth across industries</p>
                </div>
            </div>
            <div ref={slider} className="container">
                <div className="panel ">
                    <div className="sub-company">
                        <div className="img__container">
                            
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="sub-company">                        
                        <div className="img__container">
                        </div>
                    </div>
                    <div className="sub-company">                        
                        <div className="img__container">
                        </div>
                    </div>
                    <div className="sub-company">                        
                        <div className="img__container">
                        </div>
                    </div>
                    <div className="sub-company">                        
                        <div className="img__container">
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="sub-company">
                        <div className="img__container">
                            partners
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                            sub-company 
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                        </div>
                    </div>
                    <div className="sub-company">
                        <div className="img__container">
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastContainer">
                <div className="sub-company">
                    <div className="img__container">
                    </div>
                </div>
                <div className="sub-company">
                    <div className="img__container">
                    </div>
                </div>
                <div className="sub-company">
                    <div className="img__container">
                    </div>
                </div>
                <div className="sub-company">
                    <div className="img__container">
                    </div>
                </div>
            </div>
        </div>
    )
}
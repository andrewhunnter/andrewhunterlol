// src/pages/Home.js
import React, { useEffect, useRef, useState } from 'react';
import SocialButtons from '../components/SocialButtons';
import Timeline from '../components/Timeline';
import Portfolio from '../components/Portfolio';

function Home() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        if (mounted && vantaRef.current && !vantaEffect.current) {
            vantaEffect.current = window.VANTA.TOPOLOGY({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x000000
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
            setMounted(false);
        };
    }, [mounted]);

    return (
        <main>
            {/* Home Section */}
            <section id="home" className="section">
                <div id="vanta-bg" ref={vantaRef}></div>
                <div className="home-content">
                    <h1>andrewhunter</h1>
                    <p className="subtitle">creating software and sharing opportunities</p>
                    <SocialButtons />
                    <a href="#portfolio" className="cta-button">
                        what i've made
                        <span className="iconify" data-icon="material-symbols:arrow-forward-rounded"></span>
                    </a>
                    <div className="hero-scroll">
                        <div className="mouse"></div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section">
                <h2>experience</h2>
                <p className="subtitle">career history and resume</p>
                <Timeline />
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="section">
                <h2>portfolio</h2>
                <p className="subtitle">projects that have developed my skillset</p>
                <Portfolio />
            </section>
        </main>
    );
}

export default Home;
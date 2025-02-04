import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaUserGraduate, FaCode, FaLightbulb, FaMoneyBillWave, FaTools, FaIndustry, FaUsers, FaProjectDiagram, FaLaptopCode, FaCodeBranch, FaRocket } from 'react-icons/fa';
import '../styles/Teachings.css';

function Teachings() {
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

    const offerings = [
        {
            title: 'Free Telegram Community',
            description: 'Join our thriving community of tech enthusiasts. Get daily insights on internet money, development tools, and industry knowledge.',
            features: [
                { text: 'Internet Money Strategies', icon: <FaMoneyBillWave /> },
                { text: 'Development Tool Recommendations', icon: <FaTools /> },
                { text: 'Industry Insights', icon: <FaIndustry /> },
                { text: 'Community Support', icon: <FaUsers /> }
            ],
            icon: <FaTelegram />,
            link: 'https://t.me/your-telegram-link',
            buttonText: 'Join Community',
            type: 'free'
        },
        {
            title: 'Personal Mentorship',
            description: 'Get personalized guidance for your tech journey. One-on-one sessions focused on your specific needs and projects.',
            features: [
                { text: 'Project Guidance', icon: <FaProjectDiagram /> },
                { text: 'Development Environment Setup', icon: <FaLaptopCode /> },
                { text: 'Code Reviews', icon: <FaCodeBranch /> },
                { text: 'Career Planning', icon: <FaRocket /> }
            ],
            icon: <FaUserGraduate />,
            link: 'mailto:your@email.com?subject=Mentorship%20Inquiry',
            buttonText: 'Apply Now',
            type: 'premium'
        }
    ];

    const benefits = [
        {
            title: 'Learn Development',
            description: 'Master modern development tools and practices',
            icon: <FaCode />
        },
        {
            title: 'Gain Insights',
            description: 'Access exclusive knowledge and strategies',
            icon: <FaLightbulb />
        }
    ];

    return (
        <main>
            <section className="hero-section">
                <div id="vanta-bg" ref={vantaRef}></div>
                <div className="hero-content">
                    <h1>teachings...</h1>
                    <p className="subtitle">empowering the next generation of developers</p>
                </div>
                <div className="hero-scroll">
                    <div className="mouse-software"></div>
                </div>
            </section>

            <section className="benefits-section">
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="offerings-section">
                <div className="offerings-grid">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            className={`offering-card ${offering.type}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3 }}
                        >
                            <div className="offering-icon">{offering.icon}</div>
                            <h3>{offering.title}</h3>
                            <p>{offering.description}</p>
                            <ul className="features-list">
                                {offering.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-icon">{feature.icon}</span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <a href={offering.link} className="cta-button" target="_blank" rel="noopener noreferrer">
                                {offering.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Teachings;

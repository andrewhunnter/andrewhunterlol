import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCog, FaMobile } from 'react-icons/fa';
import '../styles/Software.css';

function Software() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);
    const [mounted, setMounted] = useState(false);

    const services = [
        {
            id: 1,
            title: 'React Web App Boilerplate',
            description: 'Full-stack React application template with authentication and database setup.',
            price: 'Starting at $199',
            category: 'boilerplate',
            icon: <FaReact />,
            features: ['React/Next.js', 'MongoDB', 'Auth System']
        },
        {
            id: 2,
            title: 'Website Maintenance',
            description: 'Keep your website running smoothly with regular updates and maintenance.',
            price: 'From $199/month',
            category: 'maintenance',
            icon: <FaCog />,
            features: ['Security Updates', 'Performance Optimization', 'Support']
        },
        {
            id: 3,
            title: 'Mobile App Boilerplate',
            description: 'React Native starter template with essential features and navigation setup.',
            price: 'Starting at $149',
            category: 'boilerplate',
            icon: <FaMobile />,
            features: ['React Native', 'Navigation', 'API Integration']
        },
        {
            id: 4,
            title: 'custom landing page',
            description: 'React Native starter template with essential features and navigation setup.',
            price: 'Starting at $149',
            category: 'freelance',
            icon: <FaMobile />,
            features: ['React Native', 'Navigation', 'API Integration']
        }
    ];

    const filterServices = (category) => {
        setSelectedCategory(category);
    };

    const filteredServices = selectedCategory === 'all' 
        ? services 
        : services.filter(service => service.category === selectedCategory);

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
            <div ref={vantaRef} id="vanta-bg"></div>
            <section className="hero-section">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Software Services</h1>
                        <p className="subtitle">Crafting digital solutions through freelance expertise</p>
                        
                        <div className="hero-cta">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a href="#services-grid" className="primary-cta">
                                    Explore Services
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="filter-section">
                <button 
                    className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => filterServices('all')}
                >
                    All
                </button>
                <button 
                    className={`filter-btn ${selectedCategory === 'freelance' ? 'active' : ''}`}
                    onClick={() => filterServices('freelance')}
                >
                    freelance
                </button>
                <button 
                    className={`filter-btn ${selectedCategory === 'boilerplate' ? 'active' : ''}`}
                    onClick={() => filterServices('boilerplate')}
                >
                    boilerplates
                </button>
                <button 
                    className={`filter-btn ${selectedCategory === 'maintenance' ? 'active' : ''}`}
                    onClick={() => filterServices('maintenance')}
                >
                    maintenance
                </button>
            </section>

            <section id="services-grid" className="services-grid">
                {filteredServices.map(service => (
                    <motion.div 
                        key={service.id}
                        className="service-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="price">{service.price}</div>
                        <ul className="features-list">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <a href="mailto:your@email.com" className="cta-button">
                            Get Started
                        </a>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}

export default Software;

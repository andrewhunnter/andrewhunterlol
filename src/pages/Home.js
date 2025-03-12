// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialButtons from '../components/SocialButtons';
import Timeline from '../components/Timeline';
import Portfolio from '../components/Portfolio';
import '../styles/Home.css';

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Fast loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="loading-screen"
                    >
                        <div className="loader">
                            <div className="loader-ring"></div>
                            <div className="loader-ring"></div>
                            <div className="loader-ring"></div>
                            <div className="loader-ring"></div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Home Section */}
                        <section id="home" className="section">
                            <div className="home-content">
                                <motion.h1
                                    className="home-title"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {Array.from("andrewhunter").map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3 + index * 0.05,
                                                ease: "easeOut"
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.h1>
                                <motion.p 
                                    className="subtitle"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    creating ventures & chasing tech markets
                                </motion.p>
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <SocialButtons />
                                </motion.div>
                                <motion.a 
                                    initial={false}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#portfolio" 
                                    className="cta-button"
                                >
                                    what i've made
                                    <span className="iconify" data-icon="material-symbols:arrow-forward-rounded"></span>
                                </motion.a>
                            </div>
                        </section>

                        {/* Portfolio Section */}
                        <section id="portfolio" className="section">
                            <h2>portfolio</h2>
                            <p className="subtitle">projects that have developed my skillset</p>
                            <Portfolio />
                        </section>

                        {/* Experience Section */}
                        <section id="experience" className="section">
                            <h2>experience</h2>
                            <p className="subtitle">career history and resume</p>
                            <Timeline />
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Home;
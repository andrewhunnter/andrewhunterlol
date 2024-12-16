// components/Portfolio.js
import React from 'react';
import { FaGlobe, FaMobile, FaCode } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import '../styles/Portfolio.css';

function Portfolio() {
    const projects = [
        {
            title: 'carcodes.xyz',
            link: 'https://carcodes.xyz',
            image: '/carcodes-port.png',
            description: 'Your gateway to community and opportunity. A membership where users get a public landing page and physical QR code attached to their page.',
            icon: <FaGlobe style={{ color: '#64FFDA' }} />, // Teal
            tech: ['NextJS', 'Stripe', 'MongoDB']
        },
        {
            title: 'pup hub',
            link: '#',
            image: '/puphub.png',
            description: 'Tasked with increasing involvement in health and wellness programs for Citi Bank\'s Tampa employees.',
            icon: <FaMobile style={{ color: '#FF6B6B' }} />, // Coral
            tech: ['Figma', 'Canva', 'UI/UX']
        },
        {
            title: 'johnnystorms.us',
            link: 'https://www.jonnystorms.us',
            image: '/jonnystorms.png',
            description: 'Developed a landing page for a local influencer using modern web technologies.',
            icon: <FaCode style={{ color: '#7F7FD5' }} />, // Purple
            tech: ['HTML', 'CSS', 'JavaScript']
        },
    ];

    return (
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <div className="portfolio-card" key={index}>
                    <img src={project.image} alt={`${project.title} Project`} />
                    <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">
                        <HiExternalLink size={20} color="white" />
                    </a>
                    <div className="card-content">
                        <div className="card-header">
                            <div className="card-icon">
                                {project.icon}
                            </div>
                            <h3 className="card-title">{project.title}</h3>
                        </div>
                        <p className="card-description">{project.description}</p>
                        <div className="card-tech">
                            {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;

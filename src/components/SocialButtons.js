// components/SocialButtons.js
import React from 'react';

function SocialButtons() {
    return (
        <div className="social-buttons">
            <a href="https://x.com/andrewhunnter" className="social-button twitter" target="_blank" rel="noopener noreferrer">
                <span className="iconify" data-icon="mdi:twitter"></span>
            </a>
            <a href="https://instagram.com/andrewhunnter" className="social-button instagram" target="_blank" rel="noopener noreferrer">
                <span className="iconify" data-icon="mdi:instagram"></span>
            </a>
            <a href="https://www.linkedin.com/in/andrew-hunter-1bab182b0" className="social-button linkedin" target="_blank" rel="noopener noreferrer">
                <span className="iconify" data-icon="mdi:linkedin"></span>
            </a>
            <a href="https://github.com/andrewhunnter" className="social-button github" target="_blank" rel="noopener noreferrer">
                <span className="iconify" data-icon="mdi:github"></span>
            </a>
        </div>
    );
}

export default SocialButtons;

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-bottom">
                    <p>
                        Made with <FaHeart className="heart-icon" /> by Andrew Hunter
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 
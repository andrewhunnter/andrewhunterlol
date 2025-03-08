import React, { useState, useEffect } from 'react';
import '../styles/LoadingAnimation.css';

const LoadingAnimation = ({ isLoading, setIsLoading }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        if (isLoading) {
            // Simulate loading progress
            const interval = setInterval(() => {
                setProgress(prevProgress => {
                    const newProgress = prevProgress + Math.random() * 10;
                    if (newProgress >= 100) {
                        clearInterval(interval);
                        // Give a small delay before hiding the loader
                        setTimeout(() => setIsLoading(false), 300);
                        return 100;
                    }
                    return newProgress;
                });
            }, 200);
            
            return () => clearInterval(interval);
        }
    }, [isLoading, setIsLoading]);
    
    if (!isLoading) return null;
    
    return (
        <div className="loading-screen">
            <div className="loading-container">
                <div className="loading-circle">
                    <svg className="progress-ring" width="120" height="120">
                        <circle 
                            className="progress-ring-circle" 
                            stroke="#ffffff" 
                            strokeWidth="8" 
                            strokeLinecap="round"
                            fill="transparent" 
                            r="50" 
                            cx="60" 
                            cy="60" 
                            style={{
                                strokeDasharray: `${2 * Math.PI * 50}`,
                                strokeDashoffset: `${2 * Math.PI * 50 * (1 - progress / 100)}`
                            }}
                        />
                    </svg>
                    <div className="progress-text">{Math.round(progress)}%</div>
                </div>
                <div className="loading-text">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingAnimation; 
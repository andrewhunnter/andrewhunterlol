// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './styles/Home.css';
import './styles/Buttons.css';
import './styles/animations.css';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        // Only show loading on route changes, not initial load
        if (location.pathname !== window.location.pathname) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                // Loading will be handled by the LoadingAnimation component
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]);

    return (
        <div>
            <LoadingAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
            <Navbar />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
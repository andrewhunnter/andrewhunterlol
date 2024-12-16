// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Software from './pages/Software';
import Teachings from './pages/Teachings';
import './styles/Home.css';
import './styles/Buttons.css';
import Footer from './components/Footer';

function App() {
    const location = useLocation();

    return (
        <div>
            <Navbar />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/software" element={<Software />} />
                <Route path="/teachings" element={<Teachings />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
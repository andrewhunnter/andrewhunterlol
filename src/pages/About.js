import { FaCode, FaMapMarkerAlt, FaRegLightbulb } from 'react-icons/fa';
import '../styles/About.css';

function About() {

    return (
        <main>
            <section id="about" className="section">
                <h1>about me</h1>
                <div className="about-content">
                    <div className="profile-section">
                        <img 
                            src="/profile.png" 
                            alt="Andrew Hunter" 
                            className="profile-pic" 
                        />
                        <div className="quick-info">
                            <div className="info-item">
                                <FaMapMarkerAlt />
                                <span>Florida, USA</span>
                            </div>
                            <div className="info-item">
                                <FaCode />
                                <span>Software Developer</span>
                            </div>
                            <div className="info-item">
                                <FaRegLightbulb />
                                <span>Creative Problem Solver</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-content">
                        <div className="bio-section">
                            <h3>Background</h3>
                            <p>
                                I was born in Minnesota and escaped the cold and moved to Florida. 
                                Always had been interested in computers, but the interest ignited during my gap year. 
                                Through hours of surfing the internet, I managed to explore the depths of software development.
                            </p>
                        </div>
                        <div className="bio-section">
                            <h3>Current Focus</h3>
                            <p>
                                As of now, I'm focused on creating software and sharing opportunities. 
                                Specifically, building meaningful, creative software for audiences to use.
                            </p>
                        </div>
                        <div className="bio-section">
                            <h3>Mission</h3>
                            <p>
                                Another core value is that information is withheld, and I believe people should have access. 
                                Sharing with others how to use software as a means of creating solutions is another goal of mine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import creatorData from "../data/creatorData";
import Reveal from "./Reveal";
import "../styles/about.css";

function About() {
    const { about } = creatorData;

    return (
        <section className="about section" id="about">
            <div className="container">

                <div className="about-grid">

                    <Reveal direction="right">
                        <div className="about-image-wrapper">

                            <div className="about-image">
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                                    alt={`${creatorData.name} training`}
                                />
                            </div>

                            <div className="about-image-tag">
                                <span>07</span>
                                YEARS
                                <br />
                                COACHING
                            </div>

                        </div>
                    </Reveal>

                    <Reveal direction="left" delay={0.1}>
                        <div className="about-content">

                            <div className="section-eyebrow">
                                <span></span>
                                {about.eyebrow}
                            </div>

                            <h2>{about.title}</h2>

                            <p className="about-description">
                                {about.description}
                            </p>

                            <p className="about-story">
                                {about.story}
                            </p>

                            <div className="about-credentials">
                                {about.credentials.map((credential, index) => (
                                    <Reveal
                                        key={credential}
                                        direction="left"
                                        delay={0.15 + index * 0.08}
                                    >
                                        <div className="credential">
                                            <span className="credential-icon">
                                                <FiCheck />
                                            </span>

                                            <span>{credential}</span>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>

                            <a
                                href="#coaching"
                                className="text-link"
                            >
                                Explore Coaching
                                <FiArrowUpRight />
                            </a>

                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
}

export default About;
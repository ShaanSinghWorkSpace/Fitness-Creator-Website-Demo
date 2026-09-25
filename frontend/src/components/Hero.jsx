import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import creatorData from "../data/creatorData";
import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-background">
                <div className="hero-glow"></div>
            </div>

            <div className="container hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -35 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <motion.div
                        className="hero-eyebrow"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <span></span>
                        ONLINE FITNESS COACHING
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Build a body
                        <br />
                        <span>you believe in.</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.35,
                            ease: "easeOut",
                        }}
                    >
                        {creatorData.heroDescription}
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.45,
                            ease: "easeOut",
                        }}
                    >
                        <a
                            href="#consultation"
                            className="btn btn-primary"
                        >
                            Start Your Journey
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="#about"
                            className="btn btn-secondary"
                        >
                            <FiPlay />
                            Meet {creatorData.name.split(" ")[0]}
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.55,
                            ease: "easeOut",
                        }}
                    >
                        {creatorData.stats.map((stat) => (
                            <div
                                className="hero-stat"
                                key={stat.label}
                            >
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, x: 35, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
                            alt={`${creatorData.name} fitness coach`}
                        />
                    </div>

                    <motion.div
                        className="hero-image-label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.8,
                        }}
                    >
                        <span>01</span>
                        <div></div>
                        <span>TRAIN. EAT. RECOVER.</span>
                    </motion.div>

                </motion.div>

            </div>

            <motion.div
                className="hero-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                }}
            >
                <div className="container">
                    <span>SCROLL TO EXPLORE</span>
                    <div className="hero-scroll-line"></div>
                </div>
            </motion.div>

        </section>
    );
}

export default Hero;
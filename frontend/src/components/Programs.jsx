import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import creatorData from "../data/creatorData";
import Reveal from "./Reveal";
import "../styles/programs.css";

function Programs() {
    return (
        <section className="programs section" id="coaching">
            <div className="container">

                <Reveal>
                    <div className="programs-header">

                        <div>
                            <div className="section-eyebrow">
                                <span></span>
                                COACHING OPTIONS
                            </div>

                            <h2>
                                Choose the level
                                <br />
                                <span>of support you need.</span>
                            </h2>
                        </div>

                        <p>
                            Whether you're starting from scratch or ready
                            to take your training seriously, there's a
                            coaching option built around your goals.
                        </p>

                    </div>
                </Reveal>

                <div className="programs-grid">

                    {creatorData.programs.map((program, index) => (
                        <Reveal
                            key={program.title}
                            delay={index * 0.1}
                        >
                            <article
                                className={`program-card ${
                                    index === 0
                                        ? "program-card-featured"
                                        : ""
                                }`}
                            >

                                <div className="program-top">
                                    <span className="program-number">
                                        {program.number}
                                    </span>

                                    {index === 0 && (
                                        <span className="program-badge">
                                            MOST POPULAR
                                        </span>
                                    )}
                                </div>

                                <h3>{program.title}</h3>

                                <p className="program-description">
                                    {program.description}
                                </p>

                                <ul className="program-features">
                                    {program.features.map((feature) => (
                                        <li key={feature}>
                                            <FiCheck />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#consultation"
                                    className="program-link"
                                >
                                    {program.cta}
                                    <FiArrowUpRight />
                                </a>

                            </article>
                        </Reveal>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Programs;
import { FiArrowUpRight } from "react-icons/fi";
import creatorData from "../data/creatorData";
import Reveal from "./Reveal";
import "../styles/philosophy.css";

function Philosophy() {
    const { philosophy } = creatorData;

    return (
        <section className="philosophy section">

            <div className="container">

                <Reveal>
                    <div className="philosophy-header">

                        <div>
                            <div className="section-eyebrow">
                                <span></span>
                                {philosophy.eyebrow}
                            </div>

                            <h2>{philosophy.title}</h2>
                        </div>

                        <p>{philosophy.description}</p>

                    </div>
                </Reveal>

                <div className="philosophy-grid">

                    {philosophy.principles.map((principle, index) => (
                        <Reveal
                            key={principle.number}
                            delay={index * 0.08}
                        >
                            <article className="principle">

                                <span className="principle-number">
                                    {principle.number}
                                </span>

                                <div className="principle-content">
                                    <h3>{principle.title}</h3>

                                    <p>{principle.description}</p>
                                </div>

                                <FiArrowUpRight className="principle-icon" />

                            </article>
                        </Reveal>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Philosophy;
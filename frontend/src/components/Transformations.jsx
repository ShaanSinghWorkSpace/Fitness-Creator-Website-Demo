import { FiArrowUpRight } from "react-icons/fi";
import creatorData from "../data/creatorData";
import Reveal from "./Reveal";
import "../styles/transformations.css";

function Transformations() {
    return (
        <section className="transformations section" id="results">
            <div className="container">

                <Reveal>
                    <div className="transformations-header">

                        <div>
                            <div className="section-eyebrow">
                                <span></span>
                                CLIENT RESULTS
                            </div>

                            <h2>
                                Results that
                                <br />
                                <span>speak for themselves.</span>
                            </h2>
                        </div>

                        <p>
                            Every transformation starts with a different goal.
                            The common factor is having the right system,
                            support, and consistency behind it.
                        </p>

                    </div>
                </Reveal>

                <div className="transformations-grid">

                    {creatorData.transformations.map(
                        (transformation, index) => (
                            <Reveal
                                key={transformation.name}
                                delay={index * 0.1}
                            >
                                <article className="transformation-card">

                                    <div className="transformation-image">
                                        <img
                                            src={transformation.image}
                                            alt={`${transformation.name} transformation`}
                                        />

                                        <div className="transformation-overlay">
                                            <span>
                                                {transformation.timeframe}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="transformation-content">

                                        <div className="transformation-meta">
                                            <span>
                                                {transformation.goal}
                                            </span>

                                            <span>
                                                {transformation.timeframe}
                                            </span>
                                        </div>

                                        <div className="transformation-result">
                                            <h3>
                                                {transformation.result}
                                            </h3>

                                            <span>
                                                {transformation.name}
                                            </span>
                                        </div>

                                        <p>
                                            {transformation.description}
                                        </p>

                                    </div>

                                </article>
                            </Reveal>
                        )
                    )}

                </div>

                <Reveal delay={0.1}>
                    <div className="transformations-footer">

                        <span>
                            REAL PEOPLE. REAL PROGRESS.
                        </span>

                        <a
                            href="#consultation"
                            className="text-link"
                        >
                            Start your transformation
                            <FiArrowUpRight />
                        </a>

                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default Transformations;
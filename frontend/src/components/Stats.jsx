import creatorData from "../data/creatorData";
import Reveal from "./Reveal";
import "../styles/stats.css";

function Stats() {
    return (
        <section className="stats-section">
            <div className="container">

                <div className="stats-grid">
                    {creatorData.stats.map((stat, index) => (
                        <Reveal
                            key={stat.label}
                            delay={index * 0.08}
                        >
                            <div className="stat-item">
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Stats;
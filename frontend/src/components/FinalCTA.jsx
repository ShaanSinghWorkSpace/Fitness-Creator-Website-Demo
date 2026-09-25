import { FiArrowUpRight } from "react-icons/fi";
import "../styles/final-cta.css";

function FinalCTA() {
    return (
        <section className="final-cta" id="apply">
            <div className="final-cta-bg"></div>

            <div className="container">
                <div className="final-cta-content">
                    <span className="section-eyebrow">YOUR NEXT CHAPTER</span>

                    <h2>
                        Ready to take
                        <br />
                        <span>your training seriously?</span>
                    </h2>

                    <p>
                        Stop guessing and start following a plan built around
                        your goals, your lifestyle, and the person you want to
                        become.
                    </p>

                    <a href="#consultation" className="btn btn-primary">
                        Apply for Coaching
                        <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;
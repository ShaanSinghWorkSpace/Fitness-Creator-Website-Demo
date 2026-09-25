import { useState } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import "../styles/consultation.css";

function Consultation() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="consultation section" id="consultation">
            <div className="container">
                <div className="consultation-grid">
                    <div className="consultation-copy">
                        <span className="section-eyebrow">START YOUR JOURNEY</span>

                        <h2>
                            Let's build a plan
                            <br />
                            <span>that works for you.</span>
                        </h2>

                        <p>
                            Tell me a little about yourself, your goals, and
                            where you want to go. I'll review your application
                            and we'll take it from there.
                        </p>

                        <div className="consultation-points">
                            <div>
                                <FiCheck />
                                <span>Personalized approach</span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>Built around your lifestyle</span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>No one-size-fits-all programs</span>
                            </div>
                        </div>
                    </div>

                    <div className="consultation-form-wrapper">
                        {submitted ? (
                            <div className="form-success">
                                <div className="success-icon">
                                    <FiCheck />
                                </div>

                                <h3>Application received.</h3>

                                <p>
                                    Thanks for reaching out. This demo form is
                                    frontend-only, but this is where your
                                    application confirmation would appear.
                                </p>
                            </div>
                        ) : (
                            <form
                                className="consultation-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="goal">
                                        What's your main goal?
                                    </label>

                                    <select id="goal" name="goal" required>
                                        <option value="">
                                            Select your goal
                                        </option>
                                        <option value="fat-loss">
                                            Fat loss
                                        </option>
                                        <option value="muscle">
                                            Build muscle
                                        </option>
                                        <option value="strength">
                                            Build strength
                                        </option>
                                        <option value="recomposition">
                                            Body recomposition
                                        </option>
                                        <option value="general">
                                            General fitness
                                        </option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="experience">
                                        Training experience
                                    </label>

                                    <select
                                        id="experience"
                                        name="experience"
                                        required
                                    >
                                        <option value="">
                                            Select experience
                                        </option>
                                        <option value="beginner">
                                            Beginner
                                        </option>
                                        <option value="intermediate">
                                            Intermediate
                                        </option>
                                        <option value="advanced">
                                            Advanced
                                        </option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Apply for Coaching
                                    <FiArrowUpRight />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Consultation;
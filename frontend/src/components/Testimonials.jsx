import { FiArrowUpRight, FiStar } from "react-icons/fi";
import creatorData from "../data/creatorData";
import Reveal from "./Reveal";
import "../styles/testimonials.css";

function Testimonials() {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">

                <Reveal>
                    <div className="testimonials-header">

                        <div className="section-eyebrow">
                            <span></span>
                            CLIENT STORIES
                        </div>

                        <h2>
                            Don't take
                            <br />
                            <span>my word for it.</span>
                        </h2>

                    </div>
                </Reveal>

                <div className="testimonials-grid">

                    {creatorData.testimonials.map(
                        (testimonial, index) => (
                            <Reveal
                                key={testimonial.name}
                                delay={index * 0.1}
                            >
                                <article className="testimonial-card">

                                    <div className="testimonial-top">

                                        <div className="testimonial-stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <FiStar key={star} />
                                            ))}
                                        </div>

                                        <span className="testimonial-result">
                                            {testimonial.result}
                                        </span>

                                    </div>

                                    <blockquote>
                                        "{testimonial.text}"
                                    </blockquote>

                                    <div className="testimonial-client">

                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />

                                        <div>
                                            <strong>
                                                {testimonial.name}
                                            </strong>

                                            <span>
                                                {testimonial.role}
                                            </span>
                                        </div>

                                        <FiArrowUpRight className="testimonial-arrow" />

                                    </div>

                                </article>
                            </Reveal>
                        )
                    )}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;
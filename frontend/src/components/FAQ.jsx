import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import creatorData from "../data/creatorData";
import "../styles/faq.css";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <div className="faq-header">
                    <div>
                        <span className="section-eyebrow">QUESTIONS, ANSWERED</span>

                        <h2 className="faq-title">
                            Everything you
                            <br />
                            <span>need to know.</span>
                        </h2>
                    </div>

                    <p className="faq-intro">
                        Still have questions about coaching? Here are the answers
                        to the things I get asked most often.
                    </p>
                </div>

                <div className="faq-list">
                    {creatorData.faq.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                className={`faq-item ${isOpen ? "active" : ""}`}
                                key={item.question}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>
                                        <small>0{index + 1}</small>
                                        {item.question}
                                    </span>

                                    <span className="faq-icon">
                                        {isOpen ? <FiMinus /> : <FiPlus />}
                                    </span>
                                </button>

                                <div
                                    className={`faq-answer ${
                                        isOpen ? "open" : ""
                                    }`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
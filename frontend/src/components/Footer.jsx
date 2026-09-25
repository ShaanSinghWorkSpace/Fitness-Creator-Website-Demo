import {
    FiArrowUpRight,
    FiInstagram,
    FiYoutube,
    FiMail,
} from "react-icons/fi";
import creatorData from "../data/creatorData";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            {creatorData.shortName}
                            <span>.</span>
                        </a>

                        <p>
                            {creatorData.tagline}
                        </p>

                        <a
                            href="#consultation"
                            className="footer-cta"
                        >
                            Start your journey
                            <FiArrowUpRight />
                        </a>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Explore</h4>

                            <a href="#about">About</a>
                            <a href="#coaching">Coaching</a>
                            <a href="#results">Results</a>
                            <a href="#testimonials">Testimonials</a>
                            <a href="#faq">FAQ</a>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>

                            <a
                                href={creatorData.social.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiInstagram />
                                Instagram
                            </a>

                            <a
                                href={creatorData.social.youtube}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiYoutube />
                                YouTube
                            </a>

<a
    href={`mailto:${creatorData.contact.email}`}
    className="footer-email"
>
    <FiMail />
    {creatorData.contact.email}
</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} {creatorData.name}. All
                        rights reserved.
                    </p>

                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
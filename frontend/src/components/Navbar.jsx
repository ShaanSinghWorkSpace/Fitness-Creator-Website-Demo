import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import creatorData from "../data/creatorData";
import "../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToSection = (id, offset = 0) => {
        const section = document.getElementById(id);

        if (!section) return;

        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: "smooth",
        });

        closeMenu();
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">

                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("home");
                    }}
                >
                    {creatorData.shortName}
                    <span>.</span>
                </a>

                <nav
                    className={`navbar-links ${
                        menuOpen ? "navbar-links-open" : ""
                    }`}
                >
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("about",-70);
                        }}
                    >
                        About
                    </a>

                    <a
                        href="#coaching"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("coaching",-85);
                        }}
                    >
                        Coaching
                    </a>

                    <a
                        href="#results"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("results", -90);
                        }}
                    >
                        Results
                    </a>

                    <a
                        href="#testimonials"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("testimonials", -60);
                        }}
                    >
                        Testimonials
                    </a>

                    <a
                        href="#consultation"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("consultation", -10);
                        }}
                    >
                        Contact
                    </a>
                </nav>

                <a
                    href="#consultation"
                    className="btn btn-primary navbar-cta"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("consultation", -10);
                    }}
                >
                    Apply for Coaching
                    <FiArrowUpRight />
                </a>

                <button
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

            </div>
        </header>
    );
}

export default Navbar;
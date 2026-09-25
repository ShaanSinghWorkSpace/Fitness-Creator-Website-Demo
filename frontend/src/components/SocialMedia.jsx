import { FiArrowUpRight, FiInstagram } from "react-icons/fi";
import creatorData from "../data/creatorData";
import "../styles/social-media.css";

function SocialMedia() {
    return (
        <section className="social-media section">
            <div className="container">

                <div className="social-header">

                    <div>
                        <div className="section-eyebrow">
                            <span></span>
                            FROM THE FEED
                        </div>

                        <h2>
                            Follow the
                            <br />
                            <span>journey.</span>
                        </h2>
                    </div>

                    <a
                        href={creatorData.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="social-handle"
                    >
                        <FiInstagram />
                        @alexcarterfitness
                        <FiArrowUpRight />
                    </a>

                </div>

                <div className="social-grid">

                    {creatorData.socialPosts.map((post, index) => (
                        <a
                            href={creatorData.social.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="social-post"
                            key={index}
                        >

                            <div className="social-post-image">
                                <img
                                    src={post.image}
                                    alt={post.type}
                                />

                                <div className="social-post-overlay">
                                    <FiInstagram />
                                </div>
                            </div>

                            <div className="social-post-content">

                                <span>{post.type}</span>

                                <p>{post.caption}</p>

                            </div>

                        </a>
                    ))}

                </div>

                <div className="social-footer">

                    <p>
                        Training tips, nutrition advice,
                        client wins, and everything in between.
                    </p>

                    <a
                        href={creatorData.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                    >
                        Follow on Instagram
                        <FiArrowUpRight />
                    </a>

                </div>

            </div>
        </section>
    );
}

export default SocialMedia;
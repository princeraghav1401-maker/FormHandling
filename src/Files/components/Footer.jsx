import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-left">
                    <h2>🚀 LoginApp</h2>
                    <p>Build. Secure. Grow.</p>
                </div>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Support</a>
                    <a href="#">Contact</a>
                </div>

                <div className="footer-social">
                    <span>🌐</span>
                    <span>🐦</span>
                    <span>📘</span>
                    <span>💼</span>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} LoginApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
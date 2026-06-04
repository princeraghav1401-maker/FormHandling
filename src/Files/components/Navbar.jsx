import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                🚀 LoginApp
            </div>

            <ul className="nav-links">
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Contact</li>
            </ul>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    );
};

export default Navbar;
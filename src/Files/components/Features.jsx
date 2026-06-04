import React from "react";
import "./Features.css";

const features = [
    {
        icon: "⚡",
        title: "Fast Performance",
        desc: "Optimized code for super fast loading and smooth experience.",
    },
    {
        icon: "🔒",
        title: "Secure Login",
        desc: "Your data is protected with strong authentication system.",
    },
    {
        icon: "🎨",
        title: "Clean UI",
        desc: "Modern and minimal UI for better user experience.",
    },
    {
        icon: "📱",
        title: "Responsive Design",
        desc: "Works perfectly on mobile, tablet, and desktop devices.",
    },
];

const Features = () => {
    return (
        <section className="features-section">
            <h2 className="features-title">Our Features</h2>

            <div className="features-container">
                {features.map((item, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
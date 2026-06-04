import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';

const Home = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>

            <Navbar />
            <Features />
   
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
// import Experience from '../components/sections/Experience';
// import Categories from '../components/sections/Categories';
// import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen">
            <Navbar />
            <Hero />
            {/* <Experience /> */}
            {/* <Categories /> */}
            
            {/* <Footer /> */}
        </div>  
    );
};

export default Home;
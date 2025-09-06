import React from 'react';
import Banner from "../components/Banner.jsx";
import BrandsSection from "../components/BrandsSection.jsx";

const Home = () => {
    return (
        <div>
            <Banner />
            {/*<div className="h-screen"></div>*/}
            <BrandsSection/>
        </div>
    );
};

export default Home;
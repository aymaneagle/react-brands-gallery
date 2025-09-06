import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/shared/NavBar.jsx";
import Footer from "../components/footer.jsx";

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className="max-w-screen-2xl mx-auto">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
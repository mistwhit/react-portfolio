import React, { useState, Fragment } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Fragment>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {renderPage()}
            </div>
            <Footer />
        </Fragment>
    );
}

export default PortfolioContainer;
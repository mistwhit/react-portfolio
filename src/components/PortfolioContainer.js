import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
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
        <div>
            <Header />
            <div>
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
}

export default PortfolioContainer;
import React from "react";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            {/* HOME TAB */}
            <li className="nav-item ml-auto">
                <a href="#home" onClick={() => handlePageChange("Home")} className={currentPage === "Home" ? "nav-link active" : "nav-link"}>Home</a>
            </li>
            {/* ABOUT TAB */}
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</a>
            </li>
            {/* PORTFOLIO TAB */}
            <li className="nav-item">
                <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
            </li>
            {/* RESUME TAB */}
            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
            </li>
            {/* CONTACT TAB */}
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
            </li>
        </ul>
        );
    }

export default Navigation;
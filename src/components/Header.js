import React from "react";
import Navigation from "./Navigation"

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
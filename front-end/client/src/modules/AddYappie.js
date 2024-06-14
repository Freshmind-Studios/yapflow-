import React from "react";

const AddYappie = ({ onClose }) => {
    return (
        <div className="add-yappie block">
            <input type="search" name="search" id="search-yappers" placeholder="Search by tag or name" />
            <div id="yappers-options-wrapper"></div>
            <div className="yapper-option"></div>
            <div className="select"></div>
        </div>
    );
};

export default AddYappie;
import "./dropdown.scss";
import React, { useState } from "react";

const Dropdown = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <i
          className={`fas arrow ${
            isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
          }`}
        ></i>
      </div>
      {isOpen && <div className="dropdown-content">{text}</div>}
    </div>
  );
};

export default Dropdown;

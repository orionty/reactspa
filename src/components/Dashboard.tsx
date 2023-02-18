import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid sidebar-container ">
      <FaBars className="fs-1 p-1 sidebar-toggle" onClick={handleToggle}/>
      
      <nav className={`sidebar-menu ${isOpen ? "show" : ""}`}>
        <ul className="sidebar-menu-items">
          <li className="sidebar-header">
            <span>Menu</span>
            <FaTimes className=" fs-1 p-1 sidebar-close" onClick={handleToggle}/>
            
          </li>
          <li className="sidebar-item">
            <a href="#home" className="text-decoration-none">
              <i className="fa fa-home"></i>
              Home
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#about" className="text-decoration-none">
              <i className="fa fa-user"></i>
              About
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#services" className="text-decoration-none">
              <i className="fa fa-cog"></i>
              Services
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#contact" className="text-decoration-none">
              <i className="fa fa-envelope"></i>
              Contact
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Sidebar;
import logo from "../images/logo.svg";
import { links, social } from "./links";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="nav-toggle" onClick={toggleNavbar}>
            {isNavbarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={
            isNavbarOpen ? "nav-links-cont show-nav" : "nav-links-cont"
          }
        >
          <ul className="nav-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
          <button className="btn login-btn">get started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

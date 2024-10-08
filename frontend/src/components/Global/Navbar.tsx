import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <NavLink to="/homepage" className="logo">
          InvestingMadeEasy
        </NavLink>
        <div className="flex">
          <div className="hamburger" onClick={toggleMenu}>
            <div style={{ width: "1.5rem" }}>
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                size="2x"
                color="limegreen"
              />
            </div>
          </div>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="list">
              <li className="inline">
                <NavLink to="/homepage" className="tab" onClick={toggleMenu}>
                  Homepage
                </NavLink>
              </li>
              <li className="inline">
                <NavLink to="/screener" className="tab" onClick={toggleMenu}>
                  Screener
                </NavLink>
              </li>
              <li className="inline">
                <NavLink to="/performance" className="tab" onClick={toggleMenu}>
                  Performance
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

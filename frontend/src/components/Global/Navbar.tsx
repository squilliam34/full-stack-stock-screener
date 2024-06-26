import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="list">
          <li className="inline">
            <NavLink to="/homepage" className="tab">
              Homepage
            </NavLink>
          </li>
          <li className="inline">
            <NavLink to="/screener" className="tab">
              Screener
            </NavLink>
          </li>
          <li className="inline">
            <NavLink to="/performance" className="tab">
              Performance
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

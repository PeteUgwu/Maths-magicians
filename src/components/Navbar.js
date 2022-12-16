import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="titleDiv">
      <h2 className="title">Math Magicians</h2>
    </div>
    <div className="menu">
      <nav>
        <ul className="menuList">
          <li className="listItem">
            <Link to="/">Home</Link>
          </li>
          <li className="listItem">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="listItem">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  </div>
);

export default Navbar;

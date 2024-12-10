import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Smart Service
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'hover:text-primary'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'hover:text-primary'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'hover:text-primary'
              }
            >
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trees"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'hover:text-primary'
              }
            >
              Trees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sensors"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'hover:text-primary'
              }
            >
              Sensors
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login">
          <button className="btn btn-primary">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Logo from "../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-bg fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              className="logo"
              alt="Logo"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {/* Add mx-auto class to center the list items */}
            <li className="nav-item text-light">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/foods"
                activeClassName="active"
              >
                Foods
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/fish"
                activeClassName="active"
              >
                Fish
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/dogs"
                activeClassName="active"
              >
                Dogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/cats"
                activeClassName="active"
              >
                Cats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/birds"
                activeClassName="active"
              >
                Birds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/accessories"
                activeClassName="active"
              >
                Accessories
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

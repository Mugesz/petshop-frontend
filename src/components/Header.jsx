import React from "react";
import Logo from "../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import {animateScroll as scroll } from "react-scroll";
import "./styles.css";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className="navbar navbar-expand-lg nav-bg fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <Link className="navbar-brand" to="/" onClick={scrollToTop}>
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
          
            <li className="nav-item text-light">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
                onClick={scrollToTop}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fish" activeClassName="active"
               onClick={scrollToTop}>
                Fish
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dogs" activeClassName="active"
               onClick={scrollToTop}>
                Dogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/otherpets"
                activeClassName="active"
                onClick={scrollToTop}
              >
                Otherpets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/birds"
                activeClassName="active"
                onClick={scrollToTop}
              >
                Birds
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Foods
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/dogfoods"  onClick={scrollToTop}>
                  Dogs foods
                </Link>
                <Link className="dropdown-item" to="/fishfoods"  onClick={scrollToTop}>
                  Fish foods
                </Link>

                <Link className="dropdown-item" to="/birsfoods"  onClick={scrollToTop}>
                  Birds foods
                </Link>

                <Link className="dropdown-item" to="/medicine"  onClick={scrollToTop}>
                  Medicine
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Accessories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/dogAccessories"  onClick={scrollToTop}>
                  Dogs Accessories
                </Link>
                <Link className="dropdown-item" to="/fishAccessories"  onClick={scrollToTop}>
                  Fish Accessories
                </Link>

                <Link className="dropdown-item" to="/birdAccessories"  onClick={scrollToTop}>
                  Birds Accessories
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Burger from "../burger/burger.component";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navlinkAnimation, setNavliknkAnimation] = useState(false);

  const links = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "gallery",
      path: "/gallery",
    },
    {
      text: "contact",
      path: "/contact",
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
    setNavliknkAnimation((prev) => !prev);
  };

  return (
    <header className="nav">
      <div className="component-container">
        <div className="logo">
          <Link className="logo-image-container" to="/">
            <Logo className="logo-image" />
          </Link>
        </div>

        <Burger handleToggle={handleToggle} />

        <ul className={`nav-links ${navbarOpen ? "nav-active" : ""}`}>
          {links.map((link, index) => {
            return (
              <li
                className="nav-link"
                navlinkanimation={navlinkAnimation.toString()}
                key={index}
                index={index}
              >
                <NavLink
                  to={link.path}
                  className="active"
                  onClick={handleToggle}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

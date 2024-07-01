import React, { useState } from "react";
import logo from '../assets/logo.png';

import '../css/Navbar.css';

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Link as LinkScroll} from 'react-scroll';


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

function Navbar() {
  const [active, setActive] = useState("navbar-menu");
  const [icon, setIcon] = useState("navbar-toggler");
  const navToggle = () => {
    if (active === "navbar-menu") {
      setActive("navbar-menu active");
    } else setActive("navbar-menu");

    // Icon Toggler
    if (icon === "navbar-toggler") {
      setIcon("navbar-toggler toggle");
    } else setIcon("navbar-toggler");
  };

  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <nav className={fix ? "navbar fixed" : "navbar"}>
      <div className="navbar-title-ctr">
        <img src={logo} className="navbar-logo" alt="navbar-title" />
        <a href="#" className="navbar-title">The Circle Lab</a>
      </div>
      <ul className={active}>
        <CustomLink to="/" className="navbar-btn" id="btn-1">Home</CustomLink>
        <CustomLink to="/about" className="navbar-btn" id="btn-2">About</CustomLink>
        <LinkScroll className="navbar-btn" id="btn-3" to="HomeSectionIII" spy={true} smooth={true} offset={50} duration={500}>Projects</LinkScroll>
        <LinkScroll className="navbar-btn" id="btn-3" to="HomeSectionIV" spy={true} smooth={true} offset={50} duration={500}>Publications</LinkScroll>
        <LinkScroll className="navbar-btn" id="btn-4" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</LinkScroll>
        {/* <CustomLink to="/projects" className="navbar-btn" id="btn-3">Projects</CustomLink> */}
        {/* <CustomLink to="/publications" className="navbar-btn" id="btn-4">Publications</CustomLink> */}
        {/* <CustomLink to="/contact" className="navbar-btn" id="btn-5">Contact</CustomLink> */}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

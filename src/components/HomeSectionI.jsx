import React from 'react';
import Spline from '@splinetool/react-spline';

import { Link, useMatch, useResolvedPath } from "react-router-dom";

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


const HomeSectionI = () => {
  return (
    <>
      <section className="HSI-ctr">
        <div className="HSI-left-ctr">
          <h1 className="HSI-maintitle">The Circle Lab</h1>
          <h6 className="HSI-subtitle">
            Led by <b className="HSII-subtitle-highlights">Dr. Preeti Raman</b>, the  
            <b className="HSII-subtitle-highlights"> C</b>omputational 
            <b className="HSII-subtitle-highlights"> I</b>nnovations and 
            <b className="HSII-subtitle-highlights"> R</b>esearch for 
            <b className="HSII-subtitle-highlights"> C</b>are-centered 
            <b className="HSII-subtitle-highlights"> L</b>earning and 
            <b className="HSII-subtitle-highlights"> E</b>ducation 
            (CIRCLE) lab, stands at the forefront of this pedagogical revolution.
          </h6>
          <CustomLink to="/about" className="HSI-btn" id="btn">About Us</CustomLink>
        </div>
        <div className="HSI-right-ctr">
          <Spline scene="https://prod.spline.design/2SuwXqID5yuIjF8m/scene.splinecode" />
        </div>
      </section>
    </>
  )
}

export default HomeSectionI;
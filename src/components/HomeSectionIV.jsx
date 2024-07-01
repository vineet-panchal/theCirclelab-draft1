import React, { useRef } from 'react';
import '../css/HomeSectionIV.css';

import MediaQuery from '../js/MediaQuery';

const HomeSectionIV = () => {

  const matchQuery = MediaQuery("(max-width: 1250px)");

  const postSlider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (matchQuery) {
      if (tx > -80) {
        tx -= 10;
      } postSlider.current.style.transform = `translateX(${tx}%)`;
    }
    if (tx > -55) {
      tx -= 11;
    } postSlider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 11;
    } postSlider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="HSIV-ctr" id="HomeSectionIV">
      <div className="blogs-title-content">
        <h6 className="blogs-subtitle">Blog Stories</h6>
        <h3 className="blogs-title">
          <span>Check Our News</span>
        </h3>
      </div>
      <div className="blogs-ctr">
        <img className="next-btn" onClick={slideForward} src="https://img.icons8.com/ios/100/right--v1.png" alt="right--v1"/>
        <img className="back-btn" onClick={slideBackward} src="https://img.icons8.com/ios/100/left--v1.png" alt="left--v1"/>
        <div className="posts-slider">
          <ul ref={postSlider}>
            <li>
              <div className="post">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">Tools Competition Winner</h3>
                    <span className="post-date">Sep 2023</span>
                  </div>
                </div>
                <p className="post-description">
                  Working with Prof.Reich at MIT, we are the 2023 Winners of the 
                  Learning Engineering Tools Competition - a multi-million dollar 
                  competition for edtech innovation that leverages digital technology, 
                  big data, and learning science to meet the urgent needs of learners worldwide. 
                </p> 
              </div>
            </li>
            <li>
              <div className="post">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">CS Canada Teachers Learning Network</h3>
                    <span className="post-date">Oct 2023</span>
                  </div>
                </div>
                <p className="post-description">  
                  Through out TLN, we are working with Computer Science teachers in 
                  Ontario to share the latest best practices in K-12 computer science 
                  education, provide professional development to help each other, and 
                  help CS teachers affirm their own identities and build inclusive classrooms.
                </p>
              </div>
            </li>
            <li>
              <div className="post">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">CSforALL</h3>
                    <span className="post-date">Sep 2023</span>
                  </div>
                </div>
                <p className="post-description">
                  We want teachers and students in all contexts have access to evidence-based 
                  practices and resources to actively participate in a computational world. 
                  Toward that end, we are collaborating with global partners to conduct research 
                  to understand how CS learning happens in a variety of contexts and to develop 
                  and provide low-cost computational tools that are accessible to all.
                </p>
              </div>
            </li>
            <li>
              <div className="post">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">Welcome Atif to our CIRCLE</h3>
                    <span className="post-date">July 2023</span>
                  </div>
                </div>
                <p className="post-description">
                  Atif starts his doctoral journey in CS this Fall at TMU! Atif is a seasoned 
                  business practitioner with a deep understanding of technology management and 
                  business issues. He has extensive experience in telecommunication and 
                  technology/IT management and has held various technology, strategy, and 
                  business positions in multiple companies in Canada and across the world.
                </p>
              </div>
            </li>
            <li>
              <div className="post">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">Welcome Harjot to our CIRCLE!</h3>
                    <span className="post-date">July 2023</span>
                  </div>
                </div>
                <p className="post-description">
                  Harjot is a brilliant Computer Scientist with a few years of industry 
                  experience post his undergraduate degree in Computer Science from TMU. 
                  A dance instructor by training, he is interested in exploring computational 
                  principles become embodied in physical form through sensing and movement, or 
                  through engaging with the world through a computational social lens.
                </p>
              </div>
            </li>
            <li>
              <div className="post">
                <div className="post-info">
                  <div>
                    <h3 className="post-title">Talk at NIE, Singapore</h3>
                    <span className="post-date">June 2023</span>
                  </div>
                </div>
                <p className="post-description"> 
                  Dr. Preeti Raman shared the latest work on integrative analytics for care at 
                  the NIE. The National Institute of Education (NIE), Singapore, is the national 
                  teacher education institute in the country and an integral part of the national 
                  education system. The talk titled "Exploring the role of integrative analytics 
                  in supporting pedagogies of care" started many conversations around the ways 
                  in which data can be used to support student growth.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionIV;
import React from 'react';
import project1 from '../../public/critical_action_learning_exchange.svg';
import project2 from '../../public/embodied_cs.svg';
import project3 from '../../public/everyday_ai.svg';
import project4 from '../../public/integrative_analytics_for_care.svg';
import project5 from '../../public/privacy_and_responsible_ai.svg';
import project6 from '../../public/csforall.png';

import '../css/HomeSectionIII.css';

const HomeSectionIII = () => {
  return (
    <div className="HSIII-ctr" id="HomeSectionIII">
      <div className="projects-title-content">
        <h3 className="projects-title">
          <span>Current Projects</span>
        </h3>
      </div>
      <div className="projects-ctr-1">
        <div className="projects-card">
          <img src={project1} alt="" />
          <div className="projects-card-caption">
            <p>Critical Action Learning Exchange</p>
          </div>
        </div>
        <div className="projects-card">
          <img src={project2} alt="" />
          <div className="projects-card-caption">
            <p>Embodied CS</p>
          </div>
        </div>
        <div className="projects-card">
          <img src={project3} alt="" />
          <div className="projects-card-caption">
            <p>Everyday AI</p>
          </div>
        </div>
      </div>
      <div className="projects-ctr-2">
        <div className="projects-card">
          <img src={project4} alt="" />
          <div className="projects-card-caption">
            <p>Integrative Analytics For Care</p>
          </div>
        </div>
        <div className="projects-card">
          <img src={project5} alt="" />
          <div className="projects-card-caption">
            <p>Privacy and Responsible AI</p>
          </div>
        </div>
        <div className="projects-card">
          <img src={project6} alt="" />
          <div className="projects-card-caption">
            <p>CSforALL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionIII;
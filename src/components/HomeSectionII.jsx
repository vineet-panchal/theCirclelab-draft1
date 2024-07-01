
import { Link as LinkScroll} from 'react-scroll';

import React from 'react';
import InfoCard from './InfoCard';
import '../css/HomeSectionII.css';

const logo1 = 'https://img.icons8.com/ios/100/learning--v1.png';
const logo2 = 'https://img.icons8.com/ios/100/google-code.png';

const HomeSectionII = () => {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Goals</span>
        </h3>
        <p className="info-description">
        The CIRCLE Lab aims to introduce a care-centric approach in Computer Science aims to 
        nurture not just the computational skills of budding computer scientists, 
        but also their emotional intelligence, empathy, and ethical reasoning.
        </p>
      </div>
      <div className="info-cards-content">
        <div className="info-cards" id="info-card-1">
          <p className="info-card-title">Join The Circle</p>
        </div>
        <InfoCard 
          title="Integrative Analytics for CS Education" 
          image={logo1}
          id="info-card-2"
        />
        <InfoCard 
          title="Embodied Computer Science" 
          image={logo2}
          id="info-card-3"
        />
      </div>
    </div>
  )
}

export default HomeSectionII;
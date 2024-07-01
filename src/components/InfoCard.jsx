import React from 'react';

const InfoCard = (props) => {
  return (
    <div className="info-cards">
      <img src={props.image} alt="info-card-img" className="info-card-img" />
      <p className="info-card-title">{props.title}</p>
    </div>
  )
}

export default InfoCard;

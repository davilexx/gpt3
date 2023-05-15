import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className="wgpt3__feature feature">
      <div className="feature__container">
        <div className="feature__top">
          <div className="feature__gradient gradient__bar"></div>
          <h3 className="feature__title">{title}</h3>
        </div>
        <p className="feature__description">{text}</p>
      </div>
    </div>
  );
};

export default Feature;

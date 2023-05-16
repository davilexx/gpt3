import React from 'react';
import './possibility.css';
import possibility from '../../assets/img/possibility.png';

function Possibility() {
  return (
    <section className="possibility">
      <div className="possibility__container">
        <div className="possibility__left">
          <img
            src={possibility}
            alt="possibility"
            className="possibility__img"
          />
        </div>
        <div className="possibility__right">
          <p className="possibility__early-top">
            Request Early Access to Get Started
          </p>
          <h2 className="possibility__title gradient__text">
            The possibilities are beyond your imagination
          </h2>
          <p className="possibility__description">
            GPT-3 has the potential to automate and enhance many aspects of
            communication, information retrieval, and creative content creation.
            It enables interactive and intelligent systems that can understand,
            generate, and respond to text in a way that simulates human-like
            conversation.
          </p>
          <p className="possibility__early-bottom">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </section>
  );
}

export default Possibility;

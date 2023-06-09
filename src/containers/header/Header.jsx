import React from 'react';
import './header.css';
import people from '../../assets/img/people.png';
import ai from '../../assets/img/ai.png';

function Header() {
  return (
    <header className="page__header header">
      <div className="header__container">
        <div className="header__left">
          <h1 className="header__title gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="header__description">
            With GPT-3 by OpenAI, you can build a wide range of applications
            including chatbots, virtual assistants, language translation tools,
            content generators, personalized recommendation systems, and much
            more. Its versatility and natural language processing capabilities
            make it a powerful tool for creating intelligent and interactive
            systems.
          </p>
          <div className="header__input">
            <input type="email" placeholder="Your Email Address" />
            <button className="header__btn">Get Started</button>
          </div>
          <div className="header__people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="header__right">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </header>
  );
}

export default Header;

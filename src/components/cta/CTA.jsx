import React from 'react';
import './cta.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__wrapper">
          <div className="cta__left">
            <p className="cta__description">
              Request Early Access to Get Started
            </p>
            <h2 className="cta__title">
              Register today & start exploring the endless possibilities.
            </h2>
          </div>
          <button className="cta__btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;

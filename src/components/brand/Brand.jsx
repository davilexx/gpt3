import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

function Brand() {
  return (
    <section className="brand">
      <div className="brand__container">
        <div className="brand__logo">
          <img src={google} alt="google" className="brand__img" />
        </div>
        <div className="brand__logo">
          <img src={slack} alt="slack" className="brand__img" />
        </div>
        <div className="brand__logo">
          <img src={atlassian} alt="atlassian" className="brand__img" />
        </div>
        <div className="brand__logo">
          <img src={dropbox} alt="dropbox" className="brand__img" />
        </div>
        <div className="brand__logo">
          <img src={shopify} alt="shopify" className="brand__img" />
        </div>
      </div>
    </section>
  );
}

export default Brand;

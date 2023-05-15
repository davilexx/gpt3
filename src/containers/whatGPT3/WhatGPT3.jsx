import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

function WhatGPT3() {
  return (
    <section className="wgpt3">
      <div className="wgpt3__container">
        <div className="wgpt3__first-feature">
          <Feature
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>
        <div className="wgpt3__headline">
          <h2 className="wgpt3__title gradient__text">
            The possibilities are beyond your imagination
          </h2>
          <p className="wgpt3__description">Explore The Library</p>
        </div>
        <div className="wgpt3__features">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </section>
  );
}

export default WhatGPT3;

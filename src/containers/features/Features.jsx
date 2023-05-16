import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Advancement in Model Capacity',
    text: 'The future of GPT-3 involves further improvements in model capacity, with even larger and more powerful language models being developed. This will allow for better understanding of context, increased accuracy, and more sophisticated responses.',
  },
  {
    title: 'Enhanced Fine-tuning Capabilities',
    text: 'There will be advancements in fine-tuning techniques, enabling users to adapt GPT-3 to specific domains or tasks more effectively. This will result in more tailored and specialized applications across various industries.',
  },
  {
    title: 'Ethical and Responsible AI',
    text: 'As the deployment of GPT-3 expands, there will be an increased focus on addressing ethical concerns and ensuring responsible AI usage. Efforts will be made to mitigate biases, improve transparency, and establish guidelines for safe and responsible deployment of GPT-3 in different contexts.',
  },
  {
    title: 'Integration with Multi-modal Inputs',
    text: 'GPT-3 is primarily trained on text-based data, but the future will likely involve integrating multi-modal inputs, such as images, audio, and video, to enable more comprehensive understanding and generation of content. This will open up new possibilities for interactive and immersive experiences powered by GPT-3.',
  },
];

function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__left">
          <h2 className="features__title gradient__text">
            The future is now and you just need to realize it. Step into future
            today & make it happen.
          </h2>
          <p className="features__description">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="features__right">
          {featuresData.map((item, index) => {
            return <Feature title={item.title} text={item.text} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;

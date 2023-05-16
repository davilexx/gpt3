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
            text="GPT-3 (Generative Pre-trained Transformer 3) is an advanced language model developed by OpenAI. It is a state-of-the-art deep learning model that uses a transformer architecture to understand and generate human-like text. GPT-3 has been trained on a vast amount of data and is capable of performing various natural language processing tasks, such as language translation, text completion, question answering, and text generation. It has 175 billion parameters, making it one of the largest and most powerful language models to date."
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
            text="GPT-3 chatbots are conversational agents powered by the GPT-3 language model. These chatbots leverage the natural language processing capabilities of GPT-3 to engage in dynamic and human-like conversations with users. They can understand and respond to text inputs, provide information, answer questions, offer suggestions, and carry out interactive dialogues. GPT-3 chatbots are designed to simulate human conversation and provide a more interactive and personalized user experience."
          />
          <Feature
            title="Knowledgebase"
            text="GPT-3 is not specifically designed as a knowledgebase. It is a language model that can generate text based on the input it receives. While GPT-3 can provide information and answer questions based on its training data, it does not possess the structured organization or retrieval capabilities of a traditional knowledgebase. However, it can still be used to generate responses or explanations on a wide range of topics, drawing upon the information it has learned during training."
          />
          <Feature
            title="Education"
            text="GPT-3 can be a valuable tool in the field of education. It can assist with tasks such as language translation, text summarization, essay writing assistance, question answering, and providing explanations on various subjects. GPT-3 can also be used to create interactive educational materials, virtual tutors, and personalized learning experiences. It has the potential to enhance educational resources, facilitate access to information, and support students and educators in their learning journeys. However, it is important to note that GPT-3 is a language model and should not be considered a substitute for human teachers or personalized instruction."
          />
        </div>
      </div>
    </section>
  );
}

export default WhatGPT3;

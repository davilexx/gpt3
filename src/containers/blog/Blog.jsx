import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
  return (
    <section className="blog">
      <div className="blog__container">
        <h2 className="blog__title gradient__text">
          A lot is happening,
          <br />
          We are blogging about it.
        </h2>
        <div className="blog__articles">
          <Article
            imgSrc={blog01}
            date="May 10, 2023"
            title="Unleashing the Power of GPT-3: Revolutionizing Natural Language Processing"
          />
          <Article
            imgSrc={blog02}
            date="Apr 26, 2023"
            title="Exploring the Limitless Potential of GPT-3: A Game-Changer in AI Technology"
          />
          <Article
            imgSrc={blog03}
            date="Apr 02, 2023"
            title="Transforming Industries with GPT-3: How AI Language Models Are Shaping the Future"
          />
          <Article
            imgSrc={blog04}
            date="Mar 21, 2023"
            title="The Rise of GPT-3: Redefining Human-Machine Interaction"
          />
          <Article
            imgSrc={blog05}
            date="Mar 13, 2023"
            title="Ethical Considerations in Deploying GPT-3: Ensuring Responsible AI Implementation"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;

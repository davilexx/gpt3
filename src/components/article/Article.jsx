import React from 'react';
import './article.css';

function Article({ imgSrc, date, title }) {
  return (
    <div className="blog__article article">
      <div className="article__img-wrapper">
        <img src={imgSrc} alt={imgSrc} className="article__img" />
      </div>
      <div className="article__text">
        <p className="article__date">{date}</p>
        <h3 className="article__title">{title}</h3>
      </div>
      <a href="#" className="article__read">
        Read full article
      </a>
    </div>
  );
}

export default Article;

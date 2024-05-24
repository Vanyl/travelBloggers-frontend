import React from 'react';

const ArticleCard = ({ imageUrl, title, description, tags }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

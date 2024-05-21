// src/components/CountryGermany.jsx
import React from 'react';
import '../sass/countrySpain.sass';

const CountryGermany = ({ articles }) => {
  const fakeArticles = [
    {
      imageUrl: '/src/assets/images/hero-banner2.jpg',
      title: 'Titre de l\'article 1',
      description: 'Description de l\'article 1',
      tags: ['tag1', 'tag2']
    },
    {
      imageUrl: '/src/assets/images/hero-banner2.jpg',
      title: 'Titre de l\'article 2',
      description: 'Description de l\'article 2',
      tags: ['tag3', 'tag4']
    },
    {
      imageUrl: '/src/assets/images/hero-banner2.jpg',
      title: 'Titre de l\'article 3',
      description: 'Description de l\'article 3',
      tags: ['tag5', 'tag6']
    }
  ];

  if (!articles) {
    articles = fakeArticles;
  }

  return (
    <div className="country-spain">
      <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/germany-topbanner.jpg')` }}>
        <h1>Germany</h1>
        <p>Experience the rich history, cultural diversity, and modern innovation of Germany. From the historic sites of Berlin to the scenic beauty of the Black Forest, Germany offers something for every traveler.</p>
      </div>
      <div className="filters">
        <input type="text" placeholder="Search by keyword or by tag" />
        <select>
          <option value="recent">Recent</option>
          <option value="ancient">Ancient</option>
        </select>
      </div>

      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <div className="image-container">
              <img src={article.imageUrl} alt="Article" />
            </div>
            <div className="info-container">
              <div className="title">{article.title}</div>
              <div className="description">{article.description}</div>
              <div className="tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryGermany;

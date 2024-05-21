import React from 'react';
import '../sass/countrySpain.sass';

const CountrySouthKorea = ({ articles }) => {
  const fakeArticles = [
    {
      imageUrl: '/src/assets/images/hero-banner2.jpg',
      title: 'Article Title 1',
      description: 'Description of Article 1',
      tags: ['tag1', 'tag2']
    },
    // Ajouter d'autres articles factices ici si nécessaire
  ];

  if (!articles) {
    articles = fakeArticles;
  }

  return (
    <div className="country-spain">
      <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/southkorea-topbanner.jpg')` }}>
        <h1>South Korea</h1>
        <p>Immerse yourself in the bustling streets of Seoul, the tranquil beauty of Jeju Island, and the rich history of Gyeongbokgung Palace. South Korea offers a unique blend of tradition and modernity.</p>
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

export default CountrySouthKorea;

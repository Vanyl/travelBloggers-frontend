import React from 'react';
import '../sass/countrySpain.sass';

const CountrySpain = ({ articles }) => {
  // Faux articles pour tester
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

  // Vérifier si les données des articles sont disponibles
  if (!articles) {
    articles = fakeArticles; // Utiliser les faux articles si les données ne sont pas disponibles
  }

  return (
    <div className="country-spain">
      <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/spain-topbanner.jpg')` }}>
        <h1>Spain</h1>
        <p>Where ancient streets whisper tales of history, flavors of tapas ignite the palate, and the rhythm of flamenco fills the air. From the iconic sights of Madrid to the azure shores of Mallorca, let Spain's charm beckon you to explore its diverse wonders</p>
      </div>
      <div className="filters">
        <input type="text" placeholder="Search by keyword or by tag" />
        <select>
          <option value="recent">Recent</option>
          <option value="ancient">Ancient</option>
          {/* Ajoute d'autres options de filtre ici si nécessaire */}
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

export default CountrySpain;

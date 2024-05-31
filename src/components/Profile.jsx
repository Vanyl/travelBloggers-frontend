import React, { useState, useEffect } from 'react';
import '../sass/profile.sass';
import { FaCog, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = ({ userData, accessToken }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [favoriteArticles, setFavoriteArticles] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const fetchFavoriteArticles = async () => {
    try {
      console.log('Fetching favorite articles...');
      const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/my-favorites', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Favorite articles:', data.myLikes);
        // Filtrer les doublons en utilisant un ensemble pour stocker les identifiants uniques
        const uniqueFavoriteArticles = Array.from(new Set(data.myLikes.map(like => like.article.id)));
        // Filtrer les articles aimés pour n'afficher qu'une seule fois chaque article
        const uniqueFavoriteArticlesList = uniqueFavoriteArticles.map(articleId =>
          data.myLikes.find(like => like.article.id === articleId)
        );
        setFavoriteArticles(uniqueFavoriteArticlesList);
      } else {
        console.error('Failed to fetch favorite articles:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching favorite articles:', error);
    }
  };

  useEffect(() => {
    if (activeTab === 'favorites') {
      fetchFavoriteArticles();
    }
  }, [activeTab, accessToken]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return ( 
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-picture">
          {userData.avatar ? (
            <img src={userData.avatar} alt="User's Profile Picture" />
          ) : (
            <div>No avatar available</div>
          )}
        </div>
        <div className="profile-details">
          <h1>{userData.name}</h1>
          <p>{userData.description}</p>
        </div>
        <div className="settings-button">
          <Link to={{
              pathname: "/my-account-settings",
              state: { updatedUserData: userData }
          }}>
              <FaCog />
          </Link>
        </div>
      </div>
      <div className="feed-header">
        <button className={activeTab === 'posts' ? 'active' : ''} onClick={() => handleTabChange('posts')}>
          Posts
        </button>
        <button className={activeTab === 'favorites' ? 'active' : ''} onClick={() => handleTabChange('favorites')}>
          Favorites
        </button>
      </div>

      <div className="feed-grid">
        {activeTab === 'posts' && userData.articles && userData.articles.map((article) => (
          <div className="feed-item" key={article.id}>
            <img src={article.image_url} alt={`Article ${article.id}`} />
            <Link className='settings-article-link' to={`/article/${article.id}`}><h3>{article.title}</h3></Link>
          </div>
        ))}
        {activeTab === 'favorites' && favoriteArticles.map((like) => (
          <div className="feed-item" key={like.article.id}>
            <img src={like.article.image_url} alt={`Article ${like.article.id}`} />
            <Link className='settings-article-link' to={`/article/${like.article.id}`}><h3>{like.article.title}</h3></Link>
          </div>
        ))}
      </div>
      <div className="add-article-button">
        <Link to="/my-account-add-article">
          <FaPlus />
        </Link>
      </div>
    </div>
  );
};

export default Profile;

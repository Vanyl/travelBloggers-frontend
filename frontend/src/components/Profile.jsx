import React, { useState } from 'react';
import '../sass/profile.sass';
import { FaCog, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSettingsButtonClick = () => {
    // Logique des paramètres
  };

  const handleAddArticle = () => {
    // Logique pour ajouter un nouvel article
  };

  // Ajoutez une vérification pour vous assurer que userData est défini
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
        <div className="settings-button" onClick={handleSettingsButtonClick}>
          <Link to={{
              pathname: "/my-account-settings",
              state: { userData: userData }
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
        {userData.articles && userData.articles.map((article) => (
          <div className="feed-item" key={article.id}>
            <img src={article.image_url} alt={`Article ${article.id}`} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
      <div className="add-article-button" onClick={handleAddArticle}>
        <Link to="/my-account-add-article">
          <FaPlus />
        </Link>
      </div>
    </div>
  );
};

export default Profile;

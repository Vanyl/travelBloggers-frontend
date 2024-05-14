import React, { useState } from 'react';
import '../sass/profile.sass'; 
import { FaCog, FaPlus } from 'react-icons/fa';


const Profile = () => {
    const [activeTab, setActiveTab] = useState('posts');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSettingsButtonClick = () => {
        // Logique à exécuter lorsque le bouton de réglages est cliqué
    };

    const handleAddArticle = () => {
        // Logique pour ajouter un nouvel article
    };

    return (

        <div className="profile-container">
            <div className="profile-info">
                <div className="profile-picture">
                    <img src="placeholder.jpg" alt="User's Profile Picture" />
                </div>
                <div className="profile-details">
                    <h1>Username</h1>
                    <p>Description</p>
                </div>
                <div className="settings-button" onClick={handleSettingsButtonClick}>
                    <FaCog />
                </div>
            </div>
            <div className="feed-header">
                <button 
                    className={activeTab === 'posts' ? 'active' : ''}
                    onClick={() => handleTabChange('posts')}
                >
                    Posts
                </button>
                <button 
                    className={activeTab === 'favorites' ? 'active' : ''}
                    onClick={() => handleTabChange('favorites')}
                >
                    Favorites
                </button>
            </div>
            <div className="feed-grid">
                {/* Articles will be dynamically added here */}
                <div className="feed-item">
                        <img src="article1.jpg" alt="Article 1" />
                        <h3>Titre de l'article 1</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article2.jpg" alt="Article 2" />
                        <h3>Titre de l'article 2</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article3.jpg" alt="Article 3" />
                        <h3>Titre de l'article 3</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article4.jpg" alt="Article 4" />
                        <h3>Titre de l'article 4</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article5.jpg" alt="Article 5" />
                        <h3>Titre de l'article 5</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article6.jpg" alt="Article 6" />
                        <h3>Titre de l'article 6</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article7.jpg" alt="Article 7" />
                        <h3>Titre de l'article 7</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article8.jpg" alt="Article 8" />
                        <h3>Titre de l'article 8</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
                    <div className="feed-item">
                        <img src="article9.jpg" alt="Article 9" />
                        <h3>Titre de l'article 9</h3>
                    </div>
            </div>
            <div className="add-article-button" onClick={handleAddArticle}>
                <FaPlus />
            </div>
        </div>

    );
};

export default Profile;





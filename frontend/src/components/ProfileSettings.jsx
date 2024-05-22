import React, { useState, useEffect } from 'react';
import '../sass/profile-settings.sass';
import { FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


const ProfileSettings = ({ userData }) => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      console.log("userData in useEffect:", userData);
      setUsername(userData.name);
      setDescription(userData.description || '');
      setLoading(false);
    } else {
      console.log("No userData found");
      setLoading(false);
    }
  }, [userData]);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value.slice(0, 250)); // Limite à 250 caractères
  };

  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleSaveChanges = async () => {
    // Logique pour enregistrer les modifications
  };

  const handleDeleteAccount = () => {
    // Logique pour supprimer le compte
  };

  const handleDeleteArticle = (articleId) => {
    // Logique pour supprimer un article
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="profile-settings">
      <div className="profile-picture">
        <img src={userData.avatar || 'placeholder.jpg'} alt="User's Profile Picture" />
        <input type="file" onChange={handleProfilePictureChange} />
        <button className="green-button" onClick={() => console.log('Change profile picture')}>Change</button>
      </div>
      <div className="profile-details">
        <input type="text" value={username} onChange={handleChangeUsername} />
        <textarea
          value={description}
          onChange={handleChangeDescription}
          maxLength={250}
          rows={3}
        />
      </div>
      <button className="green-button" onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <h2>My Articles</h2>
      <div className="feed-grid">
        {userData.articles && userData.articles.map((article) => (
          <div className="feed-item" key={article.id}>
            <img src={article.image_url} alt={`Article ${article.id}`} />
            <h3>{article.title}</h3>
            <div className='btn-articles'>
              <button className="edit-button"><Link to="/my-account-edit-article" className="edit-button">Edit</Link></button>
              <button className="delete-button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSettings;

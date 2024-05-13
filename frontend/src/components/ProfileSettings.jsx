import React, { useState } from 'react';
import '../sass/profile-settings.sass';
import { FaCog } from 'react-icons/fa';

const ProfileSettings = () => {
    const [username, setUsername] = useState("Username");
    const [description, setDescription] = useState("Description");
    const [newProfilePicture, setNewProfilePicture] = useState(null);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value.slice(0, 250)); // Limite à 250 caractères
    };

    const handleProfilePictureChange = (e) => {
        setNewProfilePicture(e.target.files[0]);
    };

    const handleSaveChanges = () => {
        // Logic to save changes (username, description, profile picture)
    };

    const handleDeleteAccount = () => {
        // Logic to delete account
    };

    const handleDeleteArticle = (articleId) => {
        // Logic to delete article
    };

    // Simulated articles data
    const articles = [
        { id: 1, title: "Article 1", image: "article1.jpg" },
        { id: 2, title: "Article 2", image: "article2.jpg" },
        { id: 3, title: "Article 3", image: "article3.jpg" }
    ];

    return (
        <div className="profile-settings">
            <div className="profile-picture">
                <img src="placeholder.jpg" alt="User's Profile Picture" />
                <input type="file" onChange={handleProfilePictureChange} />
                <button className="green-button" onClick={() => console.log("Change profile picture")}>Change</button>
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
                {/* Map through user's articles and display them */}
                {articles.map(article => (
                    <div className="feed-item" key={article.id}>
                        <img src={article.image} alt={article.title} />
                        <h3>{article.title}</h3>
                        <button className="edit-button" onClick={() => console.log("Edit button clicked")}><FaCog /></button>
                        <button className="delete-button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSettings;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/posts.sass';

const Posts = () => {
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/show-all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPostsData(data.articles.slice(0, 6)); // Prends seulement les 6 premiers articles
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="posts-container">
            {postsData.map((post) => (
                <div key={post.id} className='post-container'>
                    <div className="image-container">
                        <img className="post-img" src={post.image_url} alt="post" />
                        <Link className='hover-title' to={`/article/${post.id}`}>
                            <div className='hover-info'>
                                <p className='hover-title'>{post.title}</p>
                                <p className='hover-date'>{formatDate(post.created_at)}</p>
                            </div>
                        </Link>
                    </div>
                    <div className='info-container-article-home'>
                        <div className="tags-container">
                            <div className='tags'>
                                {post.categories && post.categories.length > 0 ? (
                                    post.categories.map(category => (
                                        <span key={category.id} className='tag'>{category.name}</span>
                                    ))
                                ) : (
                                    null
                                )}
                                <span className='tag'><Link className='tag-link' to={`/continent/${post.continent}`}>
                                    {post.continent}
                                </Link></span>
                                <span className='tag'><Link className='tag-link' to={`/country/${post.country}`}>
                                    {post.country}
                                </Link></span> 
                            </div>
                        </div>
                        <div className='user-info'>
                            <div className='avatar'>
                                <img className='avatar-img' src={post.user.avatar || 'placeholder.jpg'} alt="avatar" />
                            </div>
                            <p className='user'>{post.user.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;

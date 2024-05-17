import React, { useState } from 'react';
import heroBanner2 from '../assets/images/hero-banner2.jpg';
import '../sass/posts.sass';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Create an array of data for your posts (you can replace this with actual data)
    const postsData = [
        { id: 1, title: 'Post 1', date: '2024-05-08', user: 'User 1', tag: 'Country A' },
        { id: 2, title: 'Post 2', date: '2024-05-09', user: 'User 2', tag: 'Country B' },
        { id: 3, title: 'Post 3', date: '2024-05-10', user: 'User 3', tag: 'Country C' },
        { id: 4, title: 'Post 4', date: '2024-05-08', user: 'User 1', tag: 'Country A' },
        { id: 5, title: 'Post 5', date: '2024-05-09', user: 'User 2', tag: 'Country B' },
        { id: 6, title: 'Post 6', date: '2024-05-10', user: 'User 3', tag: 'Country C' }
    ];

    return (
        <div className="posts-container">
            {postsData.map((post) => (
                <div
                    key={post.id}
                    className='post-container'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="image-container">
                        <div className="img-overlay">
                        <img className="post-img" src={heroBanner2} alt="post" />
                        </div>
                        {isHovered && (
                            <div className='hover-info'>
                                <Link className='hover-title' to="/article"><p>{post.title}</p></Link>   
                                <p className='hover-date'>{post.date}</p>
                            </div>
                        )}
                    </div>
                    <div className='info-container'>
                        <div className='avatar'>
                            <img className='avatar-img' src={"placeholder.jpg"} alt="avatar" />
                            {/* userData.avatar ||  */}
                        </div>
                        <p className='user'>{post.user}</p>
                        <p className='tag'>{post.tag}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;

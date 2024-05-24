import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/popularCountries.sass';

function PopularCountries() {
    const [popularArticles, setPopularArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/show-all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Data from API:", data);
                const articlesWithMostLikes = data.articles
                    .sort((a, b) => b.favorites.length - a.favorites.length)
                    .slice(0, 5);
                setPopularArticles(articlesWithMostLikes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="popular-countries">
            <h4>Explore the Favorites</h4>
            <h2 className="title-popular-countries">Most Popular Articles</h2>
            <h5>Discover the unmissable experiences each beloved destination has to offer, from iconic landmarks to hidden gems.</h5>
            <div className="countries-grid">
                {popularArticles.map((article, index) => (
                    <Link to={`/article/${article.id}`} key={index} className="country">
                        <div className="polaroid">
                            <div className="photo" style={{ backgroundImage: `url(${article.image_url})` }}>
                                {/* No Image */}
                            </div>
                            <div className="caption">
                                <h3>{article.title}</h3>
                                <span className="discover">Discover Now</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularCountries;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SubFooter from "./SubFooter";
import '../sass/continentResult.sass';

const CountryResult = () => {
    const [articles, setArticles] = useState([]);
    const [image, setImage] = useState(null);
    const { country } = useParams();
    const capitalizedCountryName = country.charAt(0).toUpperCase() + country.slice(1);
    const countryImage = capitalizedCountryName;

    // Fetch images banner
    useEffect(() => {
        if (countryImage !== "") {
            const fetchImages = async () => {
                try {
                    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${countryImage}&client_id=QamvDmYlvPU_cPDzXQb_zbyDZmBgNKc8wVZPVQi_16g`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log(countryImage)
                        if (data.results.length > 0) {
                            setImage(data.results[2].urls.full);
                        } else {
                            console.error('No images found for:', countryImage);
                        }
                    } else {
                        console.error('Error fetching images:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching images:', error);
                }
            };

            fetchImages();
        }
    }, [countryImage]);

    // Retrieve articles
    useEffect(() => {
        fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-all`)
            .then(response => response.json())
            .then(data => {
                console.log(country)
                console.log("API data:", data);
                const filteredArticles = data.articles.filter(article => article.country.toLowerCase() === country.toLowerCase());
                console.log("Filtered articles:", filteredArticles);
                setArticles(filteredArticles);
            })
            .catch(error => {
                console.error('Error fetching article data:', error);
            });
    }, [country]);


    // Truncate text function
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + "...";
    };

    return (
        <>
            <div className="continent-article-container">
                {image && (
                    <div
                        className="continent-article-banner"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`
                        }}
                    >
                        <h1>{capitalizedCountryName}</h1>
                    </div>
                )}
                <div className="filters">
                    {/* Add your filters here */}
                </div>
                <div className="continent-article-list">
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <div className="continent-article-card" key={article.id}>
                                <div className="continent-image-container">
                                    <img src={article.image_url} alt={`Article ${article.id}`} />
                                </div>
                                <div className="continent-info-container">
                                    <div className="continent-title">{article.title}</div>
                                    <div className="continent-description">{truncateText(article.content, 70)} <Link className="truncateText" to={`/article/${article.id}`}>Read More</Link> </div>
                                    <div className="tags-container">
                                        <div className='tags'>
                                            {article.categories && article.categories.length > 0 ? (
                                                article.categories.map(category => (
                                                    <span key={category.id} className='tag'>{category.name}</span>
                                                ))
                                            ) : (
                                                null
                                            )}
                                            <span className='tag'>{article.continent}</span>
                                            <span className='tag'>{capitalizedCountryName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No articles found for {capitalizedCountryName}.</p>
                    )}
                </div>
            </div>
            <SubFooter />
        </>
    );
};

export default CountryResult;

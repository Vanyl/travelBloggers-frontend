import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SubFooter from "./SubFooter";
import '../sass/continentResult.sass'

const ContinentResult = () => {

    const [articles, setArticles] = useState([]);
    const [countries, setCountries] = useState([]);
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState('');
    const { continent } = useParams();

    const continentImage = continent
    const unplashURL = `https://api.unsplash.com/search/photos?page=1&query=${continentImage}&client_id=QamvDmYlvPU_cPDzXQb_zbyDZmBgNKc8wVZPVQi_16g`

    const continentDescription = [
        {
            continent: 'Europe',
            description: 'A continent of a thousand faces, where history blends with modernity, and breathtaking landscapes meet charming towns'
        },
        {
            continent: 'Africa',
            description: 'Experience a continent of diverse landscapes, where ancient traditions intertwine with modern innovation, and vibrant cultures paint the canvas of history.'
        },
        {
            continent: 'Asia',
            description: 'An enchanting continent of diversity, where ancient traditions harmonize with cutting-edge innovation, and majestic landscapes captivate the soul.'
        },
        {
            continent: 'North America',
            description: 'A continent of vast landscapes, diverse cultures, and boundless opportunities, where every corner tells a story and adventure awaits at every turn.'
        },
        {
            continent: 'South America',
            description: 'A continent where vibrant cultures, lush rainforests, and majestic peaks converge to create an unforgettable tapestry of beauty and diversity.'
        },
        {
            continent: 'Oceania',
            description: 'A realm of boundless beauty, where azure waters embrace golden shores, and vibrant cultures intertwine with awe-inspiring natural wonders.'
        },
    ]

    useEffect(() => {
        const descriptionObj = continentDescription.find(desc => desc.continent.toLowerCase() === continent.toLowerCase());
        if (descriptionObj) {
            setDescription(descriptionObj.description);
        }
    }, [continent, continentDescription]);

    //images
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(unplashURL);
                if (response.ok) {
                    const data = await response.json();
                    if (data.results.length > 0) {
                        setImage(data.results[1].urls.full); // Use the first image
                    }
                } else {
                    console.error('Error fetching images:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [continentImage, unplashURL]);

    //retrieve article values
    useEffect(() => {
        fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-all`)
            .then(response => response.json())
            .then(data => {
                const filteredArticles = data?.articles.filter(article => article.continent === continent);
                setArticles(filteredArticles)
            })
            .catch(error => {
                console.error('Error fetching article data:', error);
            });
    }, [continent]);

    //retrieve country
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const countryList = data.map((country) => ({
                    value: country.name.common,
                    label: country.name.common,
                    continent: country.continents[0],
                }));
                setCountries(countryList);
            })
            .catch((error) => {
                console.error("There has been a problem with your fetch operation:", error);
            });
    }, []);

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
                        <h1>{continent}</h1>
                        <p>{description}</p>
                    </div>
                )}
                <div className="filters">
                    {/* Add your filters here */}
                </div>
                <div className="continent-article-list">
                    {articles.map((article) => (
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
                                        <span className='tag'>{article.country}</span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <SubFooter />
        </>
    );
};

export default ContinentResult;
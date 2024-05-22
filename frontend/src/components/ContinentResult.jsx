import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ContinentResult = () => {

    const [articles, setArticles] = useState([]);
    const [countries, setCountries] = useState([]);
    const { continent } = useParams();

    //retrieve article values
    useEffect(() => {
        fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-all`)
            .then(response => response.json())
            .then(data => {
                console.log('Article data:', data);
                console.log(data.articles)
                console.log(data.articles[4].continent)

                // setData(data);
                const filteredArticles = data?.articles.filter(article => article.continent === continent);
                console.log(filteredArticles)
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

    return (
        <div className="continent-banner">
            <div
                className="banner"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/southamerica-topbanner.jpg')`,
                }}
            >
                <h1>{continent}</h1>
                <p>
                    A continent where vibrant cultures, lush rainforests, and majestic peaks converge to create an unforgettable tapestry of beauty and diversity.
                </p>
            </div>
            <div className="filters">
                {/* Add your filters here */}
            </div>
            {/* <div className="country-list">
          {countries.map((country, index) => (
            <Link to={`/country/${country.slug}`} key={index} className="country-card">
              <div
                className="banner"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${country.bannerImage}')`,
                }}
              >
                <h2>{country.name}</h2>
              </div>
            </Link>
          ))}
        </div> */}
            <div className="feed-grid">
                {articles.map((article) => (
                    <div className="feed-item" key={article.id}>
                        <img src={article.image_url} alt={`Article ${article.id}`} />
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContinentResult;
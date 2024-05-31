import { useEffect, useState } from 'react';
import '../sass/dailyHighlight.sass';
import { getCode } from 'country-list';

function DailyHighlight() {
    const [country, setCountry] = useState({
        name: "",
        description: "",
        code: "",
        imageUrl: ""
    });

    useEffect(() => {
        // Fetch a random country from the show-all API
        fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-all`)
            .then(response => response.json())
            .then(async data => {
                const randomArticle = data?.articles[Math.floor(Math.random() * data.articles.length)];
                const countryName = randomArticle.country;
                const countryCode = getCode(countryName);
                const countryCodeLowerCase = countryCode.toLowerCase()
                setCountry(prevState => ({ ...prevState, name: countryName, code: countryCodeLowerCase }));

                // Fetch the description from the Countrywise API using the country code
                const url = `https://countrywise.p.rapidapi.com/?country=${countryCodeLowerCase}&fields=textual.culture`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '896464cae7msh599472bab2ef2a6p12e120jsn135d886e1840', // Replace with your actual API key
                        'X-RapidAPI-Host': 'countrywise.p.rapidapi.com'
                    }
                };
                try {
                    const response = await fetch(url, options);
                    //const result = await response.text();
                    const [{ textual }] = await response.json();
                    const countryDescription = textual.culture
                    setCountry(prevState => ({ ...prevState, description: countryDescription }));
                } catch (error) {
                    console.error(error);
                }
            })
            .catch(error => {
                console.error('Error fetching random country:', error);
            });
    }, []);

    useEffect(() => {
        if (country.name !== "") {
            const fetchImages = async () => {
                try {
                    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${country.name}&client_id=QamvDmYlvPU_cPDzXQb_zbyDZmBgNKc8wVZPVQi_16g`);
                    if (response.ok) {
                        const data = await response.json();
                        if (data.results.length > 0) {
                            setCountry(prevState => ({ ...prevState, imageUrl: data.results[1].urls.full }));
                        } else {
                            console.error('No images found for:', country.name);
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
    }, [country.name]);


    return (
        <div className="daily-highlight">
            <h3>Daily Discovery</h3>
            <h2>Destination Of The Day</h2>
            <h5>Experience a new destination every day and uncover the best activities, sights, and secrets that await.</h5 >
            <div className="content">
                <div className="daily-highlight-polaroid">
                    <div className="daily-highlight-photo" style={{ backgroundImage: country.imageUrl ? `url(${country.imageUrl})` : 'none' }}>
                    </div>
                </div>
                <div className="daily-highlight-info">
                    <h4>{country.name}</h4>
                    <p className='daily-highlight-description'>{country.description}</p>
                    <button className="discover-btn">Discover {country.name}</button>
                </div>
            </div>
        </div>
    );
}


export default DailyHighlight;

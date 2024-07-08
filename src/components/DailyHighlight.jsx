import { useEffect, useState } from 'react';
import '../sass/dailyHighlight.sass';
import { getCode } from 'country-list';
import { Link } from 'react-router-dom';

function DailyHighlight() {
    const [country, setCountry] = useState({
        name: "",
        description: "",
        code: "",
        imageUrl: ""
    });

    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    useEffect(() => {
        const fetchCountry = async () => {
            const today = getTodaysDate();
            const storedData = localStorage.getItem('dailyHighlight');
            let countryOfDay;

            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (parsedData.date === today) {
                    countryOfDay = parsedData.country;
                }
            }

            if (!countryOfDay) {
                const response = await fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-all`);
                const data = await response.json();
                const randomIndex = new Date().getDate() % data.articles.length;
                countryOfDay = data.articles[randomIndex];

                localStorage.setItem('dailyHighlight', JSON.stringify({ date: today, country: countryOfDay }));
            }

            const countryName = countryOfDay.country;
            //const countryCode = getCode(countryName).toLowerCase();
            const capitalizedCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1); // Capitalize the first letter
            const countryCode = getCode(capitalizedCountryName).toLowerCase();

            setCountry(prevState => ({ ...prevState, name: capitalizedCountryName, code: countryCode }));

            try {
                const response = await fetch(`https://countrywise.p.rapidapi.com/?country=${countryCode}&fields=textual.culture`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '896464cae7msh599472bab2ef2a6p12e120jsn135d886e1840', // Replace with your actual API key
                        'X-RapidAPI-Host': 'countrywise.p.rapidapi.com'
                    }
                });

                const [{ textual }] = await response.json();
                const countryDescription = textual.culture;
                setCountry(prevState => ({ ...prevState, description: countryDescription }));
            } catch (error) {
                console.error('Error fetching country description:', error);
            }
        };

        fetchCountry();
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
            <h5>Experience a new destination every day and uncover the best activities, sights, and secrets that await.</h5>
            <div className="content">
                <div className="daily-highlight-polaroid">
                    <div className="daily-highlight-photo" style={{ backgroundImage: country.imageUrl ? `url(${country.imageUrl})` : 'none' }}>
                    </div>
                </div>
                <div className="daily-highlight-info">
                    <h4>{country.name}</h4>
                    <p className='daily-highlight-description'>{country.description}</p>
                    <Link to={`/country/${country.name}`} className="country-link">
                        <button className="discover-btn">Discover {country.name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DailyHighlight;

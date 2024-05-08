import React from 'react';
import '../sass/popularCountries.sass';

function PopularCountries() {
    const countries = [
        { name: "France", imageUrl: "" },
        { name: "Italy", imageUrl: "" },
        { name: "Japan", imageUrl: "" },
        { name: "Canada", imageUrl: "" },
        { name: "Brazil", imageUrl: "" }
    ];

    return (
        <div className="popular-countries">
            <h4>Explore the Favorites</h4>
            <h2>Most Popular Countries</h2>
            <h5>Discover the unmissable experiences each beloved destination has to offer, from iconic landmarks to hidden gems.</h5>
            <div className="countries-grid">
                {countries.map(country => (
                    <div className="country" key={country.name}>
                        <div className="polaroid">
                            <div className="photo" style={{ backgroundColor: country.imageUrl ? `url(${country.imageUrl})` : '#1E2146' }}>
                                {!country.imageUrl}
                            </div>
                            <div className="caption">
                                {country.name}
                                <a href="#" className="discover">Discover Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCountries;

import React from 'react';
import '../sass/dailyHighlight.sass';

function DailyHighlight() {
    const country = {
        name: "Iceland",
        description: "Explore Iceland's dramatic landscapes with volcanoes, geysers, hot springs, and lava fields. Witness the majestic Northern Lights and take part in unique adventures in one of the world's most picturesque destinations.",
        imageUrl: ""
    };

    return (
        <div className="daily-highlight">
            <h3>Daily Discovery</h3>
            <h2>Destination Of The Day</h2>
            <h5>Experience a new destination every day and uncover the best activities, sights, and secrets that await.</h5 >
            <div className="content">
                <div className="polaroid">
                    <div className="photo" style={{ backgroundColor: country.imageUrl ? `url(${country.imageUrl})` : '#1E2146' }}>
                        {/* Future placement for the image */}
                    </div>
                </div>
                <div className="info">
                    <h4>{country.name}</h4>
                    <p>{country.description}</p>
                    <button className="discover-btn">Discover {country.name}</button>
                </div>
            </div>
        </div>
    );
}

export default DailyHighlight;

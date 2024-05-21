import React from 'react';
import { Link } from 'react-router-dom'; 
import '../sass/continentEurope.sass'

// Créer une liste des pays européens a recup
const europeanCountries = [
    {
        name: 'Algeria',
        bannerImage: '/src/assets/images/algeria-topbanner.jpg', 
        slug: 'Algeria' 
      },
      
      
      {
        name: 'Kenya',
        bannerImage: '/src/assets/images/kenya-topbanner.jpg', 
        slug: 'Kenya' 
      },
      
      {
        name: 'Morocco',
        bannerImage: '/src/assets/images/morocco-topbanner.jpg', 
        slug: 'Morocco' 
      },
      
      {
        name: 'South Africa',
        bannerImage: '/src/assets/images/southafrica-topbanner.jpg', 
        slug: 'SouthAfrica' 
      },
      
      {
        name: 'Tunisia',
        bannerImage: '/src/assets/images/tunisia-topbanner.jpg', 
        slug: 'Tunisia' 
      },
      
  

  






  // Ajouter d'autres pays européens ici
];

const ContinentAfrica = () => {
  return (
    <div className="continent-europe">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/africa-topbanner.jpg')` }}>
        <h1>Africa</h1>
        <p>Experience a continent of diverse landscapes, where ancient traditions intertwine with modern innovation, and vibrant cultures paint the canvas of history.</p>
      </div>
      <div className="filters">
        {/* Maybe ? */}
      </div>

      <div className="country-list">
        {europeanCountries.map((country, index) => (
          <Link to={`/country/${country.slug}`} key={index} className="country-card">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${country.bannerImage}')` }}>
              <h2>{country.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinentAfrica;

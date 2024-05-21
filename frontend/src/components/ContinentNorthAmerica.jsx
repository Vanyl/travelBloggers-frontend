import React from 'react';
import { Link } from 'react-router-dom'; 
import '../sass/continentEurope.sass'

// Créer une liste des pays européens a recup
const europeanCountries = [
    
        {
          name: 'Canada',
          bannerImage: '/src/assets/images/canada-topbanner.jpg', 
          slug: 'Canada' 
        },
        
        {
          name: 'Mexico',
          bannerImage: '/src/assets/images/mexico-topbanner.jpg', 
          slug: 'Mexico' 
        },
      
        {
          name: 'United States',
          bannerImage: '/src/assets/images/usa-topbanner.jpg', 
          slug: 'usa' 
        }


  // Ajouter d'autres pays européens ici
];

const ContinentNorthAmerica = () => {
  return (
    <div className="continent-europe">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/northamerica-topbanner.jpg')` }}>
        <h1>North America</h1>
        <p>A continent of vast landscapes, diverse cultures, and boundless opportunities, where every corner tells a story and adventure awaits at every turn.</p>
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

export default ContinentNorthAmerica;

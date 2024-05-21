import React from 'react';
import { Link } from 'react-router-dom'; 
import '../sass/continentEurope.sass'

// Créer une liste des pays européens a recup
const europeanCountries = [
  {
    name: 'Australia',
    bannerImage: '/src/assets/images/australia-topbanner.jpg',
    slug: 'Australia'
  },
  {
    name: 'New Zealand',
    bannerImage: '/src/assets/images/newzealand-topbanner.jpg',
    slug: 'NewZealand'
  }
  
  // Ajouter d'autres pays européens ici
];

const ContinentOceania = () => {
  return (
    <div className="continent-europe">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/oceania-topbanner.jpg')` }}>
        <h1>Oceania</h1>
        <p>A realm of boundless beauty, where azure waters embrace golden shores, and vibrant cultures intertwine with awe-inspiring natural wonders.</p>
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

export default ContinentOceania;

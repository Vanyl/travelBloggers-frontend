import React from 'react';
import { Link } from 'react-router-dom'; 
import '../sass/continentEurope.sass'

// Créer une liste des pays européens a recup
const europeanCountries = [
  {
    name: 'Argentina',
    bannerImage: '/src/assets/images/argentina-topbanner.jpg', 
    slug: 'Argentina' 
  },
  {
    name: 'Brazil',
    bannerImage: '/src/assets/images/brazil-topbanner.jpg', 
    slug: 'Brazil' 
  },
  {
    name: 'Peru',
    bannerImage: '/src/assets/images/peru-topbanner.jpg', 
    slug: 'Peru' 
  }
  

  // Ajouter d'autres pays européens ici
];

const ContinentSouthAmerica = () => {
  return (
    <div className="continent-europe">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/southamerica-topbanner.jpg')` }}>
        <h1>South America</h1>
        <p>A continent where vibrant cultures, lush rainforests, and majestic peaks converge to create an unforgettable tapestry of beauty and diversity.</p>
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

export default ContinentSouthAmerica;

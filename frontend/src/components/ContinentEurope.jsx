import React from 'react';
import { Link } from 'react-router-dom'; 

// Créer une liste des pays européens a recup
const europeanCountries = [
  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'spain' 
  },

  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'spain' 
  },

  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'spain' 
  },

  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'spain' 
  },

  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'spain' // ajuster logique de routage
  },

  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'spain' // ajuster logique de routage
  },
  // Ajouter d'autres pays européens ici
];

const ContinentEurope = () => {
  return (
    <div className="continent-europe">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/europe-topbanner.jpg')` }}>
        <h1>Europe</h1>
        <p>A continent of a thousand faces, where history blends with modernity, and breathtaking landscapes meet charming towns</p>
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

export default ContinentEurope;

import React from 'react';
import { Link } from 'react-router-dom'; 
import '../sass/continentEurope.sass'

// Créer une liste des pays européens a recup
const europeanCountries = [
  {
    name: 'Belgium',
    bannerImage: '/src/assets/images/belgium-topbanner.jpg', 
    slug: 'Belgium' 
  },
  
  {
    name: 'Croatia',
    bannerImage: '/src/assets/images/croatia-topbanner.jpg', 
    slug: 'Croatia' // ajuster logique de routage
  },
  
  {
    name: 'France',
    bannerImage: '/src/assets/images/france-topbanner.jpg', 
    slug: 'France' // ajuster logique de routage
  },
  
  {
    name: 'Germany',
    bannerImage: '/src/assets/images/germany-topbanner.jpg', 
    slug: 'Germany' // ajuster logique de routage
  },
  
  {
    name: 'Greece',
    bannerImage: '/src/assets/images/greece-topbanner.jpg', 
    slug: 'Greece' // ajuster logique de routage
  },
  
  {
    name: 'Italy',
    bannerImage: '/src/assets/images/italy-topbanner.jpg', 
    slug: 'Italy' 
  },
  
  {
    name: 'Netherlands',
    bannerImage: '/src/assets/images/netherlands-topbanner.jpg', 
    slug: 'Netherlands' // ajuster logique de routage
  },
  
  {
    name: 'Spain',
    bannerImage: '/src/assets/images/spain-topbanner.jpg', 
    slug: 'Spain' 
  },
  
  {
    name: 'Switzerland',
    bannerImage: '/src/assets/images/switzerland-topbanner.jpg', 
    slug: 'Switzerland' // ajuster logique de routage
  }
  






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

import React from 'react';
import { Link } from 'react-router-dom'; 
import '../sass/continentEurope.sass'

// Créer une liste des pays européens a recup
const europeanCountries = [
    {
        name: 'China',
        bannerImage: '/src/assets/images/china-topbanner.jpg',
        slug: 'China'
      },
      {
        name: 'India',
        bannerImage: '/src/assets/images/india-topbanner.jpg',
        slug: 'India'
      },
      {
        name: 'Japan',
        bannerImage: '/src/assets/images/japan-topbanner.jpg',
        slug: 'Japan'
      },
      {
        name: 'South Korea',
        bannerImage: '/src/assets/images/southkorea-topbanner.jpg',
        slug: 'SouthKorea'
      },
      {
        name: 'United Arab Emirates',
        bannerImage: '/src/assets/images/uae-topbanner.jpg',
        slug: 'UAE'
      },
      {
        name: 'Vietnam',
        bannerImage: '/src/assets/images/vietnam-topbanner.jpg',
        slug: 'Vietnam'
      }
  






  // Ajouter d'autres pays européens ici
];

const ContinentAsia = () => {
  return (
    <div className="continent-europe">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/asia-topbanner.jpg')` }}>
        <h1>Asia</h1>
        <p>An enchanting continent of diversity, where ancient traditions harmonize with cutting-edge innovation, and majestic landscapes captivate the soul.</p>
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

export default ContinentAsia;

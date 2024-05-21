import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/continents.sass'
import EuropeSVG from '../../public/svg/europe.svg?react'
import AfricaSVG from '../../public/svg/africa.svg?react'
import AsiaSVG from '../../public/svg/asia.svg?react'
import OceaniaSVG from '../../public/svg/oceania.svg?react'
import NorthAmericaSVG from '../../public/svg/north_america.svg?react'
import SouthAmericaSVG from '../../public/svg/south-america.svg?react'

const Continents = () => {
    const handleClick = (link) => {
      console.log(`Navigating to ${link}`);
    };
  
    const continents = [
      {
        svg: <EuropeSVG />,
        name: 'Europe',
        link: '/europe',
      },
      {
        svg: <AfricaSVG />,
        name: 'Africa',
        link: '/africa',
      },
      {
        svg: <AsiaSVG />,
        name: 'Asia',
        link: '/asia',
      },
      {
        svg: <OceaniaSVG />,
        name: 'Oceania',
        link: '/oceania',
      },
      {
        svg: <SouthAmericaSVG />,
        name: 'South America',
        link: '/southamerica',
      },
      {
        svg: <NorthAmericaSVG />,
        name: 'North America',
        link: '/northamerica',
      },
    ];
  
    return (
      <div className='maps-container'>
        {continents.map((continent, index) => (
          <div key={index} className="continent-container">
            <Link to={continent.link} className="continent-link" onClick={() => handleClick(continent.link)}>
              <div>{continent.svg}</div>
              <p>{continent.name}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  };
export default Continents
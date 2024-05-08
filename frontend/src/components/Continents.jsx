import '../sass/continents.sass'
import EuropeSVG from '../../public/svg/europe.svg?react'
import AfricaSVG from '../../public/svg/africa.svg?react'
import AsiaSVG from '../../public/svg/asia.svg?react'
import OceaniaSVG from '../../public/svg/oceania.svg?react'
import NorthAmericaSVG from '../../public/svg/north_america.svg?react'
import SouthAmericaSVG from '../../public/svg/south-america.svg?react'

const Continents = () => {
    const continents = [
        {
        svg: <EuropeSVG />,
        name: 'Europe'
        }, 
        {
        svg: <AfricaSVG />,
        name: 'Africa'
        },
        {
        svg: <AsiaSVG />,
        name: 'Asia'
        },
        {
        svg: <OceaniaSVG />,
        name: 'Oceania'
        },
        {
        svg: <SouthAmericaSVG/>,
        name: 'South America'
        },
        {
        svg: <NorthAmericaSVG/>,
        name: 'North America'
        }
    ];



    return (
        <div className='maps-container'>
            {continents.map((continent, index) => (
                <div key={index} className="continent-container">
                    <div>{continent.svg}</div>
                    <p>{continent.name}</p>
                </div>
            ))}
        </div>
    )
}
export default Continents
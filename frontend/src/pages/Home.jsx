import Hero from '../components/Hero'
import Continents from '../components/Continents';
import Posts from '../components/Posts';
import PopularCountries from '../components/PopularCountries'
import Subfooter from '../components/SubFooter'

const Home = () => {
    return (
        <>
            <Hero/>
            <Continents/>
            <Posts/>
            <PopularCountries/>
            <Subfooter />
        </>
    )
  };
  
  export default Home;
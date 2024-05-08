import Hero from '../components/Hero'
import PopularCountries from '../components/PopularCountries'
import DailyHighlight from '../components/DailyHighlight'
import SubFooter from '../components/SubFooter'
import Footer from '../components/Footer'
import Continents from '../components/Continents';

const Home = () => {
    return (
        <>
            <Hero/>
            <Continents/>  
            <DailyHighlight/>
            <PopularCountries/>
            <SubFooter/>
        </>

    )
  };
  
  export default Home;
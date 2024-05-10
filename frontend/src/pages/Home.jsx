import Hero from '../components/Hero'
import Continents from '../components/Continents';
import Posts from '../components/Posts';
import DailyHighlight from '../components/DailyHighlight'
import PopularCountries from '../components/PopularCountries'
import SubFooter from '../components/SubFooter'

const Home = () => {
    return (
        <>
            <Hero/>
            <Continents/>
            <Posts/>
            <DailyHighlight/>
            <PopularCountries/>
            <SubFooter/>
        </>

    )
  };
  
  export default Home;
import Banner from "../Header/Banner/Banner";
import Search from "../Header/Search/Search";
import Galary from "./Galary/Galary";
import Colleges from "./LoadColleges/Colleges";
import Research from "./Research/Research";
import Reviews from "./Reviews/Reviews";

const Home = () => {

    return (
        <div>
            <Search></Search>
            <Banner></Banner>
            <Colleges></Colleges>
            <Galary></Galary>
            <Research></Research>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
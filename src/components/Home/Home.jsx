import Banner from "../Header/Banner/Banner";
import Search from "../Header/Search/Search";
import Colleges from "./LoadColleges/Colleges";

const Home = () => {

    return (
        <div>
            <Search></Search>
            <Banner></Banner>
            <Colleges></Colleges>
        </div>
    );
};

export default Home;
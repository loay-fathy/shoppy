import "./Home.css";
import Slider from "../../components/slider/Slider"
import Services from "../../components/services/Services";
import Trending from "../../components/trending/Trending";
import Banner from "../../components/banner-3/Banner-3";
import Deal from "../../components/deal/Deal";
import Subscribe from "../../components/common/subscribe/Subscribe";

const Home = () => {
    return <>
        <Slider />
        <Services />
        <Banner />
        <Trending />
        <Deal />
        <Subscribe />
    </>
};
export default Home;

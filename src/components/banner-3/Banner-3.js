import "./Banner-3.css";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import offer from "../../assets/offer.png";
import projector from "../../assets/projector.png";
import { Link } from "react-router-dom";
import Button from "../common/button/Button";

const Banner = () => {
  return (
    <div className="banners-container">
      <div className="banner-cards-container">
        <div className="banner-card position-relative">
          <div className="banner-info">
            <h3>Wireless earbuds</h3>
            <Link className="banner-link" to={"./shop"}>
              Shop now
            </Link>
          </div>
          <img src={banner1} alt="" className="banner-3-img" />
        </div>
        <div className="banner-card position-relative">
          <div className="banner-info">
            <h3>Wireless earbuds</h3>
            <Link className="banner-link" to={"./shop"}>
              Shop now
            </Link>
          </div>
          <img src={banner2} alt="" className="banner-3-img" />
        </div>
        <div className="banner-card position-relative">
          <div className="banner-info">
            <h3>Wireless earbuds</h3>
            <Link className="banner-link" to={"./shop"}>
              Shop now
            </Link>
          </div>
          <img src={banner3} alt="" className="banner-3-img" />
        </div>
      </div>

      <div className="full-banner">
        <div>
          <img src={offer} alt="" />
        </div>
        <div>
          <img className="projector" src={projector} alt="" />
        </div>
        <div className="offer-text">
          <h1 className="mb-4">Best video quality ever</h1>
          <Button text="shop now" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

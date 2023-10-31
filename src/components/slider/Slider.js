import "./Slider.css";
import slide1 from "../../assets/slider-1.png";
import slide1mobile from "../../assets/mobile-slider-1.jpg";
import slide2 from "../../assets/slider-2.png";
import slide2mobile from "../../assets/mobile-slider-2.jpg";
import slide3 from "../../assets/slider-3.png";
import slide3mobile from "../../assets/mobile-slider-3.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);

  const reportWindowSize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.onresize = reportWindowSize;
  }, []);

  return (
    <div className="slider">
      <figure>
        <div className="slide-img-parent">
          {!isMobile && (
            <img className="slide-img" src={slide1} alt="slider img" />
          )}
          {isMobile && (
            <img className="slide-img" src={slide1mobile} alt="slider img" />
          )}
          <div className="slider-text-info">
            <p>Get 35% off new tablet</p>
            <h1>Best tablet smart pad</h1>
            <Link to={"/collection"}>
              <button className="slider-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="slide-img-parent">
          {!isMobile && (
            <img className="slide-img" src={slide2} alt="slider img" />
          )}
          {isMobile && (
            <img className="slide-img" src={slide2mobile} alt="slider img" />
          )}
          <div className="slider-text-info">
            <p>Get 35% off new tablet</p>
            <h1>Best tablet smart pad</h1>
            <Link to={"/collection"}>
              <button className="slider-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="slide-img-parent">
          {!isMobile && (
            <img className="slide-img" src={slide3} alt="slider img" />
          )}
          {isMobile && (
            <img className="slide-img" src={slide3mobile} alt="slider img" />
          )}
          <div className="slider-text-info">
            <p>Get 35% off new tablet</p>
            <h1>Best tablet smart pad</h1>
            <Link to={"/collection"}>
              <button className="slider-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Slider;

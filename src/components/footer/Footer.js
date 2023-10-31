import "./Footer.css";
import logo from "../../assets/logo-1-0.webp";
import { AiOutlineInstagram } from "react-icons/ai";
import insta1 from "../../assets/insta-1_512x512_crop_center.jpg";
import insta2 from "../../assets/insta-2_512x512_crop_center.jpg";
import insta3 from "../../assets/insta-3_512x512_crop_center.jpg";
import insta4 from "../../assets/insta-4_512x512_crop_center.jpg";
import insta5 from "../../assets/insta-5_512x512_crop_center.jpg";
import insta6 from "../../assets/insta-6_512x512_crop_center.jpg";
import insta7 from "../../assets/insta-7_512x512_crop_center.jpg";
import insta8 from "../../assets/insta-8_512x512_crop_center.jpg";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div className="container my-5">
        <div className="footer">
          <div>
            <img src={logo} alt="asd" className="footer-logo" />
            <div className="gallery">
              <div className="insta-img">
                <img src={insta1} alt="1" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta2} alt="2" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta3} alt="3" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta4} alt="4" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta5} alt="5" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta6} alt="6" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta7} alt="7" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
              <div className="insta-img">
                <img src={insta8} alt="8" className="insta-img" />
                <div className="insta-icon">
                  <AiOutlineInstagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="pl-6">
            <h5>Contact us</h5>
            <p className="text-secondary mt-3 mb-2">+201065579568</p>
            <p className="text-secondary mb-4">loayfathy404@gmail.com</p>
            <h5>Address</h5>
            <p className="text-secondary mt-3 mb-2">+7882, Reliance GIDC</p>
            <p className="text-secondary">mokattam, cairo</p>
          </div>
          <div>
            <h5>My Account</h5>
            <ul className="text-secondary">
              <li className="pointer mb-2 mt-3">About Us</li>
              <li className="pointer mb-2">Contact Us</li>
              <li className="pointer mb-2">News</li>
              <li className="pointer mb-2">Faq's</li>
              <Link to={"cart"}>
                <li className="pointer mb-2 text-secondary">My Cart</li>
              </Link>
              <li className="pointer">My Wishlist</li>
            </ul>
          </div>
          <div className="pl-6">
            <h5>Latest shop</h5>
            <ul className="text-secondary">
              <li className="pointer mb-2 mt-3">Mobile</li>
              <li className="pointer mb-2">Smart TV</li>
              <li className="pointer mb-2">Laptop</li>
              <li className="pointer mb-2">Radio</li>
              <li className="pointer mb-2">Computer</li>
              <li className="pointer">USB drives</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top">
        <div className="container d-flex justify-content-between text-secondary py-3">
          <p>
            Privacy policy <span className="pl-5">Terms & condition</span>
          </p>
          <p>Copyright 2023 by spacingtechTM</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

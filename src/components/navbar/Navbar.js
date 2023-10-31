import "./Navbar.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo-1-0.webp";
import shopBanner1 from "../../assets/shop-banner-1.webp";
import shopBanner2 from "../../assets/shop-banner-2.webp";
import collectionbanner1 from "../../assets/collectionbanner-1.avif";
import collectionbanner2 from "../../assets/collectionbanner-2.avif";
import collectionbanner3 from "../../assets/collectionbanner-3.avif";
import collectionbanner4 from "../../assets/collectionbanner-4.avif";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import MiniNavbar from "./Mini-navbar";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="./" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="links">
          <div className="link">
            <NavLink to="/collection" className="link-text">
              Shop
              <RiArrowDropDownLine className="h3" />
            </NavLink>
            <div className="dropdown">
              <div className="section">
                <ul className="nav-list">
                  <li className="nav-list-li">Computer</li>
                  <li className="nav-list-li">Laptop</li>
                  <li className="nav-list-li">Mobile</li>
                  <li className="nav-list-li">Headphone</li>
                  <li className="nav-list-li">Camera</li>
                  <li className="nav-list-li">Mouse</li>
                  <li className="nav-list-li">Keyboard</li>
                  <li className="nav-list-li">Storage</li>
                </ul>
              </div>
              <div className="section">
                <ul className="nav-list w-100">
                  <li className="nav-list-li section-1-title">Shop Page</li>
                  <li className="nav-list-li section-1-items">Laptop</li>
                  <li className="nav-list-li section-1-items">Mobile</li>
                  <li className="nav-list-li section-1-items">Headphone</li>
                  <li className="nav-list-li section-1-items">Camera</li>
                  <li className="nav-list-li section-1-items">Mouse</li>
                  <li className="nav-list-li section-1-items">Keyboard</li>
                  <li className="nav-list-li section-1-items">Storage</li>
                </ul>
              </div>
              <div className="section">
                <img className="shop-banner" src={shopBanner1} alt="" />
              </div>
              <div className="section">
                <img className="shop-banner" src={shopBanner2} alt="" />
              </div>
            </div>
          </div>
          <div className="link">
            <NavLink to="collection" className="link-text">
              Collection
              <RiArrowDropDownLine className="h3" />
            </NavLink>
            <div className="dropdown">
              <div className="position">
                <div className="section-2">
                  <div className="rounded">
                    <img
                      className="collection-banner"
                      src={collectionbanner1}
                      alt=""
                    />
                  </div>
                  <p>Speaker</p>
                </div>
                <div className="section-2">
                  <div className="rounded">
                    <img
                      className="collection-banner"
                      src={collectionbanner2}
                      alt=""
                    />
                  </div>
                  <p>Camera</p>
                </div>
                <div className="section-2">
                  <div className="rounded">
                    <img
                      className="collection-banner"
                      src={collectionbanner3}
                      alt=""
                    />
                  </div>
                  <p>Taplet</p>
                </div>
                <div className="section-2">
                  <div className="rounded">
                    <img
                      className="collection-banner"
                      src={collectionbanner4}
                      alt=""
                    />
                  </div>
                  <p>Phone</p>
                </div>
              </div>
            </div>
          </div>
          <div className="link">
            <NavLink to={`blog`} className="link-text">
              Blog
            </NavLink>
          </div>
          <div className="link">
            <NavLink to={`contact`} className="link-text">
              Contact Us
            </NavLink>
          </div>
          <div className="link">
            <NavLink to={`about`} className="link-text">
              About
            </NavLink>
          </div>
        </div>
        <div className="right-icons">
          <FaSearch className="icon" />
          <Link to={`/cart`}>
            <BsHandbag className="icon" />
          </Link>
        </div>

        <MiniNavbar />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

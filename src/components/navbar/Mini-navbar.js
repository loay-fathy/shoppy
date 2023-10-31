import "./Mini-navbar.css";
import { FaSearch, FaAlignJustify } from "react-icons/fa";
import { LuAlignJustify } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import collectionbanner1 from "../../assets/collectionbanner-1.avif";
import collectionbanner2 from "../../assets/collectionbanner-2.avif";
import collectionbanner3 from "../../assets/collectionbanner-3.avif";
import collectionbanner4 from "../../assets/collectionbanner-4.avif";

const MiniNavbar = () => {
  const dropDownHandler = (e) => {
    let dropDownButton = e.target;
    let dropDownContainer = e.target.parentElement;
    dropDownButton.classList.toggle("button-active");
    dropDownContainer.classList.toggle("active");
  };

  const closeNavHandler = () => {
    document.getElementById("responsive-nav").style.display = "none";
    document.querySelector(".layer").style.display = "none";
  };

  const openNavHandler = () => {
    document.getElementById("responsive-nav").style.display = "block";
    document.querySelector(".layer").style.display = "block";
  };

  const hideDropDownsHandler = () => {
    let dropDowns = document.getElementById("dropdowns");
    dropDowns.classList.toggle("d-none");
    document.querySelector(".bg-gray").classList.toggle("bg-white");
  };

  return (
    <>
      <div className="parent">
        <div id="responsive-nav" className="responsive-nav">
          <AiOutlineClose onClick={closeNavHandler} className="icon close" />
          <div
            onClick={hideDropDownsHandler}
            className="mini-dropdowns bg-gray"
          >
            <div>
              <LuAlignJustify className="icon text-dark mx-2" />
              <p className="m-0 d-inline">Menu</p>
            </div>
            <IoMdArrowDropdown className="dropdown-icon" />
          </div>
          <ul id="dropdowns">
            <li className="mini-dropdowns">
              <p className="my-0 mx-2">Home</p>
            </li>
            <li className="drop-down-container">
              <div
                className="mini-dropdowns drop-down-button"
                onClick={dropDownHandler}
              >
                <p className="my-0 mx-2">Shop</p>
                <IoMdArrowDropdown className="dropdown-icon" />
              </div>
              <ul id="dropdowns" className="overflow-hidden">
                <li className="nav-list-li mini-li">Computer</li>
                <li className="nav-list-li mini-li">Laptop</li>
                <li className="nav-list-li mini-li">Mobile</li>
                <li className="nav-list-li mini-li">Headphone</li>
                <li className="nav-list-li mini-li">Camera</li>
                <li className="nav-list-li mini-li">Mouse</li>
                <li className="nav-list-li mini-li">Keyboard</li>
                <li className="nav-list-li mini-li">Storage</li>
              </ul>
            </li>
            <li className="drop-down-container">
              <div
                className="mini-dropdowns drop-down-button"
                onClick={dropDownHandler}
              >
                <p className="my-0 mx-2">Collection</p>
                <IoMdArrowDropdown className="dropdown-icon" />
              </div>
              <ul className="banners">
                <li className="banner mt-3">
                  <img
                    src={collectionbanner1}
                    className="banner-img"
                    alt="collection banner 1"
                  />
                  <p>Speaker</p>
                </li>
                <li className="banner">
                  <img
                    src={collectionbanner2}
                    className="banner-img"
                    alt="collection banner 1"
                  />
                  <p>Speaker</p>
                </li>
                <li className="banner">
                  <img
                    src={collectionbanner3}
                    className="banner-img"
                    alt="collection banner 1"
                  />
                  <p>Speaker</p>
                </li>
                <li className="banner">
                  <img
                    src={collectionbanner4}
                    className="banner-img"
                    alt="collection banner 1"
                  />
                  <p>Speaker</p>
                </li>
              </ul>
            </li>
            <li className="mini-dropdowns">
              <p className="my-0 mx-2">Contact Us</p>
            </li>
            <li className="mini-dropdowns">
              <p className="my-0 mx-2">About</p>
            </li>
          </ul>
        </div>
        <div>
          <FaAlignJustify onClick={openNavHandler} className="icon" />
          <FaSearch className="icon" />
          <BsHandbag className="icon" />
        </div>
      </div>
      <div className="layer" onClick={closeNavHandler}></div>
    </>
  );
};

export default MiniNavbar;

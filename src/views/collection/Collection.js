import ShopHeader from "../../components/common/shopHeader/ShopHeader";
import imgHeader from "../../assets/big-image-5.jpg";
import "./Collection.css";
import { BsGrid3X3Gap } from "react-icons/bs";
import {
  AiOutlineFilter,
  AiOutlineUnorderedList,
  AiOutlineClose,
} from "react-icons/ai";
import Products from "../../components/allProducts/Products";
import Location from "../../components/common/location/location";
const Collection = () => {
  const filter = document.getElementsByClassName("left-bar");
  const filterLayer = document.getElementsByClassName("filter-layer");

  const closeFilterHandler = () => {
    filter[0].style.left = "-400px";
    filter[0].style.opacity = "0";
    filterLayer[0].style.opacity = "0";
    filterLayer[0].style.visibility = "hidden";
  };

  const openFilterHandler = () => {
    filter[0].style.left = "0";
    filter[0].style.opacity = "1";
    filterLayer[0].style.opacity = "1";
    filterLayer[0].style.visibility = "visible";
  };

  let reset = (e) => {
    let availability = document.getElementsByName(e.target.name);
    for (let i = 0; i < availability.length; i++) {
      availability[i].checked = false;
    }
  };

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "#680",
    "#000",
    "#CCC",
    "#317",
    "#424",
    "#ggg",
    "#533",
    "#066",
  ];

  const size = [
    "16gb",
    "32gb",
    "64gb",
    "128gb",
    "500gb",
    "1tb",
    "2tb",
    "3tb",
    "4tb",
  ];

  return (
    <>
      <Location where="Products" />
      <div className="container mt-5">
        <div className="collection">
          <div className="left-bar">
            <AiOutlineClose
              className="float-end pointer filter-tools"
              onClick={closeFilterHandler}
            />
            <ShopHeader header="Availability" className="shop-header mb-4" />
            <div className="pattern my-3">
              <div className="text-secondary">
                <p>0 selected</p>
              </div>
              <button className="resetBtn" onClick={reset} name="availability">
                Reset
              </button>
            </div>
            <div className="pattern">
              <div className="text-secondary">
                <input name="availability" type="checkbox" id="inStock" />
                <label for="inStock" className="ms-1">
                  In stock
                </label>
              </div>
              <p className="text-muted">(24)</p>
            </div>
            <div className="pattern mt-2 pb-4 border-bottom">
              <div className="text-secondary">
                <input name="availability" type="checkbox" id="outOfStock" />
                <label for="outOfStock" className="ms-1">
                  Out of stock
                </label>
              </div>
              <p className="text-muted">(1)</p>
            </div>
            <ShopHeader header="Brand" className="shop-header my-4" />
            <div className="pattern my-3">
              <div className="text-secondary">
                <p>0 selected</p>
              </div>
              <button className="resetBtn" onClick={reset} name="brand">
                Reset
              </button>
            </div>
            <div className="pattern mt-2 pb-4 border-bottom">
              <div className="text-secondary">
                <input name="brand" type="checkbox" id="arac" />
                <label for="arac" className="ms-1">
                  Arac
                </label>
              </div>
              <p className="text-muted">(24)</p>
            </div>
            <ShopHeader header="Color" className="shop-header my-4" />
            <div className="pattern my-3">
              <div className="text-secondary">
                <p>0 selected</p>
              </div>
              <button className="resetBtn" onClick={reset} name="color">
                Reset
              </button>
            </div>
            <div className="colors">
              {colors.map((color) => {
                return (
                  <span
                    className="color"
                    style={{ backgroundColor: color }}
                  ></span>
                );
              })}
            </div>
            <ShopHeader header="Size" className="shop-header my-4" />{" "}
            <div className="pattern my-3">
              <div className="text-secondary">
                <p>0 selected</p>
              </div>
              <button className="resetBtn" onClick={reset} name="size">
                Reset
              </button>
            </div>
            {size.map((size) => {
              return (
                <div className="pattern mt-2 mb-2">
                  <div className="text-secondary">
                    <input name="size" type="checkbox" />
                    <label for="arac" className="ms-1">
                      {size}
                    </label>
                  </div>
                  <p className="text-muted">(1)</p>
                </div>
              );
            })}
          </div>
          <div>
            <ShopHeader header="Products (24)" className="shop-header mb-4" />
            <img src={imgHeader} alt="asd" className="imgHeader" />
            <div className="filters text-secondary">
              <div className="black-hover filter-tools" onClick={openFilterHandler}>
                <AiOutlineFilter className="h6 mb-1 me-1" />
                <p className="d-inline">Filter</p>
              </div>
              <div>
                <BsGrid3X3Gap className="black-hover me-2" />
                <AiOutlineUnorderedList className="black-hover" />
              </div>
            </div>
            <Products num="24" className="products-container" />
          </div>
        </div>
      </div>
      <div className="filter-layer" onClick={closeFilterHandler}></div>
    </>
  );
};

export default Collection;

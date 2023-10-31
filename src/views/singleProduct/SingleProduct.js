import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { useCallback, useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import {
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoVisa,
  BiLogoMastercard,
} from "react-icons/bi";
import { GrAmex } from "react-icons/gr";
import { BsPaypal } from "react-icons/bs";

const SingleProduct = () => {
  const { prodId } = useParams();
  const [data, setData] = useState();

  const fetchDataHandler = useCallback(async () => {
    const response = await fetch(
      `https://api.noroff.dev/api/v1/online-shop/${prodId}`
    );
    setData(await response.json());
  }, [prodId]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    data && (
      <div className="container d-flex">
        <img src={data.imageUrl} alt="product img" className="product-img" />
        <div className="ms-5">
          <h3 className="mb-5 mt-4">{data.title}</h3>
          <h5 className="product-price">
            ${data.discountedPrice}
            <span className="discount-price">${data.price}</span>
          </h5>
          <span className="discount-percentage">
            -
            {Math.round(
              ((data.price - data.discountedPrice) / data.price) * 100
            )}
            %
          </span>
          <p className="text-success mt-3">
            Hurry up! only{" "}
            <span className="stock bg-success text-white">66</span> products
            left in stock!
          </p>
          <div className="mt-3">
            <h6 className="d-inline">Availability: </h6>
            <span className="text-success">
              In Stock <AiOutlineCheck />
            </span>
          </div>

          <h6 className="my-3">Color: </h6>
          <span className="color-ball bg-success"></span>
          <span className="color-ball bg-danger mx-2 pointer"></span>
          <span className="color-ball bg-dark"></span>
          <div className="d-flex mt-5">
            <h6>Quantity: </h6>
            <input type="number" min={1} max={66} className="quantity" />
          </div>
          <div className="my-4">
            <Link to={"/cart"}>
              <button className="add-to-cart product-btn">ADD TO CART</button>
              <button className="buy-now product-btn">BUY NOW</button>
            </Link>
          </div>
          <h6 className="mb-3">
            SKU: <p className="text-muted d-inline">abccd-18</p>
          </h6>
          <h6 className="d-inline">Share: </h6>
          <BiLogoFacebook
            style={{ color: "#4267B2" }}
            className="share-icons"
          />
          <BiLogoLinkedin
            style={{ color: "#0077b5" }}
            className="share-icons"
          />
          <BiLogoTwitter style={{ color: "#26a7de" }} className="share-icons" />

          <div className="mt-4">
            <BiLogoVisa className="visa" />
            <BiLogoMastercard className="visa" />
            <GrAmex className="visa" />
            <BsPaypal className="visa" />
          </div>
        </div>
      </div>
    )
  );
};

export default SingleProduct;

import "./Product.css";
import { AiOutlineStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = (props) => {
  const sale = props.sale;

  return (
    <Link to={`/product/${props.id}`} className="product-container">
      {sale && <span className="sale">Sale</span>}
      <div className="product-img-container mx-auto">
        <img src={props.image} alt="product" className="product-image" />
      </div>
      <div className="product-info">
        <p className="products-title">{props.title}</p>
        <p className="products-price">${props.price}</p>
        <div>
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
        </div>
      </div>
      <div className="product-action">
        <BsBag className="product-action-icon" />
        <AiOutlineEye className="product-action-icon" />
        <AiOutlineHeart className="product-action-icon" />
      </div>
    </Link>
  );
};

export default Product;

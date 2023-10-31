import "./ShopHeader.css";

const ShopHeader = (props) => {
  return <h6 className={props.className}>{props.header}</h6>;
};

export default ShopHeader;

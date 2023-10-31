import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <Link to={"collection"}>
      <button className={`shop-button ${props.className}`}>{props.text}</button>
    </Link>
  );
};

export default Button;

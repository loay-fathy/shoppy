import "./Services.css";
import { BsTruck } from "react-icons/bs";
import { AiOutlineSafety, AiOutlineGift } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";

const Services = () => {
  return (
    <div className="container border mt-100">
      <ul className="row">
        <li className="col-md-3 col-sm-6 text-center border-end service-box">
          <BsTruck className="service-icon" />
          <div className="service-box-text">
            <h6>Free shipping</h6>
            <p className="text-secondary">Delivery within 5 to 7 days</p>
          </div>
        </li>
        <li className="col-md-3 col-sm-6 text-center border-end service-box">
          <AiOutlineGift className="service-icon" />
          <div className="service-box-text">
            <h6>Gift voucher</h6>
            <p className="text-secondary">Surprise coupon voucher</p>
          </div>
        </li>
        <li className="col-md-3 col-sm-6 text-center border-end service-box">
          <BsWallet2 className="service-icon" />
          <div className="service-box-text">
            <h6>Money back</h6>
            <p className="text-secondary">Refund within 30 days</p>
          </div>
        </li>
        <li className="col-md-3 col-sm-6 text-center service-box">
          <AiOutlineSafety className="service-icon" />
          <div className="service-box-text">
            <h6>Safe payment</h6>
            <p className="text-secondary">100% secure with us</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;

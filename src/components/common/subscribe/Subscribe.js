import "./Subscribe.css";
import { HiOutlineMail } from "react-icons/hi";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="my-container container pl-5">
        <div className="sub-desc">
          <h2 className="my-3">Subscribe newsletter</h2>
          <p className="text-secondary">
            Sign up here to get 20% off on your next purchase, special offers
            and other discount information
          </p>
        </div>
        <div className="email-input-parent">
          <input
            type="email"
            className="email-input"
            placeholder="Enter Your Email"
          />
          <HiOutlineMail className="email-icon" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

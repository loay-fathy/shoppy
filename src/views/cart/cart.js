import "./cart.css";
import Button from "../../components/common/button/Button";
import cartImg from "../../assets/banner-2.jpg";
import { useState } from "react";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { GrAmex } from "react-icons/gr";
import { BsPaypal } from "react-icons/bs";
import Location from "../../components/common/location/location";

const Cart = () => {
  const [total, setTotal] = useState(299);
  const getTotal = () => {
    const quantity = document.getElementById("quantity").value;
    setTotal(quantity * 299);
  };

  return (
    <>
      <Location where="Cart" />

      <div className="container">
        <div className="cart">
          <div>
            <div className="cart-title mb-3">
              <h5>My cart</h5>
              <p className="text-muted text-decoration-underline">66 Items</p>
            </div>
            <div className="cart-product py-4 border-top border-bottom">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={cartImg}
                  alt="prod-img"
                  className="cart-product-img d-inline"
                />
                <div className="d-flex flex-column gap-1">
                  <h6 id="asd">Iphone 15</h6>
                  <h6>
                    Color: <p className="d-inline">blue</p>
                  </h6>
                  <p>$299</p>
                </div>
              </div>
              <div>
                <input
                  onChange={getTotal}
                  id="quantity"
                  type="number"
                  min={1}
                  max={66}
                  className="cart-product-quantity"
                />
                <button className="cart-product-remove">Remove</button>
              </div>
              <h6>${total}</h6>
            </div>
            <div className="cart-buttons">
              <Button text="continue shopping" />
              <Button text="Clear cart" />
            </div>
            <h5 className="mt-3">Special instructions for seller</h5>
            <textarea
              rows={8}
              cols={100}
              className="mt-4 border-muted"
            ></textarea>
          </div>
          <div>
            <div className="shipping-info">
              <h5 className="mb-4">shipping info</h5>
              <label className="text-muted mb-2">City</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>---</option>
                <option value="1">Cairo</option>
                <option value="2">Ghaza</option>
                <option value="3">Giza</option>
              </select>
              <label className="text-muted my-2">Postal/Zip Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="zip/Postal code"
              />
              <Button text="calculate" className="mt-3 w-100" />
            </div>

            <div className="shipping-info mt-4">
              <div className="discount-code mb-4">
                <h6 className="text-muted">Total</h6>
                <p>${total}</p>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Discount code"
              />
              <Button text="checkout" className="w-100 mt-3" />
              <div className="mt-4 mx-auto">
                <BiLogoVisa className="visa" />
                <BiLogoMastercard className="visa" />
                <GrAmex className="visa" />
                <BsPaypal className="visa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

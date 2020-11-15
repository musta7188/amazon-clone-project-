import userEvent from "@testing-library/user-event";
import React from "react";
import CheckoutProduct from "../Checkout/CheckOutProduct";
import '../../styles/Payment.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function index({ user, basket }) {
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout  
          (<Link to="/checkout"> {basket?.length} Items</Link>)
          
        </h1>
        {/* Payment section - delivery address */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email} </p>
            <p>23 Marble House</p>
            <p>London, Se1</p>
          </div>
        </div>

        {/* Payment section  - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item) => {
              return (
                <>
                  <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                </>
              );
            })}
          </div>
        </div>

        {/* Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe code */}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(index);

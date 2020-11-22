import userEvent from "@testing-library/user-event";
import React, {useState} from "react";
import CheckoutProduct from "../Checkout/CheckOutProduct";
import '../../styles/Payment.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Card } from "@material-ui/core";
function Payment({ user, basket }) {


  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)


  const stripe = useStripe();
  const elements = useElements();


  const handelSubmit = (e) =>{
    ///all the stripe logic here 

  }

  const handelChange = (e) =>{
    ///Listen for changes in the cardElement 
    ///and display any errors as the customer types their card details
    setDisabled(e.empty)
    setError(e.error ? e.error.message: "")


  }

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
            <form onSubmit={handelSubmit}>
              <CardElement onChange={handelChange}/>
            </form>
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

export default connect(mapStateToProps)(Payment);

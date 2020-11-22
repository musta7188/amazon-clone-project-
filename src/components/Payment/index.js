import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import CheckoutProduct from "../Checkout/CheckOutProduct";
import '../../styles/Payment.css'
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Card } from "@material-ui/core";
import CurrencyFormat from 'react-currency-format'
import axios from '../axios/axios'
function Payment({ user, basket }) {

  let totalPrice = basket.reduce((amount, items) => items.price + amount, 0);
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")


  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() =>{
    //// generate the special stripe secret which allows us to charge a costumer

    const getClientSecret = async () =>{
      const response = await axios({
        method: 'post',
        ///stripes expects the total in currencies subunits (in cent $10 = 1000)
        url: `/payments/create?total=${totalPrice * 100} `
      })
      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket])

  const stripe = useStripe();
  const elements = useElements();


  const handelSubmit = async (e) =>{
    ///all the stripe logic here 
    e.preventDefault();
    setProcessing(true)

    ////clientSecret is how stripes knows how much we going to charge to the clients
    const payload = await stripe.confirmCardPayment(clientSecret, {
      ///this is the card we are getting from the clients
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        history.replace('/orders')

    })
    ////we distruct the paymentIntent which is the payment confirmation we get as response


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
              <div className='payment__priceContainer'>
                <CurrencyFormat 
                    renderText={(value) =>(
                        <h3>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                <button disabled={processing|| disabled || succeeded}>
                <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
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

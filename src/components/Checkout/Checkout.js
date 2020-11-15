import React, {useState, useEffect} from "react";
import "../../styles/Checkout.css";
import Subtotal from './Subtotal'
import {connect} from 'react-redux'
import CheckoutProduct from './CheckOutProduct'
import FlipMove from 'react-flip-move'


function Checkout({basket, user}) {

  const [basketItem, setBasket] = useState([])

  useEffect(() =>{
    setBasket(basket)
  })

   
  return (

    <div className="checkout">
      <div className="checkout_left">
        <img
        className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/sG/02/gc/2017/ASV/TopUp_1500x150.png"
          alt="checkout banner"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <h3>Hello {user? user.email: "Loading..."}</h3>
   
          {basketItem.map(item => {
           return <>
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            
            />
            </>
          })}


        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
  
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    user: state.user
  };
};
export default connect(mapStateToProps)(Checkout)
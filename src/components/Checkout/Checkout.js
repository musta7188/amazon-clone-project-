import React from "react";
import "../../styles/Checkout.css";
import Subtotal from './Subtotal'
export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
        className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/gc/2017/ASV/TopUp_1500x150.png"
          alt="checkout banner"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

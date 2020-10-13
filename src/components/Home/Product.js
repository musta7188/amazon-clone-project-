import React from "react";
import "../../styles/Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>199</strong>
        </p>
        <div className="product_rating">

        </div>
      </div>
    </div>
  );
}

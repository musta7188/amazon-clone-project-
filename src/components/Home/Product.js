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
          <p>⭐️</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51hlRhTeRkL._SX369_BO1,204,203,200_.jpg" alt="image book"/>
      <button>Add to Basket</button>
    </div>
  );
}

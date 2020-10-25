import React from "react";
import "../../styles/Product.css";

export default function Product({title, image, price, rating}) {

  let ratingStar = ""
  for(let i = 0; i < rating; i++){
    ratingStar+="⭐️"
  }


  return (
    <div className="product">
      <div className="product__info">
          <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <p>{ratingStar}</p>
        </div>
      </div>
      <img
        src={image}
        alt="image book"
      />
      <button>Add to Basket</button>
    </div>
  );
}

import React from "react";
import "../../styles/Product.css";
import { connect } from "react-redux";

function Product({ title, image, price, rating, saveItemsInBasket }) {

  

  const addToBasket = () =>{
    saveItemsInBasket({
      title:title,
      image: image,
      price: price,
      rating: rating
    })
  }



  let ratingStar = "";
  for (let i = 0; i < rating; i++) {
    ratingStar += "⭐️";
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
      <img src={image} alt="image book" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveItemsInBasket: (item) => dispatch({type: "ADD_TO_BASKET", payload: item})
  };
};

export default connect(null, mapDispatchToProps)(Product);

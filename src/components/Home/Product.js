import React from "react";
import "../../styles/Product.css";
import { connect } from "react-redux";
import {ratingStartProduct} from '../StateManagment/ReducerApp'
function Product({ id, title, image, price, rating, saveItemsInBasket }) {

  

  const addToBasket = () =>{
    saveItemsInBasket({
      id: id,
      title:title,
      image: image,
      price: price,
      rating: rating
    })
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
          <p>{ratingStartProduct(rating)}</p>
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

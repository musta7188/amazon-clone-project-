import React from 'react'
import '../../styles/CheckOutProduct.css'
import {connect} from 'react-redux'
import {ratingStartProduct} from '../StateManagment/ReducerApp'
 function CheckOutProduct({id, image, title, price, rating, RemoveItemFromBasket}) {

 const removeItem = () =>{
  RemoveItemFromBasket(id)
 }
  
  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image" src={image}/>

      <div className='checkoutProduct__info'> 
       <p className='checkoutProduct__title'>{title}
       </p>
       <p className='checkoutProduct__price'>
        <small>$</small>
           <strong>{price}</strong>
       </p>
       <div className="checkoutProduct__rating">
        {ratingStartProduct(rating)}
       </div>
       <button onClick={() => removeItem()}>Remove from basket</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    RemoveItemFromBasket: (id) => dispatch({type: "REMOVE_FROM_BASKET", payload: id})
  };
};

export default  connect(null, mapDispatchToProps)(CheckOutProduct);
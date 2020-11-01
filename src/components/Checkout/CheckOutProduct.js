import React from 'react'
import '../../styles/CheckOutProduct.css'
import {connect} from 'react-redux'
import {ratingStartProduct} from '../StateManagment/ReducerApp'
 function CheckOutProduct({id, image, title, price, rating}) {

  console.log(title)
  
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
       <button>Remove from basket</button>
      </div>
    </div>
  )
}


export default CheckOutProduct;
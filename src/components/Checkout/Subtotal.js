import React from "react";
import CurrencyFormat from "react-currency-format";
import "../../styles/Subtotal.css";
import {connect} from 'react-redux'

function Subtotal({count, basket}) {
  
  let totalPrice = 0;
  basket.forEach((items) =>{
    totalPrice+= items.price
  })

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({count} items):
              <strong>{`${totalPrice}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    count: state.itemsCount,
    basket: state.basket
  }
}

export default connect(mapStateToProps)(Subtotal)
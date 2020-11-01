import React from "react";
import "../../styles/Subtotal.css";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
function Subtotal({ basket }) {
  ////take each item in the basket and add the price value to amount variable
  let totalPrice = basket.reduce((amount, items) => items.price + amount, 0);

  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Subtotal);

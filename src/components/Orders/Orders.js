import React, { useEffect, useState } from "react";
import { db } from "../../FireBase";
import { connect } from "react-redux";
import Order from './Order'
import "../../styles/Orders.css";

function Orders({user, basket}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else{
      setOrders([])
    }
  }, []);
  return (
    <div className="orders">
      <h1>YOu Ordards</h1>
      <div className="orders__order">
        {
          orders?.map(order => (
            <Order order={order}/>
          ))
        }
      </div>

    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   // return {
//   //   userStateValue: (userObject) =dispatch({ type: "USER_STATUS", payload: userObject }),
//   };
// };

const mapStateToProps = (state) => {
  return {
    user: state.user,
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Orders);

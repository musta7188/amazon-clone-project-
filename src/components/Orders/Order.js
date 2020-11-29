import React from "react";
import "../../styles/Orders.css";
import moment from "moment";

export default function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
    </div>
  );
}

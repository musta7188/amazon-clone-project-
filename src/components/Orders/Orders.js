import React, {useEffect, useState} from 'react'
import {db} from '../../FireBase'
import '../../styles/Orders.css'



function Orders() {

  const [orders, setOrders] = useState([]);


  useEffect(() =>{
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot =>(
      setOrders(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data()
      })))
    ))
  },[])
  return (
    <div className="orders">
      <h1>YOu Ordards</h1>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    userStateValue: (userObject) => dispatch({ type: "USER_STATUS", payload: userObject }),
  };
};

export default connect(null, mapDispatchToProps)(Orders);

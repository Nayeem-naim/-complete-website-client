import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderList = () => {
    const [loggedInUser] = useContext(UserContext)
    const [orders , setOrders] = useState([])
    useEffect(()=>{
      const url = 'http://localhost:5000/order?email='+loggedInUser.email
      fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data))
    },[loggedInUser.email])

    console.log(orders);
    return (
        <div>
            <h2>Order  List </h2>
            {
                orders.map(order => <p>{order.order.name}</p>)
            }
        </div>
    );
};

export default OrderList;
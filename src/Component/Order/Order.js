import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Order = () => {
    const {orderId} = useParams();
    const [orders,setOrders] = useState({})
    useEffect(()=>{
           fetch('https://hidden-brook-46366.herokuapp.com/service')
           .then(res => res.json())
           .then(data => {
            setOrders(data.find(pd => pd._id === orderId))
           })
    },[orderId])
    return (
        <div className="container text-center mt-5 mb-5 bg-dark text-white">
            <h2>Your Order</h2>
            <h4>Your Selected Service Name : {orders.name}</h4>
            <p>Your Selected Service Price : {orders.price}</p>
            <Link  to={`/shipment/${orderId}`}><button className="btn btn-success" >Order</button></Link>
        </div>
    );
};

export default Order;
// as={Link}
// {`/order/${detail._id}`}
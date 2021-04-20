import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const Shipment = () => {
    const { shipmentId } = useParams();
    const [orderPlace,setOrderPlace] = useState({})
    useEffect(()=>{
       fetch('http://localhost:5000/service')
       .then(res => res.json())
       .then(data => {
        setOrderPlace(data.find(pd => pd._id === shipmentId))
       })
    },[shipmentId])
    // console.log(orderPlace);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [shipmentData, SetShipmentData] = useState(null)
    const [loggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        SetShipmentData(data)
    }
    // console.log(shipmentData, loggedInUser);

    const handlePayment = paymentId => {
        const serviceData = {
            ...loggedInUser,
            order: orderPlace,
            shipment: shipmentData,
            paymentId,
        }
        const url = 'http://localhost:5000/addOrder';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(serviceData)
            
        })
            .then(res => {
                if  (res){
                    alert('payment Successfully')
                }
            })
    };
   
    return (
        <div className="container text-center mt-5 mb-5">
            <div className="row">
                <div style={{ display: shipmentData ? 'none' : 'block' }}  className="col-md-5">
                    <h2>Shipment Location </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Your Name" {...register("Name")} /> <br /> <br />
                        <input placeholder="Your Email" {...register("Email")} /> <br /> <br />
                        <input placeholder="Your Location" {...register("location")} /> <br /> <br />
                        <input {...register("Your Phone number", { required: true })} placeholder="Your Phone Number" /> <br /> <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </div>
                <div style={{ display: shipmentData ? 'block' : 'none' }} className="col-md-5">
                    <h2 className="mb-5">Payment GetWay</h2>
                    <Payment handlePayments={handlePayment} ></Payment>
                </div>
            </div>
        </div>
    );
};

export default Shipment;
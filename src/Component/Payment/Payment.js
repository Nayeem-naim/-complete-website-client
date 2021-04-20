import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardFrom from './CardFrom';

const Payment = ({handlePayments}) => {
    const stripePromise = loadStripe('pk_test_51IhJRNLlLidjNzW2aGMv7cxQu2MmbMHtNMvymd6OUCq8WhHEFbqSCHvqGxrHrnTGI4z7kUWmwU1qysmIhgI7ZWO1004cztAKZA');
   
    return (
        <div className='contentWrapper'>
        <Elements stripe={stripePromise} >
            <CardFrom handlePayments={handlePayments}></CardFrom>
        </Elements>
        </div>
    );
};

export default Payment;
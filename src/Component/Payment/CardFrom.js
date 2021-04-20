import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CardFrom = ({handlePayments}) => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            handlePayments(paymentMethod.id)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                  </button>
            </form>
        </div>
    );
};

export default CardFrom;
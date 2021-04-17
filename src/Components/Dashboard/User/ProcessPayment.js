import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitForm from './SplitForm';
import  './SplitForm.css';

const stripePromise = loadStripe('pk_test_51IeIJMJMUyMEySQVHzCxW9GtkJKGCDnbGbme346agOwGUnMRM8JqFNAqtyfhnyBFGBltjIz6tlKJmullFChpNsVO007IFHAhEG');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitForm handlePayment={handlePayment}></SplitForm>
        </Elements>
    );
};

export default ProcessPayment;
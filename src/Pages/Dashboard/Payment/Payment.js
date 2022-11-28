import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SmallLoader from '../../Shared/Loader/SmallLoader';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const order = useLoaderData()
    const { name, price } = order
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <SmallLoader></SmallLoader>;
    }
    console.log(order);
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">
                Please pay <strong>${price}</strong>

            </p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
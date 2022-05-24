import React from 'react'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const StripeContainer = () => {

// const stripePromise = loadStripe('pk_test_51KueekSBqykQWGZUuYoM8KQDCWX3Xz9BIjItQTkYubzfdHHXvxoH3MU6MLq73tSezkWFovPX2acDE4mTzKjIPiS000hR40K81L');

// eslint-disable-next-line 
const [stripePromise,setStripePromise] = useState(() => loadStripe(process.env.REACT_APP_STRIPE_KEY))


    return (
        <div className='stripecontainer'>
            <Elements stripe={stripePromise}>
                <Payment />
            </Elements>
        </div>
    )
}



export default StripeContainer

import './App.css';
import React, { useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from "./components/Checkout"
import Orders from './components/Orders';
// import Payment from './components/Payment';
import StripeContainer from './components/StripeContainer';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from './redux/StateProvider';
import "@stripe/react-stripe-js"
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';



function App() {
  // eslint-disable-next-line
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        //the user just logged in/the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user  is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])

  // const stripePromise = loadStripe('pk_test_51KueekSBqykQWGZUuYoM8KQDCWX3Xz9BIjItQTkYubzfdHHXvxoH3MU6MLq73tSezkWFovPX2acDE4mTzKjIPiS000hR40K81L');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/payment" element={<StripeContainer />} />
          {/* <Route exact path="/payment" >
            <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
          </Route> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

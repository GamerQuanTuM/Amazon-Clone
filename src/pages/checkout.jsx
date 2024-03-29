import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotalPrice } from "../Redux/Slice/basketSlice";

const stripePromise = loadStripe(process.env.stripe_public_key);
const image = "https://links.papareact.com/ikj";

const Checkout = () => {
  const items = useSelector(selectItems);
  const { data } = useSession();

  const total = useSelector(selectTotalPrice);

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;

    //Call the backend to create a checkout session..
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: data.user.email,
    });

    //Redirect to Stripe Checkout

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image src={image} width={1020} height={250} objectFit="contain" />

          <div className="flex flex-col p-5 bg-white space-y-10">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon basket is empty"
                : "Your Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct key={i} item={item} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold font-Roboto">
                  <Currency
                    className=""
                    quantity={total * 82.368}
                    currency="INR"
                  />
                </span>
              </h2>
              <button
                onClick={createCheckOutSession}
                role="link"
                disabled={!data}
                className={`button mt-2 ${
                  !data &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!data ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import { placeOrder } from "../actions/orderActions";

export default function Checkout({ amount }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }
  return (
    <>
      <StripeCheckout
        amount={amount * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MQjvISEn4QvMxHG8xv3upH8IH6b6yzoUQlZ05Jyr8LpNYO3Rsn1Un44zKE1Rr3nseslMhncbv5UA1CXhQ3lPIoL00rzXbhDZQ"
        currency="INR"
      >
        {loading && <Loading />}
        {success && <Success success="Your Order Placed SuccessFully" />}
        {error && <Error erro="Something went wrong" />}
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </>
  );
}

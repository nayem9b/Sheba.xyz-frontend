"use client"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { message } from "antd";
import React, { useContext, useEffect, useState } from "react";

const CheckoutForm = ({ checkout }: any) => {
  const [confirmButton, setConfirmButton] = useState(false);

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");


  const stripe = useStripe();
  const elements = useElements();
  // const { price, _id } = checkout;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://plx-server-nayem9b.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message as any);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // name: user.displayName,
            // email: user.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message as any);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card, paymentIntent);
      // store payment info in the database
      const payment = {
        transactionId: paymentIntent.id,
        // payer: user.email,
        // paymentId: _id,
        status: "sold",
      };
      fetch(`https://plx-server-nayem9b.vercel.app/products/`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setSuccess("Congrats! your payment completed");
          setTransactionId(paymentIntent.id);
          message.success("Congratulations! your payment is completed");
          setConfirmButton(true);
        });
    }
    setProcessing(false);
  };

//   const handleConfirmButton = () => {
//     router("/dashboard/mypurchase");
//   };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='btn btn-sm mt-4 btn-primary'
          type='submit'
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
      {success && (
        <div>
          <p className='text-green-500'>{success}</p>
          <p>
            Your transactionId:{" "}
            <span className='font-bold'>{transactionId}</span>
          </p>
        </div>
      )}
      {confirmButton && (
        <div>
          <button
            // onClick={handleConfirmButton}
            className='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
            <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
            <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
            <span className='relative text-white'> My Purchases</span>
          </button>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

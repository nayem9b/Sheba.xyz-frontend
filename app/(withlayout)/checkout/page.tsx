"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutform";

const stripePromise = loadStripe(
  "pk_test_51MN1JOFHMLfc17qouFrVkCsnlYTZ4pu0k5RtzDlljNUjaJh0VdNTR1NvsBHB1XapI3OkoJYyAnTl3an4R30Oe4xJ005UBV94Dc"
);
const Checkout = () => {

  // const { item, price, number, description, image, _id, name } = checkout;

  return (
    <div>
      <section>
        <h1 className='sr-only'>Checkout</h1>

        <div className='relative mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-gray-50 py-12 md:py-24'>
              <div className='mx-auto max-w-lg px-4 lg:px-8'>
                <div className='flex items-center'>
                  <span className='h-10 w-10 rounded-full bg-blue-900'></span>

                  {/* <h2 className='ml-4 font-medium text-4xl mt-[-8px]'>{item}</h2> */}
                </div>

                <div className='mt-8'>
                  {/* <p className='text-2xl font-medium tracking-tight'>₹{price}</p> */}
                  <p className='mt-1 text-sm text-gray-500'>For the purchase of</p>
                </div>

                <div className='mt-12'>
                  <div className='flow-root'>
                    <ul className='-my-4 divide-y divide-gray-200'>
                      <li className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <img
                            alt='Trainer'
                            // src={image}
                            className='h-60 w-60 flex-shrink-0 rounded-lg object-cover'
                          />

                          <div className='ml-4'>
                            {/* <p className='text-sm'>{name}</p> */}
                            <h1 className='inline'>By:</h1>
                            {/* <h1 className='inline ml-1'>{name}</h1> */}
                            <dl className='mt-1 space-y-1 text-xs text-gray-500'>
                              <div>
                                {/* <dt className='inline'>{number}</dt> */}
                                {/* <dd className='inline ml-1'>{videos}</dd> */}
                              </div>
                            </dl>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='py-12 md:py-24'>
              <div className='mx-auto max-w-lg px-4 lg:px-8'>
                <Elements stripe={stripePromise}>
                  <CheckoutForm  />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

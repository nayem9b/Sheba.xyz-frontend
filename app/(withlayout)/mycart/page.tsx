"use client";

import {
  useCartItemsByUserIdQuery,
  useDeleteCartMutation,
} from "@/redux/api/cartApi";
import { DeleteOutlined } from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { Button, message } from "antd";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const MyCart = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const dispatch = useDispatch();
  const { data } = useCartItemsByUserIdQuery(user?.id);
  const CartItems = data?.data;
  const [deleteCart] = useDeleteCartMutation();
  const handleRemoveFromCart = async (id: string) => {
    console.log("im here");
    const res = await deleteCart(id);
    message.success("Deleted from your cart");
  };
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {CartItems?.map((item: any) => (
                  <>
                    <li className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        className="h-52 w-52 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          {item?.service.name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">
                              {item?.service?.location}
                            </dt>
                            <dd className="inline">XXS</dd>
                          </div>

                          <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">White</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label htmlFor="Line1Qty" className="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>

                          <input
                            type="number"
                            min="1"
                            value="1"
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form>

                        <Button
                          className="text-gray-600 transition hover:text-red-600"
                          onClick={() => handleRemoveFromCart(item?.id)}
                          danger
                        >
                          <DeleteOutlined />
                        </Button>
                        <Link href={`/purchase/${item?.id}`}>
                          <Button type="primary">Purchase</Button>
                        </Link>
                      </div>
                    </li>
                  </>
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCart;

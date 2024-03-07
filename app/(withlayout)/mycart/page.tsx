"use client";

import {
  useCartItemsByUserIdQuery,
  useDeleteCartMutation,
} from "@/redux/api/cartApi";
import { DeleteOutlined } from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { Button, Input, Space, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MyCart = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [CartItems, setCartItems] = useState<any>();

  useEffect(() => {
    fetch(`https://sheba-backend.vercel.app/api/v1/mycart/${user?.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("my cart services", data.data);
        setCartItems(data?.data);
      });
  }, [user?.id]);

  // const { data } = useCartItemsByUserIdQuery(user?.id);
  // const CartItems = data?.data;
  // console.log(CartItems);
  const [deleteCart] = useDeleteCartMutation();
  const handleRemoveFromCart = async (id: string) => {
    message.success("Deleted from your cart");
    const res = await deleteCart(id);
    window.location.reload();
  };
  return (
    <div>
      {CartItems?.length > 0 ? (
        <>
          {" "}
          <section>
            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className=" ">
                <header className="text-center">
                  <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    My Cart
                  </h1>
                </header>

                <div className="mt-8">
                  <ul className="space-y-10">
                    {CartItems?.map((item: any) => (
                      <>
                        <li className="flex gap-4">
                          <img
                            src={item?.service?.image}
                            alt=""
                            className="h-52 w-52 rounded-3xl object-cover"
                          />

                          <div>
                            <h3 className="text-3xl text-gray-900">
                              {item?.service?.name}
                            </h3>

                            <dl className="mt-0.5 space-y-px text-xl text-gray-600">
                              <div className="text-xl font-bold">
                                <dt className="inline ">Price:</dt>
                                <dd className="inline">
                                  {item?.service?.price} ₹
                                </dd>
                              </div>
                              <div>
                                <dt className="inline">Rating:</dt>
                                <dd className="inline">
                                  {item?.service?.rating}
                                </dd>
                              </div>
                              <div>
                                <dt className="inline">
                                  Location : {item?.service?.location}
                                </dt>
                              </div>
                            </dl>
                          </div>

                          <div className="flex flex-1 items-center justify-end gap-2">
                            <div className="mr-16 flex gap-4">
                              <Button
                                className="text-gray-600 transition hover:text-red-600 h-12 "
                                onClick={() => {
                                  handleRemoveFromCart(item?.id);
                                }}
                                danger
                              >
                                <DeleteOutlined />
                              </Button>
                              <Link href={`/purchase/${item?.service?.id}`}>
                                <Button type="primary" className="h-12">
                                  Book Service
                                </Button>
                              </Link>
                            </div>
                            <Space.Compact className="w-96 h-12">
                              <Input placeholder="Promo Code" />
                              <Button type="primary" className="h-12">
                                Submit
                              </Button>
                            </Space.Compact>
                          </div>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h1 className="text-center">No items in your cart</h1>
      )}
    </div>
  );
};

export default MyCart;

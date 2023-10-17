"use client";

import { useAddToCartMutation } from "@/redux/api/cartApi";
import { useUser } from "@clerk/nextjs";
import { Button, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import { CreditCardOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const SingleServicePage = ({ params }: { params: any }) => {
  const { TextArea } = Input;
  const { id } = params;
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);
  const [serviceInfo, setServiceInfo] = useState<any>();
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);
  const [reviews, setReviews] = useState<any>();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceInfo(data.data);
      });
    fetch(`http://localhost:5000/api/v1/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, [id]);

  const sendCartInfo = {
    userId: user?.id,
    servicesId: id,
  };
  const handleAddToCart = async () => {
    fetch(`http://localhost:5000/api/v1/add-to-cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendCartInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handlePostReview = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const review = form?.review?.value;
    const SendReviewInfo = {
      review: review,
      rating: value,
      servicesId: serviceInfo?.id,
      userImage: user?.imageUrl,
      userId: user?.id,
    };
    console.log(SendReviewInfo);
    fetch(`http://localhost:5000/api/v1/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(SendReviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <article>
        <section className="bg-white dark:bg-gray-900">
          <div className="relative flex">
            <div className="min-h-screen lg:w-1/3"></div>
            <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

            <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What our <span className="text-blue-500">customers</span> <br />{" "}
                are saying
              </h1>

              <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                <img src={serviceInfo?.image} className="w-52 h-52" alt="" />

                <div className="mt-8 lg:px-10 lg:mt-0 lg:ml-40">
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    {serviceInfo?.name}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    Price : {serviceInfo?.price}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    Category : {serviceInfo?.category?.title}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    Rating : {serviceInfo?.rating}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    Location : {serviceInfo?.location}
                  </h1>

                  <Link href={"/mycart"}>
                    <Button
                      color="success"
                      className="mr-3 mt-3"
                      onClick={handleAddToCart}
                    >
                      Add to <ShoppingCartOutlined />
                    </Button>
                  </Link>
                  <Link href={`/purchase/${id}`}>
                    <Button
                      color="success"
                      className="mr-3 mt-3"
                      onClick={handleAddToCart}
                    >
                      Purchase <CreditCardOutlined />
                    </Button>
                  </Link>

                  <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                    “ {serviceInfo?.details} ”
                  </p>

                  <h3 className="mt-6 text-lg font-medium text-blue-500">
                    All Services
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <form className="w-3/6 mx-auto " onSubmit={handlePostReview}>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? (
              <span className="ant-rate-text">{desc[value - 1]}</span>
            ) : (
              ""
            )}
          </span>
          <TextArea rows={4} name="review" />
          <Button htmlType="submit">Submit</Button>
        </form>

        <div className=" mx-auto prose">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                Reviews ✨
              </h1>
              {reviews?.map((review: any) => (
                <div review={review} key={review?.id}>
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="w-24 rounded-full">
                        <img src={review?.userImage} />
                      </div>
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">{review?.review}</p>
                        <a className="inline-flex items-center">
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              {review?.userName}
                            </span>
                            <span className="text-gray-500 text-sm">
                              UI DEVELOPER
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default SingleServicePage;

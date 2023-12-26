"use client";
import { useUser } from "@clerk/nextjs";
import { Button, Rate, message } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import { CreditCardOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ReviewCard from "@/components/ui/reviewCard";
import ServiceFAQ from "@/components/ui/ServiceFAQ";
import { useAllBookingsQuery } from "@/redux/api/bookingApi";
import { useAllReviewsQuery } from "@/redux/api/reviewsApi";
import WhyUs from "@/components/ui/WhyUs";

const SingleServicePage = ({ params }: { params: any }) => {
  const { data: allReviewsArray } = useAllReviewsQuery();
  const { data: allBookingsArray } = useAllBookingsQuery();
  const { TextArea } = Input;
  const { id } = params;
  const { isLoaded, isSignedIn, user } = useUser();

  const [serviceInfo, setServiceInfo] = useState<any>();
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);
  const [reviews, setReviews] = useState<any>();
  const allReviews = allReviewsArray?.data;
  const allBookings = allBookingsArray?.data;
  const bookingResult = allBookings?.filter(
    (booking: any) =>
      booking.userId === user?.id && booking?.servicesId === serviceInfo?.id
  );
  const reviewResult = allReviews?.filter(
    (review: any) =>
      review.userId === user?.id && review?.servicesId === serviceInfo?.id
  );
  console.log("reviewResult", reviewResult);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
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
        message.success("Service added to your cart");
      });
  };

  const handlePostReview = async (e: any) => {
    message.loading("Sending");
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
        message.success("Your review is posted");
        window.location.reload();
      });
  };
  return (
    <div>
      <article>
        <section className="bg-white ">
          <div className="relative flex">
            <div className="min-h-screen lg:w-1/3"></div>
            <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

            <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                Our best of the <br />
                <span className="text-blue-500">{serviceInfo?.name}</span>{" "}
              </h1>

              <div className=" lg:flex lg:items-center">
                <img src={serviceInfo?.image} className="w-52 h-52" alt="" />

                <div className="ml-96 mx-auto">
                  <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
                    {serviceInfo?.name}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
                    Price : {serviceInfo?.price}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
                    Category : {serviceInfo?.category?.title}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
                    Rating : {serviceInfo?.rating}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
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
                      Book Service <CreditCardOutlined />
                    </Button>
                  </Link>

                  <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                    “ {serviceInfo?.details} ”
                  </p>
                  <Link href={"/"}>
                    <h3 className="mt-6 text-lg font-medium text-blue-500">
                      All Services
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ServiceFAQ />
        <WhyUs />
        {bookingResult?.length > 0 && reviewResult?.length === 0 && (
          <div>
            <h1 className="text-center mb-10">
              We will be happy to have your review
            </h1>
            <form className="w-3/6 mx-auto " onSubmit={handlePostReview}>
              <span>
                <Rate
                  tooltips={desc}
                  onChange={setValue}
                  value={value}
                  className="mx-auto justify-center place-items-center text-4xl"
                />
                {value ? (
                  <span className="ant-rate-text">{desc[value - 1]}</span>
                ) : (
                  ""
                )}
              </span>
              <TextArea rows={4} name="review" />
              <Button
                htmlType="submit"
                type="primary"
                className="flex justify-end mt-5"
              >
                Submit
              </Button>
            </form>
          </div>
        )}

        <div className=" mx-auto prose">
          <section className="text-gray-600 body-font">
            {reviews?.length > 0 ? (
              <div>
                <div className="container px-5 py-24 mx-auto">
                  <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                    Reviews ✨
                  </h1>
                  <div className="grid grid-cols-3 gap-5">
                    {reviews?.map((review: any) => (
                      <ReviewCard review={review} key={review?.id}></ReviewCard>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </section>
        </div>
      </article>
    </div>
  );
};

export default SingleServicePage;

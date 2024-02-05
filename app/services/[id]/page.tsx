"use client";
import { useUser } from "@clerk/nextjs";
import { Button, Divider, Rate, Steps, message } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import {
  CheckCircleOutlined,
  CreditCardOutlined,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import ReviewCard from "@/components/ui/reviewCard";
import ServiceFAQ from "@/components/ui/ServiceFAQ";
import { useAllBookingsQuery } from "@/redux/api/bookingApi";
import { useAllReviewsQuery } from "@/redux/api/reviewsApi";
import WhyUs from "@/components/ui/WhyUs";
import HomeSyncBreadCrumb from "@/components/ui/BreadCrumb";
import Image from "next/image";
import safety from "../../../Assets/safety-insured.png";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

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
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "This is a description.";

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
    fetch(`http://localhost:3333/api/v1/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceInfo(data.data);
      });
    fetch(`http://localhost:3333/api/v1/reviews/${id}`)
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
    fetch(`http://localhost:3333/api/v1/add-to-cart`, {
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
    fetch(`http://localhost:3333/api/v1/review`, {
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
      <Layout className="px-16 ">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{
            // overflow: "auto",
            position: "fixed",
            right: 0,
          }}
          className="mt-52 z-30 mr-32 rounded-3xl w-96 h-96 "
        >
          <div className="">
            <Menu
              mode="inline"
              className=" py-20 rounded-2xl w-[900px] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#1da89f]  to-purple-700 mr-10 h-96 "
              defaultSelectedKeys={["4"]}
              items={items}
            />
          </div>
        </Sider>
      </Layout>
      <div className="relative mt-20">
        <img
          src={serviceInfo?.image}
          alt=""
          className="w-full h-80 object-cover brightness-50 z-10"
        />

        <div className="absolute bottom-0 px-4 py-3  w-full">
          <div className="w-4/6 mx-auto">
            <HomeSyncBreadCrumb
              items={[
                {
                  label: "services",
                  link: "/allservices",
                },
                {
                  label: serviceInfo?.name.toLowerCase(),
                  link: "/allservices",
                },
              ]}
            />
            <div className="flex">
              <h1 className="text-white font-semibold text-4xl">
                {" "}
                {serviceInfo?.name} Services
              </h1>
              <Image src={safety} alt="" className="w-28 h-8 mt-7 ml-2"></Image>
            </div>
            <div className="">
              <p className="px-2 py-1 rounded-md w-28 bg-green-600 text-white">
                <StarFilled />{" "}
                <span className="text-xl font-bold">{serviceInfo?.rating}</span>{" "}
                out of 5
              </p>
            </div>
            <p className="text-white text-xs">(8318 ratings on 3 services)</p>
            <div className="text-sm font-semibold">
              <p className="text-gray-200">
                <CheckCircleOutlined /> On Time Work Completion
              </p>
              <p className="text-gray-200">
                <CheckCircleOutlined className="" /> Trusted and Experienced
                Plumbers
              </p>
            </div>
          </div>
        </div>
      </div>
      <article>
        {/* <section className="bg-white ">
          <div className=" flex">
            <div className="min-h-screen lg:w-1/3"></div>
            <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:inset-x-0">
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
        </section> */}

        <div className="flex">
          <div className="w-1/6">
            <div className="grid ml-20 mt-8 gap-3 sticky top-20">
              <Link className="text-black no-underline" href="#">
                Service Overview
              </Link>
              <Link className="text-black no-underline" href="#">
                FAQ
              </Link>
              <Link className="text-black no-underline" href="#">
                Reviews
              </Link>
              <Link className="text-black no-underline" href="#">
                Details
              </Link>
            </div>
          </div>
          <div className="w-3/6 flex">
            <Divider type="vertical" className="h-full" />
            <div className="ml-2">
              {/* Overview of Service */}
              <div>
                <p>Whats included?</p>
                <ul>
                  <li>Only Service charge</li>
                  <li>7 Days service warrenty</li>
                </ul>
                <p>Whats Excluded?</p>
                <ul>
                  <li>Price of materials or parts</li>
                  <li>Transportation cost for carrying new materials/parts</li>
                  <li>Warranty given by manufacturer</li>
                </ul>
              </div>
              {/* Safety */}
              <div>
                <Image src={safety} alt="" className="w-72 h-24"></Image>
                <p>
                  We are well-equipped and well-prepared to protect your health
                  and hygiene while serve you. Our preparations include-
                </p>
                <div>
                  <ul>
                    <li>Checked Health condition of service specialist</li>
                    <li>Ensuring use of masks, hand sanitisers, gloves, etc</li>
                    <li>Disinfecting equipments before and after the work</li>
                    <li>Maintaining social distancing</li>
                  </ul>
                </div>
              </div>

              {/* How TO order */}
              <div>
                <p>How to order</p>
                <Steps
                  current={current}
                  onChange={onChange}
                  direction="vertical"
                  items={[
                    {
                      title: "Select service",
                      description:
                        "From the category, select the service you are looking for",
                    },
                    {
                      title: "Book your schedule",
                      description: "Select your convenient time slot.",
                    },
                    {
                      title: "Place order",
                      description:
                        "Confirm your order by clicking ‘Place order’.",
                    },
                  ]}
                />
              </div>
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
                            <ReviewCard
                              review={review}
                              key={review?.id}
                            ></ReviewCard>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleServicePage;

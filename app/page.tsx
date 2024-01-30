/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useUser } from "@clerk/nextjs";
import {
  useAvailableServicesQuery,
  useServicesQuery,
  useUpcomingServicesQuery,
} from "@/redux/api/servicesApi";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import Homepage from "./Homepage";
import CategoryHomeCard from "@/components/ui/CategoryHomeCard";
import ServiceHomeCard from "@/components/ui/ServiceHomeCard";
import { useEffect, useState } from "react";
import { useAddUserMutation } from "@/redux/api/userApi";
import CompanyPeople from "@/components/ui/CompanyPeople";
import Testimonial from "@/components/ui/Testimonial";
import News from "@/components/ui/News";
import Partners from "@/components/ui/Partners";
import FeedbackForm from "@/components/ui/FeedbackForm";
import CallToAction from "@/components/ui/CallToAction";
import FAQ from "@/components/ui/FAQ";
import UpcomingServiceCard from "@/components/ui/UpcomingServiceCard";
import emi from "../Assets/EMI.png";
import Image from "next/image";
import { Modal } from "antd";
import emiDetails from "../Assets/emi details.png";
import TestimonialSlide from "@/components/ui/TestimonialSlide";
import HappyFaces from "@/components/ui/HappyFaces";
import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
import serviceRequested from "../Assets/service-request.png";
import girl from "../Assets/girl.jpg";
import royhana from "../Assets/royhana.jpg";
import sonia from "../Assets/sonia.jpg";
import afia from "../Assets/afia.jpg";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [modal2Open, setModal2Open] = useState(false);
  const { data: categoryData } = useCategoriesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const { data: allservices } = useServicesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const { data: upcomingServices } = useUpcomingServicesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const { data: availableServices } = useAvailableServicesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  console.log(upcomingServices, availableServices);
  const [userInfo, setUserInfo] = useState({});
  const [addUser] = useAddUserMutation();
  const services = allservices?.data?.data;
  console.log(categoryData, services);

  useEffect(() => {
    fetch(`http://localhost:3333/api/v1/users/${user?.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setUserInfo(data.data);
      });
  }, [user?.id]);
  console.log(userInfo);
  const sendToDbUserInfo = {
    userId: user?.id,
    name: user?.fullName || "New User",
    email: user?.primaryEmailAddress?.emailAddress,
    profileImg: "abc",
    password: "hashedpassword",
    contactNo: "123456",
  };

  if (isLoaded && isSignedIn) {
    if (!userInfo) {
      fetch(`http://localhost:3333/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sendToDbUserInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }
  return (
    <>
      <Homepage />
      <Modal
        centered
        open={modal2Open}
        width={1000}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Image src={emiDetails} alt=""></Image>
      </Modal>
      <Image
        onClick={() => setModal2Open(true)}
        src={emi}
        alt="emi"
        className="w-3/5 mx-auto justify-center items-center flex h-28 rounded-xl cursor-pointer"
      ></Image>
      <h1 className="text-center my-20">All Categories</h1>
      <div className="grid lg:grid-cols-8 sm:grid-cols-4 md:grid-cols-6 gap-10 lg:mx-60">
        {categoryData?.data?.map((category: any) => (
          <CategoryHomeCard key={category.name} category={category} />
        ))}
      </div>
      <h1 className="text-center my-20">Available Services</h1>
      <div className="grid grid-cols-4 mx-60 gap-10">
        {availableServices?.data?.map((service: any) => (
          <ServiceHomeCard key={service.name} service={service} />
        ))}
      </div>
      <h1 className="text-center text-blue-600 my-20">Upcoming Services</h1>
      <div className="grid grid-cols-4 mx-60 gap-10">
        {upcomingServices?.data?.map((service: any) => (
          <UpcomingServiceCard key={service.name} service={service} />
        ))}
      </div>
      <Partners />
      <CompanyPeople />
      <Testimonial />
      <FAQ />
      <News />
      <div className="w-3/4 flex justify-center ">
        <div className="mx-auto ">
          <p className="text-2xl font-bold">SOME HAPPY FACES</p>
          <p>Real Happy Customers, Real Stories</p>
        </div>
      </div>

      <Carousel autoplay>
        <div style={contentStyle} className="w-1/2 flex justify-center mx-auto">
          <div className="flex">
            <div className="inline-block h-[310px] min-h-[1em] w-10 rounded-md self-stretch bg-green-500 opacity-100 dark:opacity-50"></div>
            <div className="ml-10">
              <p className="text-xl italic text-gray-600 text-justify">
                <span className="text-3xl font-extrabold">&#34;</span> Such
                service platforms are available in other countries. I’ve
                personally used those when I was abroad. I’m very pleased that
                such a portal is available here in Bangladesh as well. Thank you
                Sheba.xyz.{" "}
                <span className="text-3xl font-extrabold">&#34;</span>
              </p>
              <p>- says someone</p>
              <p>Profession</p>
            </div>
          </div>

          <Image
            src={girl}
            alt=""
            className="w-3/5 h-72 object-cover rounded-full ml-20"
          ></Image>
        </div>
        <div style={contentStyle} className="w-1/2 flex justify-center mx-auto">
          <div className="flex">
            <div className="inline-block h-[310px] min-h-[1em] w-10 rounded-md self-stretch bg-green-500 opacity-100 dark:opacity-50"></div>
            <div className="ml-10">
              <p className="text-xl italic text-gray-600 text-justify">
                <span className="text-3xl font-extrabold">&#34;</span> Sheba.xyz
                services are very helpful for working women like me. They were
                on time as per the schedule to provide the service, and I’m very
                satisfied with their quality of service.
                <span className="text-3xl font-extrabold">&#34;</span>
              </p>
              <p>- says someone</p>
              <p>Profession</p>
            </div>
          </div>

          <Image
            src={royhana}
            alt=""
            className="w-3/5 h-72 object-cover rounded-full ml-20"
          ></Image>
        </div>
        <div style={contentStyle} className="w-1/2 flex justify-center mx-auto">
          <div className="flex">
            <div className="inline-block h-[310px] min-h-[1em] w-10 rounded-md self-stretch bg-green-500 opacity-100 dark:opacity-50"></div>
            <div className="ml-10">
              <p className="text-xl italic text-gray-600 text-justify">
                <span className="text-3xl font-extrabold">&#34;</span> It was my
                marriage and wasn’t getting schedule from any beauty parlor. So,
                I downloaded Sheba.xyz app and found that it has all of my
                requirements. The beautician arrived in time and was really
                amazing. Thank you.
                <span className="text-3xl font-extrabold">&#34;</span>
              </p>
              <p>- says someone</p>
              <p>Profession</p>
            </div>
          </div>

          <Image
            src={afia}
            alt=""
            className="w-3/5 h-72 object-cover rounded-full ml-20"
          ></Image>
        </div>
        {/* <div style={contentStyle} className="w-1/2 flex justify-center mx-auto">
          <div className="flex">
            <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-green-500 opacity-100 dark:opacity-50"></div>
            <div className="ml-10">
              <p>
                Such service platforms are available in other countries. I’ve
                personally used those when I was abroad. I’m very pleased that
                such a portal is available here in Bangladesh as well. Thank you
                Sheba.xyz.
              </p>
            </div>
          </div>
          <Image
            src={girl}
            alt=""
            className="w-3/5 h-72 object-cover rounded-full"
          ></Image>
        </div> */}
        {/* <div style={contentStyle} className="w-3/4 flex">
          <div className="">
            <h1>SOME HAPPY FACES</h1>
            <h1>Real Happy Customers, Real Stories</h1>
            <h1>
              Such service platforms are available in other countries. I’ve
              personally used those when I was abroad. I’m very pleased that
              such a portal is available here in Bangladesh as well. Thank you
              Sheba.xyz.
            </h1>
          </div>
          <Image src={serviceRequested} alt=""></Image>
        </div>
        <div style={contentStyle} className="w-3/4 flex">
          <div className="">
            <h1>SOME HAPPY FACES</h1>
            <h1>Real Happy Customers, Real Stories</h1>
            <h1>
              Such service platforms are available in other countries. I’ve
              personally used those when I was abroad. I’m very pleased that
              such a portal is available here in Bangladesh as well. Thank you
              Sheba.xyz.
            </h1>
          </div>
          <Image src={serviceRequested} alt=""></Image>
        </div>
        <div style={contentStyle} className="w-3/4 flex">
          <div className="">
            <h1>SOME HAPPY FACES</h1>
            <h1>Real Happy Customers, Real Stories</h1>
            <h1>
              Such service platforms are available in other countries. I’ve
              personally used those when I was abroad. I’m very pleased that
              such a portal is available here in Bangladesh as well. Thank you
              Sheba.xyz.
            </h1>
          </div>
          <Image src={serviceRequested} alt=""></Image>
        </div> */}
        {/* <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
      </Carousel>
      {/* <TestimonialSlide /> */}
      <FeedbackForm />
      <CallToAction />
    </>
  );
}

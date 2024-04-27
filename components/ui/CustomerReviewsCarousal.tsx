import React from "react";
import { Carousel } from "antd";
import girl from "../../Assets/girl.jpg";
import royhana from "../../Assets/royhana.jpg";
import sonia from "../../Assets/sonia.jpg";
import afia from "../../Assets/afia.jpg";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CustomerReviewsCarousal = () => {
  return (
    <div>
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
              <p>- Adrita</p>
              <p>Marketing Specialist</p>
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
              <p>- Tamanna</p>
              <p>Lawyer</p>
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
              <p>-Aliyana</p>
              <p>Finance consultent</p>
            </div>
          </div>

          <Image
            src={afia}
            alt=""
            className="w-3/5 h-72 object-cover rounded-full ml-20"
          ></Image>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomerReviewsCarousal;

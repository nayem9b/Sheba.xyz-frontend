import Image from "next/image";
import React from "react";
import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
import serviceRequested from "../../Assets/service-request.png";
const HappyFaces = () => {
  return (
    <div className="flex w-3/4 justify-center items-center mx-auto bg-slate-100">
      <div className="w-1/2">
        <h1>SOME HAPPY FACES</h1>
        <h1>Real Happy Customers, Real Stories</h1>
        <h1>
          Such service platforms are available in other countries. I’ve
          personally used those when I was abroad. I’m very pleased that such a
          portal is available here in Bangladesh as well. Thank you Sheba.xyz.
        </h1>
        <Carousel autoplay>
          <div style={contentStyle}>
            <h1>SOME HAPPY FACES</h1>
            <h1>Real Happy Customers, Real Stories</h1>
            <h1>
              Such service platforms are available in other countries. I’ve
              personally used those when I was abroad. I’m very pleased that
              such a portal is available here in Bangladesh as well. Thank you
              Sheba.xyz.
            </h1>
            <Image src={serviceRequested} alt=""></Image>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <Image src={serviceRequested} alt=""></Image>
    </div>
  );
};

export default HappyFaces;

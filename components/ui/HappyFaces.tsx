import Image from "next/image";
import React from "react";
import serviceRequested from "../../Assets/service-request.png";
const HappyFaces = () => {
  return (
    <div className="flex w-3/4 justify-center">
      <div className="w-1/2">
        <h1>SOME HAPPY FACES</h1>
        <h1>Real Happy Customers, Real Stories</h1>
        <h1>
          Such service platforms are available in other countries. I’ve
          personally used those when I was abroad. I’m very pleased that such a
          portal is available here in Bangladesh as well. Thank you Sheba.xyz.
        </h1>
      </div>
      <Image src={serviceRequested} alt=""></Image>
    </div>
  );
};

export default HappyFaces;

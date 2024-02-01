import { Button } from "antd";
import Image from "next/image";
import React from "react";
import callme from "../../Assets/service-request.png";
import { PhoneOutlined } from "@ant-design/icons";

const Helpline = () => {
  return (
    <div className="bg-gray-50 h-48 mt-32">
      <div className="w-4/6 mx-auto">
        <div className=" flex justify-evenly">
          <div>
            <p className="font-semibold text-2xl">Can’t find your desired service? Let us know 24/7 in 16516.</p>
            <Button type="primary" size={"large"}>
              Request a Service
            </Button>
            <Button size={"large"} className="ml-6">
              {" "}
              <PhoneOutlined className="font-bold" /> 16516
            </Button>
          </div>
          <Image src={callme} alt="" className="-mt-32"></Image>
        </div>
      </div>
    </div>
  );
};

export default Helpline;

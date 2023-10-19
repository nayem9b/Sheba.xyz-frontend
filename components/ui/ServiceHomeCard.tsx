import React from "react";
import Link from "next/link";

const ServiceHomeCard = ({ service }: any) => {
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        href={`/services/${service?.id}`}
        className=" rounded-lg  shadow-sm shadow-indigo-100 disabled:opacity-75 "
      >
        <img
          alt="Home"
          src={service?.image}
          className="w-52 h-52 mx-auto justify-center place-content-start place-items-center rounded-xl"
        />

        <div className="mt-2  text-black font-semibold">
          <p className="font-medium mx-auto mt-6 ">{service?.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceHomeCard;

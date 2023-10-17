import React from "react";
import Link from "next/link";

const ServiceHomeCard = ({ service }: any) => {
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        href={`/services/${service?.id}`}
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
      >
        <img alt="Home" src={service?.image} className="w-40 h-40" />

        <div className="mt-2 text-center text-black font-semibold">
          <p className="font-medium mx-auto ">{service?.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceHomeCard;

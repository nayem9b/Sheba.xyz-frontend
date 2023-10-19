import React from "react";

const UpcomingServiceCard = ({ service }: any) => {
  return (
    <div className="opacity-60">
      <img
        alt="Home"
        src={service?.image}
        className="w-52 h-52 mx-auto justify-center place-content-start place-items-center rounded-xl"
      />

      <div className="mt-2  text-black font-semibold">
        <p className="font-medium mx-auto mt-6 ">{service?.name}</p>
      </div>
    </div>
  );
};

export default UpcomingServiceCard;

"use client";

import {
  useBookingsByUserIdQuery,
  useDeleteBookingMutation,
} from "@/redux/api/bookingApi";
import { DeleteOutlined } from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { Button, message } from "antd";
import React from "react";

const MyBookings = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { data: myBookings } = useBookingsByUserIdQuery(user?.id);
  console.log(myBookings);
  const [deleteBooking] = useDeleteBookingMutation();

  return (
    <div>
      {myBookings?.data.map((booking: any) => (
        <>
          <article className="rounded-xl border-2 border-gray-100 bg-white">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
              <a href="#" className="block shrink-0">
                <img
                  alt="Speaker"
                  src={booking?.service?.image}
                  className="w-52 h-52"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    {booking.service.name}
                  </a>
                </h3>
                <p className="line-clamp-2 text-sm text-gray-700">
                  Price : {booking.service.price} Taka
                </p>
                <p className="line-clamp-2 text-sm text-gray-700">
                  Rating : {booking?.service?.rating} ⭐
                </p>
                <p className="line-clamp-2 text-sm text-gray-700">
                  Location : {booking?.service?.location} ⭐
                </p>

                <p className="line-clamp-2 text-sm text-gray-700">
                  Details: {booking.service.details}
                </p>
              </div>
            </div>

            <div className="flex gap-10 justify-end">
              <div className="flex justify-end ">
                <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span className="text-[10px] font-medium sm:text-xs">
                    Status :{" "}
                    <span className="uppercase">{booking?.status}</span>
                  </span>
                </strong>
              </div>

              <Button
                type="primary"
                danger
                onClick={() => {
                  deleteBooking(booking?.id);
                  message.error("Booking Deleted");
                }}
              >
                Delete Booking <DeleteOutlined />
              </Button>
            </div>
          </article>
        </>
      ))}
    </div>
  );
};

export default MyBookings;

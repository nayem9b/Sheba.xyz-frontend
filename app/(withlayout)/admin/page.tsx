"use client";

import { message } from "antd";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
import { useAllUsersQuery } from "@/redux/api/userApi";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useServicesQuery } from "@/redux/api/servicesApi";
import {
  useAllBookingsQuery,
  useCanceledBookingsQuery,
  useDeliveredBookingsQuery,
  usePendingBookingsQuery,
  useRejectedBookingsQuery,
} from "@/redux/api/bookingApi";
const AdminDashboardPage = () => {
  const router = useRouter();
  const { organizationList, isLoaded, setActive } = useOrganizationList();

  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list

      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "admin"
      );

      // If the user is not an admin, redirect to the homepage
      if (!adminOrganization || adminOrganization.membership.role !== "admin") {
        router.push("/");
        // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for the organization list; render the admin page directly
      }
    }
  }, [isLoaded, organizationList, router]);

  const { data: allUsers, isLoading } = useAllUsersQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const { data: allCategory } = useCategoriesQuery();
  const { data: allServices } = useServicesQuery();
  const { data: allBookings } = useAllBookingsQuery();
  const { data: rejectedBookings } = useRejectedBookingsQuery();
  const { data: pendingBookings } = usePendingBookingsQuery();
  const { data: canceledBookings } = useCanceledBookingsQuery();
  const { data: deliveredBookings } = useDeliveredBookingsQuery();

  return (
    <div>
      <h1 className="text-center text-blue-500 text-4xl">
        You are at Admin Dashboard
      </h1>
      <div className="grid grid-cols-4">
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>All Users</p>
            <p className="font-medium mx-auto "> {allUsers?.data?.length} </p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>All Categories</p>
            <p className="font-medium mx-auto "> {allCategory?.data?.length}</p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>All Services</p>
            <p className="font-medium mx-auto "> {allServices?.data?.length}</p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>All Bookings</p>
            <p className="font-medium mx-auto "> {allBookings?.data?.length}</p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>Pending Bookings</p>
            <p className="font-medium mx-auto ">
              {" "}
              {pendingBookings?.data?.length}
            </p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>Delivered Bookings</p>
            <p className="font-medium mx-auto ">
              {" "}
              {deliveredBookings?.data?.length}
            </p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>Canceled Bookings</p>
            <p className="font-medium mx-auto ">
              {" "}
              {canceledBookings?.data?.length}
            </p>
          </div>
        </div>
        <div
          style={{ textDecoration: "none" }}
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
        >
          <div className="mt-2 text-center text-black font-semibold">
            <p>Rejected Bookings</p>
            <p className="font-medium mx-auto ">
              {" "}
              {rejectedBookings?.data?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

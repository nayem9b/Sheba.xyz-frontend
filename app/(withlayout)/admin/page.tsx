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
// DashboardCard component for summary cards
import {
  UserOutlined,
  AppstoreOutlined,
  ToolOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

const iconMap: Record<string, React.ReactNode> = {
  user: <UserOutlined className="text-3xl" />,
  appstore: <AppstoreOutlined className="text-3xl" />,
  tool: <ToolOutlined className="text-3xl" />,
  calendar: <CalendarOutlined className="text-3xl" />,
  clockCircle: <ClockCircleOutlined className="text-3xl" />,
  checkCircle: <CheckCircleOutlined className="text-3xl" />,
  closeCircle: <CloseCircleOutlined className="text-3xl" />,
  stop: <StopOutlined className="text-3xl" />,
};

type DashboardCardProps = {
  color: string;
  icon: string;
  title: string;
  value: number | undefined;
};

const DashboardCard = ({ color, icon, title, value }: DashboardCardProps) => (
  <div
    className={`rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center bg-gradient-to-br ${color} text-white border-2 border-white/30`}
  >
    <div className="mb-2">{iconMap[icon]}</div>
    <div className="text-lg font-semibold mb-1">{title}</div>
    <div className="text-3xl font-bold">{value ?? 0}</div>
  </div>
);

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

  console.log(allBookings);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-blue-700 mb-2 tracking-tight">Sheba Dashboard</h1>
            <p className="text-gray-500 text-base">Admin overview and projections</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {/* Add quick action buttons here if needed */}
          </div>
        </div>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <DashboardCard color="from-blue-400 to-blue-600" icon="user" title="All Users" value={allUsers?.data?.length} />
          <DashboardCard color="from-pink-400 to-pink-600" icon="appstore" title="All Categories" value={allCategory?.data?.length} />
          <DashboardCard color="from-purple-400 to-purple-600" icon="tool" title="All Services" value={allServices?.data?.length} />
          <DashboardCard color="from-yellow-300 to-yellow-500" icon="calendar" title="All Bookings" value={allBookings?.data?.length} />
        </div>
        {/* Bookings Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <DashboardCard color="from-blue-200 to-blue-400" icon="clockCircle" title="Pending Bookings" value={pendingBookings?.data?.length} />
          <DashboardCard color="from-green-300 to-green-500" icon="checkCircle" title="Delivered Bookings" value={deliveredBookings?.data?.length} />
          <DashboardCard color="from-red-300 to-red-500" icon="closeCircle" title="Canceled Bookings" value={canceledBookings?.data?.length} />
          <DashboardCard color="from-gray-400 to-gray-600" icon="stop" title="Rejected Bookings" value={rejectedBookings?.data?.length} />
        </div>
        {/* Projections Section (Charts/Stats) */}
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Projections & Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center h-64">
              {/* Placeholder for a chart, e.g., bookings over time */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border border-blue-200">
                <span className="text-gray-400 text-lg">[Bookings Over Time Chart]</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-64">
              {/* Placeholder for a chart, e.g., user growth */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl border border-pink-200">
                <span className="text-gray-400 text-lg">[User Growth Chart]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AdminDashboardPage;

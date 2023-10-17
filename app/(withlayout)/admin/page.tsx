"use client";

import { message } from "antd";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
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
        message.success("welcome"); // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for the organization list; render the admin page directly
        message.success("welcome");
      }
    }
  }, [isLoaded, organizationList, router]);
  return (
    <div>
      <h1>You are at Admin Dashboard</h1>
    </div>
  );
};

export default AdminDashboardPage;

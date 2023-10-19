"use client";

import ServiceHomeCard from "@/components/ui/ServiceHomeCard";
import { useServicesQuery } from "@/redux/api/servicesApi";
import React from "react";

const AllServicespage = () => {
  const { data: allservices } = useServicesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  return (
    <div>
      <h1 className="text-blue-700 text-center mb-20 text-5xl">All Services</h1>
      <div className="grid grid-cols-4 mx-60 gap-10">
        {allservices?.data?.map((service: any) => (
          <ServiceHomeCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServicespage;

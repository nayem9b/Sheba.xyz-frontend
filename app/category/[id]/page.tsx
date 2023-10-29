"use client";

import { useSingleServicesQuery } from "@/redux/api/servicesApi";
import React, { useEffect, useState } from "react";
import ServiceHomeCard from "@/components/ui/ServiceHomeCard";

const ServicesUnderCategoryPage = ({ params }: { params: any }) => {
  const [servicesUnderCategory, setServicesUnderCategory] = useState<any>();
  const { id } = params;
  useEffect(() => {
    fetch(
      `https://sheba-backend-5gd0cndez-nayem9b.vercel.app/api/v1/services/category/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServicesUnderCategory(data?.data);
        console.log(data?.data);
      });
  }, [id]);
  console.log(servicesUnderCategory);
  return (
    <div>
      <h1 className="text-center">Services under this Category</h1>
      <div className="mx-auto">
        <div className="grid grid-cols-4 mx-60 gap-10 ">
          {servicesUnderCategory?.map((service: any) => (
            <ServiceHomeCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesUnderCategoryPage;

"use client";

import AllCategoryCard from "@/components/ui/AllCategoryCard";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import React from "react";

const AllCategoryPage = () => {
  const { data: allCategories } = useCategoriesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  return (
    <div>
      <h1 className="text-blue-600 text-center">All Categories</h1>
      <div className="grid grid-cols-4 mx-60 gap-10">
        {allCategories?.data?.map((category: any) => (
          <AllCategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllCategoryPage;

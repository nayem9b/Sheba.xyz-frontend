"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Search from "@/components/ui/Searchbar";
import banner from "@/Assets/home-banner.webp";
import FeedbackForm from "@/components/ui/FeedbackForm";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

const Homepage = () => {
  const { data: categoryData } = useCategoriesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  console.log(categoryData);
  return (
    <div>
      <div className="mt-20">
        <Image
          src={banner}
          alt="banner"
          height={460}
          placeholder="blur"
          className="object-fill w-full"
        ></Image>

        <Search />
      </div>
    </div>
  );
};

export default Homepage;

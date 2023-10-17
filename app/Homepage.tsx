"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Search from "@/components/ui/Searchbar";
import banner from "@/Assets/home-banner.webp";
import FeedbackForm from "@/components/ui/FeedbackForm";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

const Homepage = () => {
  const { data: categoryData } = useCategoriesQuery();
  console.log(categoryData);
  return (
    <div>
      <div className="relative">
        <Image
          src={banner}
          alt="banner"
          width={1920}
          height={460}
          className="object-cover"
        ></Image>
        <Search></Search>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Homepage;

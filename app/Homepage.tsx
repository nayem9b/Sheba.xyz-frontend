"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Search from "@/components/ui/Searchbar";
import banner from "@/Assets/home-banner.webp";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: categoryData } = useCategoriesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-[460px] w-full overflow-hidden">
        <Image
          src={banner}
          alt="banner"
          fill
          priority
          placeholder="blur"
          className="object-cover w-full h-full"
          sizes="100vw"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Search bar container */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.3
                }}
                className="w-full max-w-4xl transform -translate-y-10"
              >
                <h2 className="mb-6 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl font-sans">
                  Find the Best Services Near You
                </h2>
                <Search />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

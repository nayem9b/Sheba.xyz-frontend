import Link from "next/link";
import React from "react";

const AllCategoryCard = ({ category }: any) => {
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        href={`/category/${category?.id}`}
        className=" rounded-lg shadow-sm shadow-indigo-100 "
      >
        <div className="flex justify-center items-center">
          <img alt="Home" src={category?.image} className="w-40 h-40" />
        </div>

        <p className="font-medium mx-auto mb-4 mt-2 text-center text-black pb-3 ">
          {category?.title}
        </p>
      </Link>
    </div>
  );
};

export default AllCategoryCard;

import Link from "next/link";
import React from "react";

const CategoryHomeCard = ({ category }: any) => {
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        href={`/category/${category?.id}`}
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
      >
        <img
          alt="Home"
          src={category?.image}
          className="h-52 w-full rounded-md object-cover"
        />

        <div className="mt-2 text-center text-black font-semibold">
          <p className="font-medium mx-auto ">{category?.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryHomeCard;

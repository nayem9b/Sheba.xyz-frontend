import Link from "next/link";
import React from "react";

const CategoryHomeCard = ({ category }: any) => {
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        href={"/account"}
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 "
      >
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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

"use client";

import { usePostCategoryMutation } from "@/redux/api/categoryApi";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const AddCategorypage = () => {
  const router = useRouter();
  const [postCategory] = usePostCategoryMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const categoryName = form.name.value;
    const categorySendData = {
      title: categoryName,
    };
    fetch(`http://localhost:5000/api/v1/categories`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(categorySendData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          message.success("Category added successfully");
          message.success("Moved to service adding");
          router.push("/addservice");
        } else {
          message.error("Error adding category");
        }
      });
    form.reset();
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Create a category</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Category Name
            </label>

            <div className="relative">
              <input
                type="name"
                name="name"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="example: Car Wash"
              />
            </div>
          </div>

          <div className="flex flex-row-reverse">
            <button className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white cursor-pointer">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategorypage;

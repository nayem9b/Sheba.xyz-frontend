"use client";

import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { Button, Select, message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditServicepage = ({ params }: { params: any }) => {
  const router = useRouter();
  const { id } = params;
  const [selectData, setSelectData] = useState();
  const [serviceData, setServiceData] = useState<any>();
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
    setSelectData(value);
  };
  const { data: allCategories } = useCategoriesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const categoryOptions = allCategories?.data?.map((category: any) => {
    return {
      label: category?.title,
      value: category?.id,
    };
  });
  useEffect(() => {
    fetch(`http://localhost:3333/api/v1/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceData(data?.data);
      });
  }, [id]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    message.loading("Processing.....");
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const details = form.details.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=4879859cdc7827193ef39d9fcfdd7c52`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        message.loading("uploading");
        console.log(imgData);
        if (imgData) {
          const addServiceSendData = {
            name: name,
            price: price,
            details: details,
            image: imgData.data.url,
            categoryId: selectData,
            rating: "5",
          };

          fetch(`http://localhost:3333/api/v1/services/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addServiceSendData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              message.success("successful");
              form.reset();
              router.push("/addservice");
            });
        }
      });
  };
  return (
    <div>
      <div className="w-7/12 mx-auto">
        <h1 className="mt-16 text-center">Edit Service Details </h1>
        <label>Select</label>
        <form onSubmit={handleSubmit}>
          <Select
            className="w-full"
            defaultValue="Select Category"
            onChange={handleChange}
            style={{ width: 170 }}
            options={categoryOptions}
          />
          <div>
            <label> Name</label>
            <input
              autoFocus
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
              placeholder={serviceData?.name}
              type="text"
              name="name"
            />
            <label>Price</label>
            <input
              required
              type="number"
              className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
              placeholder={serviceData?.price}
              name="price"
            />
            <label>Details</label>

            <textarea
              className="w-full px-3 h-36 text-gray-700 border rounded-lg focus:outline-none"
              name="details"
              placeholder={serviceData?.details}
            ></textarea>
            <div>
              <label
                htmlFor="image"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Image
              </label>

              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200  placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button
              htmlType="submit"
              className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white cursor-pointer"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServicepage;

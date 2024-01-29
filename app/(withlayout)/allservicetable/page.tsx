/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ShebaTable from "@/components/ui/ShebaTable";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useDeleteServiceMutation } from "@/redux/api/servicesApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Select, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import * as yup from "yup";
import { serviceSchema } from "@/schemas/service";

const allServices = () => {
  const [selectData, setSelectData] = useState();
  const { data: allCategories } = useCategoriesQuery();
  const categoryOptions = allCategories?.data?.map((category: any) => {
    return {
      label: category?.title,
      value: category?.id,
    };
  });
  const handleChange = (value: any) => {
    setSelectData(value);
    console.log(`selected ${value}`);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name.value;
    const price = form?.price?.value;
    console.log("price", price);
    const details = form?.details.value;
    const status = form?.status?.value;
    console.log(selectData);
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
            price: parseInt(price),
            details: details,
            image: imgData.data.url,
            categoryId: selectData,
            status: status,
            rating: "5",
          };

          console.log(addServiceSendData);

          fetch(`http://localhost:3333/api/v1/create-service`, {
            method: "POST",
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
            });
        }
      });
  };
  return (
    <div>
      <div className="">
        <div className="w-7/12 mx-auto">
          <h1>Add a service </h1>
          <label> Select</label>
          <form onSubmit={handleSubmit}>
            <Select
              className="w-full"
              defaultValue="Select Category"
              onChange={handleChange}
              style={{ width: 170 }}
              options={categoryOptions}
            />
            <div className="">
              <label className="mt-5"> Select Status</label>
              <select name="status" className="w-full" id="country">
                <option value="available">available</option>
                <option value="upcoming">upcoming</option>
              </select>
            </div>
            <div>
              <label> Name</label>
              <input
                autoFocus
                required
                className="w-full rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
                placeholder="Service Name"
                type="text"
                name="name"
              />
              <label>Price</label>
              <input
                required
                type="number"
                className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
                placeholder="Price"
                name="price"
              />
              <label>Details</label>

              <textarea
                className="w-full px-3 h-36 text-gray-700 border rounded-lg focus:outline-none"
                name="details"
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

            <div className="flex justify-center text-center mt-10">
              <Button
                htmlType="submit"
                type="primary"
                // className="rounded-lg bg-blue-500  text-sm font-medium text-white cursor-pointer
                value="large"
                size="large"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default allServices;

"use client";

import React, { useState } from "react";
import { Button, Select, Space, message } from "antd";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import ImageUpload from "@/components/Form/ImageUpload";

import { useAllUsersQuery } from "@/redux/api/userApi";
import Link from "next/link";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ShebaTable from "@/components/ui/ShebaTable";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/servicesApi";

type UserData = {
  name: string;
  price: any;
  details: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddService = () => {
  const [deleteService] = useDeleteServiceMutation();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: allServices, isLoading } = useServicesQuery();
  console.log(allServices?.data?.data);
  const meta = allServices?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      console.log("Hello");
      const res = await deleteService(id);
      console.log(res);
      if (res?.data?.statusCode === 200) {
        message.success("Service Deleted successfully");
      } else if (res?.error?.status === "PARSING_ERROR") {
        message.error("Service is being used by user. Delete Prohibited");
      }
    } catch (err: any) {
      message.error("Service is being used by user. Delete Prohibited");
      message.error(err.message);
    }
  };
  const [selectData, setSelectData] = useState();
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
    setSelectData(value);
  };
  console.log(selectData);
  const { data: allCategories } = useCategoriesQuery();
  const categoryOptions = allCategories?.data?.map((category: any) => {
    return {
      label: category?.title,
      value: category?.id,
    };
  });

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/addservice/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name.value;
    const price = form?.price.value;
    const details = form?.details.value;

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

          fetch(`http://localhost:5000/api/v1/create-service`, {
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
    <div className="flex">
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

            <div className="flex flex-row-reverse mt-10">
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
      <div className="w-1/2">
        <h1 className="mx-auto text-center">All Services</h1>
        <ShebaTable
          loading={isLoading}
          columns={columns}
          dataSource={allServices?.data?.data}
          pageSize={size}
          totalPages={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        ></ShebaTable>
      </div>
    </div>
  );
};

export default AddService;

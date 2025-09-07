"use client";

import React, { useState } from "react";
import { Button, message, Input, Select, Card } from "antd";
import { SearchOutlined } from '@ant-design/icons';
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
import { setToLocalStorage } from "@/utils/local-storage";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectData, setSelectData] = useState();
  const { data: allServices, isLoading } = useServicesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
    page,
    size,
    sortBy,
    sortOrder,
    searchTerm,
    category: selectedCategory
  });
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

  const handleChange = (value: any) => {
    setSelectData(value);
    console.log(`selected ${value}`);
  };
  const handleStatusChange = (value: any) => {
    console.log(`selected ${value}`);
    setToLocalStorage("status", value as string);
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
    setPage(page);
    setSize(pageSize);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
          All Services
        </h1>
        <div className="flex space-x-4">
          <Link href="/addservice/create">
            <Button 
              type="primary" 
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              size="large"
            >
              Add New Service
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allServices?.data?.map((service: any) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                        {service.location}
                      </p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${service.price}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/addservice/edit/${service.id}`}>
                        <Button
                          type="text"
                          icon={<EditOutlined className="text-blue-500" />}
                          className="hover:bg-blue-50 dark:hover:bg-gray-600 rounded-full"
                        />
                      </Link>
                      <Button
                        danger
                        type="text"
                        icon={<DeleteOutlined />}
                        onClick={() => deleteHandler(service.id)}
                        className="hover:bg-red-50 dark:hover:bg-gray-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Showing <span className="font-medium">{(page - 1) * size + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min(page * size, meta?.total || 0)}
              </span>{' '}
              of <span className="font-medium">{meta?.total}</span> results
            </span>
            <div className="flex space-x-2">
              <Button 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Previous
              </Button>
              <Button 
                onClick={() => setPage(p => p + 1)}
                disabled={page * size >= (meta?.total || 0)}
                className="hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;

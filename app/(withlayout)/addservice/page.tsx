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
  const [selectData, setSelectData] = useState();
  const { data: allServices, isLoading } = useServicesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
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
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
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
    <div className="flex">
      <div className="w-full">
        <h1 className="mx-auto text-center mt-16">All Services</h1>
        <ShebaTable
          loading={isLoading}
          columns={columns}
          dataSource={allServices?.data}
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

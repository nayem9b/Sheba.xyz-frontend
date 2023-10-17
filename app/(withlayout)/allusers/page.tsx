"use client";

import ShebaTable from "@/components/ui/ShebaTable";
import { useAllUsersQuery } from "@/redux/api/userApi";
import { Button, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useOrganizationList } from "@clerk/nextjs";
import dayjs from "dayjs";

const AllUsers = () => {
  const router = useRouter();
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: allUsers, isLoading } = useAllUsersQuery();
  console.log(allUsers?.data);
  const meta = allUsers?.meta;

  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list

      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "admin"
      );

      // If the user is not an admin, redirect to the homepage
      if (!adminOrganization || adminOrganization.membership.role !== "admin") {
        router.push("/");
        message.success("welcome"); // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for the organization list; render the admin page directly
        message.success("welcome");
      }
    }
  }, [isLoaded, organizationList, router]);

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      console.log("Hello");
      // const res = await deleteAcademicDepartment(id);
      // if (res) {
      //   message.success("Department Deleted successfully");
      // }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/academic/department/edit/${data?.id}`}>
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
    <div>
      <ShebaTable
        loading={isLoading}
        columns={columns}
        dataSource={allUsers?.data}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      ></ShebaTable>
    </div>
  );
};

export default AllUsers;

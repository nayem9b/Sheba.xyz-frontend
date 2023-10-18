// import ShebaTable from "@/components/ui/ShebaTable";
// import React, { useState } from "react";
// import Link from "next/link";
// import { message } from "antd";
// const ManageUserspage = () => {
//   const deleteHandler = async (id: string) => {
//     message.loading("Deleting.....");
//     try {
//       console.log("Hello");
//       //   const res = await deleteService(id);
//       //   if (res) {
//       //     message.success("Service Deleted successfully");
//       //   } else {
//       //     message.error("Service is being used by user. Delete Prohibited");
//       //   }
//     } catch (err: any) {
//       message.error("Service is being used by user. Delete Prohibited");
//       message.error(err.message);
//     }
//   };
//   const [selectData, setSelectData] = useState();
//   const handleChange = (value: any) => {
//     console.log(`selected ${value}`);
//     setSelectData(value);
//   };
//   console.log(selectData);

//   const onPaginationChange = (page: number, pageSize: number) => {
//     console.log("Page:", page, "PageSize:", pageSize);
//     setPage(page);
//     setSize(pageSize);
//   };
//   const onTableChange = (pagination: any, filter: any, sorter: any) => {
//     const { order, field } = sorter;
//     // console.log(order, field);
//     setSortBy(field as string);
//     setSortOrder(order === "ascend" ? "asc" : "desc");
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//     },
//     {
//       title: "Location",
//       dataIndex: "location",
//     },
//     {
//       title: "Action",
//       render: function (data: any) {
//         return (
//           <>
//             <Link href={`/admin/academic/department/edit/${data?.id}`}>
//               <Button
//                 style={{
//                   margin: "0px 5px",
//                 }}
//                 onClick={() => console.log(data)}
//                 type="primary"
//               >
//                 <EditOutlined />
//               </Button>
//             </Link>
//             <Button
//               onClick={() => deleteHandler(data?.id)}
//               type="primary"
//               danger
//             >
//               <DeleteOutlined />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];
//   return (
//     <div>
//       <h1 className="mx-auto text-center">All Services</h1>
//       <ShebaTable
//         loading={isLoading}
//         columns={columns}
//         dataSource={allServices?.data?.data}
//         pageSize={size}
//         totalPages={meta?.total}
//         showSizeChanger={true}
//         onPaginationChange={onPaginationChange}
//         onTableChange={onTableChange}
//         showPagination={true}
//       ></ShebaTable>
//     </div>
//   );
// };

// export default ManageUserspage;

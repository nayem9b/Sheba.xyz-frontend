import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";

const HomeSyncBreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/" className="text-gray-200 ">
          <HomeOutlined className="text-xl " />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link} className="text-gray-200 text-xl">
            <span className="mb-4"> {item.label}</span>
          </Link>
        ) : (
          <span className="">{item.label}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbItems}></Breadcrumb>;
};

export default HomeSyncBreadCrumb;

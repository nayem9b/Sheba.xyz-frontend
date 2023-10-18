"use client";

import { useEffect, useState } from "react";
import ServiceHomeCard from "@/components/ui/ServiceHomeCard";
import ContentsCard from "@/components/ui/ContentsCard";
import { useAllContentsQuery } from "@/redux/api/contentsApi";

const AllContentspage = () => {
  // const [contentsData, setContentsData] = useState<any>();
  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/v1/contents`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setContentsData(data.data);
  //     });
  // }, []);

  const { data: contentsData } = useAllContentsQuery();

  return (
    <div>
      <div className="grid grid-cols-4 mx-60 gap-10">
        {contentsData?.data?.map((content: any) => (
          <ContentsCard key={content.name} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AllContentspage;

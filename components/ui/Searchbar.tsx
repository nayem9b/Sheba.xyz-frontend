import { AudioOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Input, Select, Space } from "antd";
import type { SearchProps } from "../Search";
import { useServicesQuery } from "@/redux/api/servicesApi";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const SearchPage = () => {
  const [location, setLocation] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [selectedField, setSelectedField] = useState<string>();
  const { data: allServices } = useServicesQuery();
  const onSearch: SearchProps["onSearch"] = (value: any, _e: any, info: any) =>
    console.log(value);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedField(value);
  };

  return (
    <div>
      <form>
        <Search
          placeholder="input search text"
          name="searchField"
          style={{
            width: "486px",
            height: "60px",
            paddingBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            position: "absolute",
            bottom: "300px",
            left: 0,
          }}
          onSearch={onSearch}
          enterButton
        />
        <Select
          defaultValue="Filter"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "name", label: "Name" },
            { value: "location", label: "Location" },
            { value: "category", label: "Category" },
          ]}
        />
        <Button htmlType="submit" type="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchPage;

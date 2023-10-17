import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";
import type { SearchProps } from "../Search";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch: SearchProps["onSearch"] = (value: any, _e: any, info: any) =>
  console.log(value);


  

const App: React.FC = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
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
  </Space>
);

export default App;

import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";

const text = `
  If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "Do I have to pay any charge if I don’t take any service?",
    children: (
      <p>
        If you don’t avail any services for your AC after our Service Provider
        send a technician at your doorstep then you only have to pay the
        visiting charge which is BDT 200.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: " Do I have to pay advance money before availing your service?",
    children: (
      <p>
        Of course not! After service completion you will receive a text on your
        mobile from Sheba.xyz then you have to pay through Online or Cash on
        Delivery.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Do you give Materials/Parts warranty?",
    children: (
      <p>
        Certainly. You can buy necessary and required materials/parts by
        yourself. But any operational dysfunctionality won’t be held responsible
        by our Service Providers and Sheba.xyz itself.
      </p>
    ),
    style: panelStyle,
  },
];

const ServiceFAQ = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      ghost
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
      className="font-semibold"
    />
  );
};

export default ServiceFAQ;

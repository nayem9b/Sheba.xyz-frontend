/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  DownloadOutlined,
  EditOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import React from "react";
import { Image, Space } from "antd";

const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);
  const src = user?.imageUrl;

  const onDownload = () => {
    fetch(src as any)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  console.log(user);
  return (
    <div>
      <h1 className="text-center">Personal Info</h1>
      <Image
        alt="User image"
        style={{
          margin: "auto", // Center horizontally
          display: "block", // Remove any inline space
        }}
        className="mx-auto flex justify-center"
        width={200}
        src={src}
        preview={{
          toolbarRender: (
            _,
            {
              transform: { scale },
              actions: {
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomOut,
                onZoomIn,
              },
            }
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <DownloadOutlined onClick={onDownload} />
              <SwapOutlined rotate={90} onClick={onFlipY} />
              <SwapOutlined onClick={onFlipX} />
              <RotateLeftOutlined onClick={onRotateLeft} />
              <RotateRightOutlined onClick={onRotateRight} />
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
            </Space>
          ),
        }}
      />

      <div className="flex">
        <p className="text-lg mt-6"> Edit Data : </p>

        <div className="mt-6 ml-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="mx-auto  ">
        <h1>
          Name : {user?.fullName ? user?.fullName : "Name is not updated "}
        </h1>
        <h1>Email : {user?.primaryEmailAddress?.emailAddress}</h1>
        <h1>User Name : {user?.username}</h1>
      </div>
    </div>
  );
};

export default page;

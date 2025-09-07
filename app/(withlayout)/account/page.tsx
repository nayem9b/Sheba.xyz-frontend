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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center py-10">
      <div className="bg-white/90 shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-blue-100">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative">
            <Image
              alt="User image"
              className="rounded-full border-4 border-blue-200 shadow-lg object-cover"
              width={140}
              height={140}
              src={src}
              style={{ background: '#f3f4f6' }}
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
            <div className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs shadow-md">Profile</div>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 tracking-tight">{user?.fullName ? user?.fullName : "Name is not updated"}</h2>
          <p className="text-gray-500 text-sm">{user?.primaryEmailAddress?.emailAddress}</p>
          <p className="text-gray-400 text-xs">@{user?.username}</p>
        </div>
        <div className="flex items-center justify-between bg-blue-50 rounded-xl px-4 py-3 mb-6">
          <span className="text-base font-medium text-blue-700 flex items-center gap-2">
            <EditOutlined className="text-blue-400" /> Edit Data
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Full Name:</span>
            <span className="text-gray-600">{user?.fullName ? user?.fullName : "Not updated"}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-600">{user?.primaryEmailAddress?.emailAddress}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Username:</span>
            <span className="text-gray-600">{user?.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

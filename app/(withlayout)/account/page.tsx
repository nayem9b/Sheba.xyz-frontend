/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useUser } from "@clerk/nextjs";
import {
  DownloadOutlined,
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
      <div className="mx-auto flex justify-center ">
        <div className="flex w-3/6 justify-around ">
          <h1>Name</h1>
          <h1>{user?.fullName}</h1>
        </div>
        <div className="flex w-3/6 justify-around ">
          <h1>Email</h1>
          <h1>{user?.primaryEmailAddress?.emailAddress}</h1>
        </div>
        <div className="flex w-3/6 justify-around ">
          <h1>User Name</h1>
          <h1>{user?.username}</h1>
        </div>
      </div>
    </div>
  );
};

export default page;

// const App: React.FC = () => {
//   // or you can download flipped and rotated image
//   // https://codesandbox.io/s/zi-ding-yi-gong-ju-lan-antd-5-7-0-forked-c9jvmp
//   const onDownload = () => {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const url = URL.createObjectURL(new Blob([blob]));
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "image.png";
//         document.body.appendChild(link);
//         link.click();
//         URL.revokeObjectURL(url);
//         link.remove();
//       });
//   };

//   return (
//     <Image
//       width={200}
//       src={src}
//       preview={{
//         toolbarRender: (
//           _,
//           {
//             transform: { scale },
//             actions: {
//               onFlipY,
//               onFlipX,
//               onRotateLeft,
//               onRotateRight,
//               onZoomOut,
//               onZoomIn,
//             },
//           }
//         ) => (
//           <Space size={12} className="toolbar-wrapper">
//             <DownloadOutlined onClick={onDownload} />
//             <SwapOutlined rotate={90} onClick={onFlipY} />
//             <SwapOutlined onClick={onFlipX} />
//             <RotateLeftOutlined onClick={onRotateLeft} />
//             <RotateRightOutlined onClick={onRotateRight} />
//             <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
//             <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
//           </Space>
//         ),
//       }}
//     />
//   );
// };

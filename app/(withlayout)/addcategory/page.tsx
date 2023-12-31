"use client";

import { usePostCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Upload, message } from "antd";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useState } from "react";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AddCategorypage = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const router = useRouter();
  const [postCategory] = usePostCategoryMutation();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const categoryName = form.name.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=4879859cdc7827193ef39d9fcfdd7c52`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        message.loading("uploading");
        console.log(imgData);
        if (imgData) {
          const categorySendData = {
            title: categoryName,
            image: imgData.data.url,
          };

          fetch(`http://localhost:5000/api/v1/categories`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(categorySendData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data) {
                message.success("Category added successfully");
                message.success("Moved to service adding");
                router.push("/addservice");
              } else {
                message.error("Error adding category");
              }
            });
          form.reset();
        }
      });
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
    const handleChange: UploadProps["onChange"] = (
      info: UploadChangeParam<UploadFile>
    ) => {
      if (info.file.status === "uploading") {
        setLoading(true);
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setLoading(false);
          setImageUrl(url);
        });
      }
    };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl text-blue-500 sm:text-3xl">
            Create a category
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label
              htmlFor="category_name"
              className="block text-sm text-gray-800 mb-2"
            >
              Category Name
            </label>

            <input
              type="name"
              name="name"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>
          <label htmlFor="image" className="block text-sm text-gray-800 mb-2">
            Image
          </label>

          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200  placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
          />

          <div className="flex flex-row-reverse">
            <button className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white cursor-pointer">
              Create
            </button>
            <Button type="primary" className="px-5 my-3 text-center">
              Create
            </Button>
          </div>
        </form>
      </div>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:5000/api/v1/"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default AddCategorypage;

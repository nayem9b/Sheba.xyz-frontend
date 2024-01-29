/* eslint-disable react/jsx-key */
"use client";
import { PlusOutlined } from "@ant-design/icons";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  message,
} from "antd";
import { useMultistepForm } from "@/components/Form/useMultistepForm";
import { UserForm } from "@/components/Form/UserForm";
import { AddressForm } from "@/components/Form/AddressForm";
import { AccountForm } from "@/components/Form/AccountForm";
import { setToLocalStorage } from "@/utils/local-storage";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PurchasePage = ({ params }: { params: any }) => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [serviceData, setServiceData] = useState<any>();
  console.log(serviceData);
  const serviceInfo = serviceData?.data;
  console.log(serviceInfo);
  const { id } = params;

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3333/api/v1/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        console.log(data);
      });
  }, [id]);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: any) {
    message.loading("processing");
    e.preventDefault();
    const form = e.target;
    const name = form?.fullName?.value;
    if (name) {
      setToLocalStorage("name", name);
    }
    const email = form?.email?.value;

    const contactNo = form?.contactNo?.value;
    if (contactNo) {
      setToLocalStorage("contactNo", contactNo);
    }
    const street = form?.street?.value;
    if (street) {
      setToLocalStorage("street", street);
    }
    const city = form?.city?.value;
    if (city) {
      setToLocalStorage("city", city);
    }
    const zip = form?.zip?.value;
    const confirmation = form?.confirmation?.value;
    console.log(confirmation);

    if (email) {
      setToLocalStorage("email", email);
    }

    if (zip) {
      setToLocalStorage("zip", zip);
    }

    if (!isLastStep) return next();

    const SendPurchaseInfo = {
      userId: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
      name: localStorage.getItem("name"),
      servicesId: id,
      date: localStorage.getItem("date"),
      contactNo: parseInt(localStorage.getItem("contactNo") as string),
      street: localStorage.getItem("street"),
      zip: localStorage.getItem("zip"),
      time: localStorage.getItem("time"),
    };
    console.log(SendPurchaseInfo);
    if (confirmation === "I Agree") {
      fetch(`http://localhost:3333/api/v1/book`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(SendPurchaseInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          message.success("Successfully booked order");
          router.push("/mybookings");
        });
    }
  }
  return (
    <div className="flex justify-around gap-16 mx-40 mt-32">
      <div className="w-1/2">
        <img
          alt="Art"
          src={serviceInfo?.image}
          className="h-64  object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {serviceInfo?.name}
        </h3>

        <p className="mt-2 text-xl text-gray-700">
          <span className="font-semibold">Price :</span> {serviceInfo?.price} Tk
        </p>
        <p className="mt-2 text-xl text-gray-700">
          Rating : {serviceInfo?.rating} ⭐
        </p>
        <p className="mt-2 text-xl text-gray-700">
          Location : {serviceInfo?.location}
        </p>
        <p className="mt-2 text-xl text-gray-700 text-justify">
          {serviceInfo?.details}
        </p>
      </div>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          maxWidth: "max-content",
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}

            <Button type="primary" size="large" htmlType="submit">
              {isLastStep ? "Finish" : "Next"}
            </Button>

            {/* <button type="submit">{isLastStep ? "Finish" : "Next"}</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;

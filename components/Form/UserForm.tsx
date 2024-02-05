import { useUser } from "@clerk/nextjs";
import { FormWrapper } from "./FormWrapper";

import type { Dayjs } from "dayjs";
import { DatePicker, Input, Space, TimePicker } from "antd";
import { setToLocalStorage } from "@/utils/local-storage";
import type { DatePickerProps } from "antd";
type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const onChange = (time: Dayjs | unknown, timeString: string) => {
  console.log(time, timeString);
  setToLocalStorage("time", time as string);
};

const onDateChange: DatePickerProps["onChange"] = (
  date: any,
  dateString: any
) => {
  setToLocalStorage("date", dateString as string);
  console.log(dateString);
};
export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { RangePicker } = DatePicker;
  return (
    <FormWrapper title="User Details">
      <label className="text-white text-xl ml-10 mt-3">Email</label>
      {/* <Input placeholder={user?.primaryEmailAddress?.emailAddress} /> */}
      <input
        autoFocus
        required
        disabled
        className="w-80 rounded-lg text-lg border-gray-200 p-3  shadow-sm"
        placeholder={user?.primaryEmailAddress?.emailAddress}
        type="text"
        value={user?.primaryEmailAddress?.emailAddress}
        name="email"
      />
      <label className="text-white text-xl ml-10 mt-3">Full Name</label>
      <input
        required
        type="text"
        className="w-80 text-lg rounded-lg border-gray-200 p-3 pe-12 shadow-sm"
        placeholder="Full Name"
        name="fullName"
      />
      <label className="text-white text-xl ml-10 mt-3">Contact Number</label>
      <input
        required
        type="number"
        className="w-80 rounded-lg text-lg border-gray-200 p-3 pe-12 shadow-sm"
        placeholder="Contact Number"
        name="contactNo"
      />

      <label className="text-white text-xl ml-10 py-2">Date & Time</label>
      <div className="flex">
        <DatePicker onChange={onDateChange} className="w-36" />
        <TimePicker
          use12Hours
          format="h:mm:ss A"
          onChange={onChange}
          className="w-40 ml-4"
        />
      </div>
    </FormWrapper>
  );
}

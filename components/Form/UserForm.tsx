import { useUser } from "@clerk/nextjs";
import { FormWrapper } from "./FormWrapper";

import type { Dayjs } from "dayjs";
import { DatePicker, Space, TimePicker } from "antd";
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
      <label>Email</label>
      <input
        autoFocus
        required
        disabled
        className="w-full rounded-lg text-lg border-gray-200 p-4 pe-12 shadow-sm"
        placeholder={user?.primaryEmailAddress?.emailAddress}
        type="text"
        value={user?.primaryEmailAddress?.emailAddress}
        name="email"
      />
      <label>Full Name</label>
      <input
        required
        type="text"
        className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
        placeholder="Full Name"
        name="fullName"
      />
      <label>Contact Number</label>
      <input
        required
        type="number"
        className="w-full rounded-lg text-lg border-gray-200 p-4 pe-12 shadow-sm"
        placeholder="Contact Number"
        name="contactNo"
      />

      <label>Date</label>
      <DatePicker onChange={onDateChange} />
      <label>Time</label>
      <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    </FormWrapper>
  );
}

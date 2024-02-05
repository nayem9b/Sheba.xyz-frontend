import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label className="text-white text-xl ml-10 mt-3">Street</label>
      <input
        autoFocus
        required
        className="w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="Street"
        type="text"
        name="street"
      />
      <label className="text-white text-xl ml-10 mt-3">City</label>
      <input
        required
        type="text"
        className="w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="City"
        name="city"
      />
      <label className="text-white text-xl ml-10 mt-3">State</label>
      <input
        required
        type="text"
        className="w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="State"
        name="state"
      />
      <label className="text-white text-xl ml-10 mt-3">Zip</label>
      <input
        required
        type="text"
        className="w-80 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="zip"
        name="zip"
      />
    </FormWrapper>
  );
}

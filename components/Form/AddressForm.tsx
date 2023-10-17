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
      <label>Street</label>
      <input
        autoFocus
        required
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="Street"
        type="text"
        name="street"
      />
      <label>City</label>
      <input
        required
        type="text"
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="City"
        name="city"
      />
      <label>State</label>
      <input
        required
        type="text"
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="State"
        name="state"
      />
      <label>Zip</label>
      <input
        required
        type="text"
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        placeholder="zip"
        name="zip"
      />
    </FormWrapper>
  );
}

import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Confirmation">
      <div>
        <label className="mt-3 text-lg">Confirmation</label>
        <input
          autoFocus
          required
          className="w-full rounded-lg text-lg border-gray-200 p-4 pe-12 shadow-sm"
          placeholder="I Agree"
          type="text"
          name="confirmation"
        />
        <p>
          Type <span className="text-blue-500">I Agree</span> to confirm your
          booking
        </p>
      </div>
    </FormWrapper>
  );
}

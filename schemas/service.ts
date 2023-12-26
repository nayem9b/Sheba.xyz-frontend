import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.number().positive().integer().required("Price is required"),
  details: yup.string().required("Details is required"),
});

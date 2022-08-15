import * as yup from "yup";

const ValidationSchema = yup.object().shape({
  name: yup.string().trim().required("Required."),
  email: yup.string().trim().email("Invalid e-mail.").required("Required."),
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "Must be exactly 10 digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Required."),
  address: yup.string().trim().required("Required"),
  suburb: yup.string().trim().required("Required"),
  state: yup.string().trim().required("Required"),
  pcode: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "Must be exactly 4 digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits")
    .required("Required."),
  payment: yup.string().required("Select a payment method"),
});

export default ValidationSchema;

import * as Yup from "yup";

export const portfolioValidationSchema = Yup.object({
  name: Yup.string().required("Required"),
  value: Yup.number().required("Required").positive("Must be positive"),
});

export const transactionValidationSchema = Yup.object({
  type: Yup.string().required("Required"),
  amount: Yup.number().required("Required").positive("Must be positive"),
});

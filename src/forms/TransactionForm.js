import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PortfolioContext } from "../context/PortfolioContext";

function TransactionForm() {
  const { addTransaction } = useContext(PortfolioContext);

  const formik = useFormik({
    initialValues: {
      type: "",
      amount: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Required"),
      amount: Yup.number().required("Required").positive("Must be positive"),
    }),
    onSubmit: (values) => {
      addTransaction(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Transaction Type:
        <select
          name="type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
        >
          <option value="" label="Select type" />
          <option value="buy" label="Buy" />
          <option value="sell" label="Sell" />
          <option value="transfer" label="Transfer" />
        </select>
        {formik.touched.type && formik.errors.type ? (
          <div>{formik.errors.type}</div>
        ) : null}
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div>{formik.errors.amount}</div>
        ) : null}
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;

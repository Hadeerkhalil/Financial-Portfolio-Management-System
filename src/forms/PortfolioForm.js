import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PortfolioContext } from "../context/PortfolioContext";

function PortfolioForm({ editingPortfolio, setEditingPortfolio }) {
  const { addPortfolio, portfolios, setPortfolios } =
    useContext(PortfolioContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      value: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      value: Yup.number().required("Required").positive("Must be positive"),
    }),
    onSubmit: (values) => {
      if (editingPortfolio) {
        const updatedPortfolios = portfolios.map((portfolio) =>
          portfolio.name === editingPortfolio.name ? values : portfolio
        );
        setPortfolios(updatedPortfolios);
        setEditingPortfolio(null);
      } else {
        addPortfolio(values);
      }
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (editingPortfolio) {
      formik.setValues(editingPortfolio);
    }
  }, [editingPortfolio]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Portfolio Name:
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Value:
        <input
          type="number"
          name="value"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.value}
        />
        {formik.touched.value && formik.errors.value ? (
          <div>{formik.errors.value}</div>
        ) : null}
      </label>
      <button type="submit">
        {editingPortfolio ? "Update Portfolio" : "Add Portfolio"}
      </button>
    </form>
  );
}

export default PortfolioForm;

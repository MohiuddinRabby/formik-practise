import React from "react";
import { useFormik } from "formik";

const FormOne = () => {
  const initialValues = {
    name: "",
    email: "",
  };
  const onSubmit = (values) => {
    console.log("values", values);
  };
  const validate = (formValues) => {
    let errors = {};
    if (!formValues.name) {
      errors.name = "Name required";
    }
    if (!formValues.email) {
      errors.email = "Email required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="name"
          />
          {formik.errors.name ? (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          ) : null}
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            email="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="email"
          />
          {formik.errors.email ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : null}
        </div>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormOne;

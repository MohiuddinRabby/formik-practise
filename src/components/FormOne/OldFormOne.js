import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const OldFormOne = () => {
  const initialValues = {
    name: "",
    email: "",
  };
  const onSubmit = (values) => {
    console.log("values", values);
  };
  // const validate = (formValues) => {
  //   let errors = {};
  //   if (!formValues.name) {
  //     errors.name = "Name required";
  //   }
  //   if (!formValues.email) {
  //     errors.email = "Email required";
  //   }
  //   return errors;
  // };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name Required"),
    email: Yup.string().required("Email Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
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
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="name"
          />
          {formik.touched.name && formik.errors.name ? (
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
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="email"
          />
          {formik.touched.email && formik.errors.email ? (
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

export default OldFormOne;

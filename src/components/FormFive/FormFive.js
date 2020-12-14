import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../FormThree/FormThree.css";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});
const onSubmit = (values) => {
  console.log(values);
};
const FormFive = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" className="form-control" />
          <ErrorMessage name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" className="form-control" />
          <ErrorMessage name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormFive;

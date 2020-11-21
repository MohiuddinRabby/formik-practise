import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormOnePractise = () => {
  const initialValues = {
    name: "",
    email: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("User Name Required!"),
    email: Yup.string().required("Email Required!"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="container">
          <div className="form-group">
            <label>Name</label>
            <Field
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="name"
            />
            <ErrorMessage name="name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Field type="Email" className="form-control" name="email" />
            <ErrorMessage name="email" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormOnePractise;

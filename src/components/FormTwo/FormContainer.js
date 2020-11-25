import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormContainer = () => {
  const initialValues = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => {
    console.log("form values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <button type="submit" className="btn btn-primary">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
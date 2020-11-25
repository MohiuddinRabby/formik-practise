import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const FormOne = () => {
  const initialValues = {
    name: "",
    email: "",
    object: {
      objectOne: "",
      objectTwo: "",
    },
  };
  const onSubmit = (values) => {
    console.log("values", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name Required"),
    email: Yup.string().required("Email Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name: </label>
          <Field type="text" id="name" name="name" placeholder="name" />
          <ErrorMessage name="name" />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <Field type="email" id="email" name="email" placeholder="email" />
          <ErrorMessage name="email" />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="objectOne">objectOne: </label>
          <Field
            type="text"
            id="objectOne"
            name="object.objectOne"
            placeholder="objectOne"
          />
          <ErrorMessage name="object.objectOne" />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="objectTwo">objectOne: </label>
          <Field
            type="text"
            id="objectTwo"
            name="object.objectTwo"
            placeholder="objectTwo"
          />
          <ErrorMessage name="object.objectTwo" />
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormOne;
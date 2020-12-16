/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { createUser } from "./helper";

// Validation schema for bank transfer
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name required"),
  userEmail: Yup.string().email().required("Email required"),
  userCityName: Yup.object().shape({
    label: Yup.string().required("City Name required"),
    value: Yup.string().required("City Name required"),
  }),
});
const initialValues = {
  userName: "",
  userEmail: "",
  userCityName: "",
};

const FormTwo = () => {
  const cityNameDDL = [
    { value: 1, label: "Dhaka" },
    { value: 2, label: "Chittagong" },
    { value: 3, label: "Sylhet" },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const userData = {
            title: values?.userName,
            body: values?.userEmail,
            userId: 1,
          };
          resetForm();
          createUser(userData);
        }}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          isValid,
        }) => (
          <>
            <Form>
              <div className="container">
                <div className="form-group row py-5">
                  <div className="col-lg-4">
                    <label>User Name</label>
                    <Field
                      className="form-control"
                      name="userName"
                      placeholder="User Name"
                      value={values?.userName}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userName" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label>Email</label>
                    <Field
                      className="form-control"
                      name="userEmail"
                      placeholder="Email"
                      value={values?.userEmail}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userEmail" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label>City</label>
                    <Select
                      name="userCityName"
                      onChange={(valueOption) => {
                        setFieldValue("userCityName", valueOption);
                      }}
                      options={cityNameDDL || []}
                      value={values?.userCityName}
                    />
                  </div>

                  <div className="col-lg-4">
                    <button
                      className="btn btn-primary mt-5"
                      type="submit"
                      disabled={!isValid}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormTwo;

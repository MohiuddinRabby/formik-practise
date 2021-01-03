import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import ddlOne from "./ddlOne";
import ddlTwo from "./ddlTwo";
// Validation schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name required"),
  userEmail: Yup.string().email().required("Email required"),
  ddlOne: Yup.object().shape({
    label: Yup.string().required("City Name required"),
    value: Yup.string().required("City Name required"),
  }),
});
const initialValues = {
  userName: "",
  userEmail: "",
  ddlOne: "",
};
const FormSix = () => {
  // eslint-disable-next-line no-unused-vars
  const [DDLOne, setDDL] = useState(ddlOne);
  // eslint-disable-next-line no-unused-vars
  const [DDLTwo, setDDLTwo] = useState(ddlTwo);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(`values`, values);
          resetForm();
        }}
      >
        {({ values, setFieldValue, isValid }) => (
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
                    <label>Dropdown</label>
                    <Select
                      name="ddlOne"
                      onChange={(valueOption) => {
                        setFieldValue("ddlOne", valueOption);
                        setFieldValue("ddlTwo", {});
                      }}
                      options={DDLOne || []}
                      value={values?.ddlOne}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>Dropdown Two</label>
                    <Select
                      name="DDLTwo"
                      onChange={(valueOption) => {
                        setFieldValue("ddlTwo", valueOption);
                      }}
                      options={DDLTwo || []}
                      value={values?.ddlTwo}
                    />
                  </div>
                </div>
              </div>
              <br />
              <button
                className="btn btn-primary mt-5"
                type="submit"
                disabled={!isValid}
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormSix;

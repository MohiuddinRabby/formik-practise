import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { getDivisions, getThana } from "./api";

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
const FormSeven = () => {
  // eslint-disable-next-line no-unused-vars
  const [DDLOne, setDDL] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [DDLTwo, setDDLTwo] = useState([]);
  useEffect(() => {
    getDivisions(setDDL);
  }, []);
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
                    <label>Divison</label>
                    <Select
                      name="ddlOne"
                      onChange={(valueOption) => {
                        setFieldValue("ddlOne", valueOption);
                        getThana(valueOption?.value, setDDLTwo);
                        setFieldValue("ddlTwo", {});
                      }}
                      value={values?.ddlOne}
                      options={DDLOne}
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>District</label>
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

export default FormSeven;

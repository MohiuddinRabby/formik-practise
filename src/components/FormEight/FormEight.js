import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { getBlogPosts, othersPost } from "./api";

// Validation schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name required"),
  userEmail: Yup.string().email().required("Email required"),
  ddlOne: Yup.object().shape({
    label: Yup.string().required("City Name required"),
    value: Yup.string().required("City Name required"),
  }),
});
const initialValues = {};
const FormEight = () => {
  // eslint-disable-next-line no-unused-vars
  const [DDLOne, setDDL] = useState([
    { value: 1, label: "Blog Post" },
    { value: 2, label: "Others" },
  ]);
  const [gridData, setGridData] = useState({});
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
              <div className="row">
                <div className="col-md-3">
                  <h1>DDL</h1>
                  <label>Dropdown</label>
                  <Select
                    name="ddlOne"
                    onChange={(valueOption) => {
                      setFieldValue("ddlOne", valueOption);
                      if (values?.ddlOne?.value === 1) {
                        getBlogPosts(setGridData);
                      } else if (values?.ddlOne?.value === 2) {
                        othersPost(setGridData);
                      }
                    }}
                    options={DDLOne}
                    value={values?.ddlOne}
                  />
                </div>
                <div className="col-md-9 pl-5">
                  <h1>Data</h1>
                  {/* {
                    gridData?.map(post=><li>{post?.title}</li>)
                  } */}
                  {gridData.title}
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormEight;
